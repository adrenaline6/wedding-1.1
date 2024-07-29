"use client";
import { CheerMessage } from "@/model";
import { cn } from "@/utils";
import { Noto_Serif_Display } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import "./message.css";

const noto = Noto_Serif_Display({
  preload: false,
});
export function Message() {
  const [data, setData] = useState<CheerMessage[]>([]);

  const getData = () => {
    fetch("/api/read-csv")
      .then((response) => response.json())
      .then((data) => {
        const dataR = [...(data ?? [])].reverse();
        setData(dataR);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    getData();

    return () => {};
  }, []);

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const listRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToWrite = [{ from: name.trim(), message: text.trim() }];

    try {
      const response = await fetch("/api/write-csv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: dataToWrite }),
      });

      if (response.ok) {
        setName("");
        setText("");

        getData();
        listRef.current?.scrollTo({ top: 0 });
      } else {
        console.error("Error writing data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section
      id="message"
      className="section-message img_bg bg_overlay"
      style={{
        backgroundImage:
          "url(https://jejuwedding.net/wp-content/uploads/2024/01/9.jpg)",
        display: "block",
      }}
    >
      <div className="message-container container">
        <h2 className="section-title">Gửi lời chúc đến cặp đôi</h2>
        <div className="list_message" ref={listRef}>
          {data.map((item) => {
            return (
              <div className="message-item" key={item.id}>
                <h3 className={cn(noto.className, "user_message")}>
                  {item.from}
                </h3>
                <p className="message_body"></p>
                <p>{item.message}</p>
                <p></p>
              </div>
            );
          })}
        </div>

        <div className="form-message">
          <h3 className="form-title">Gửi lời chúc</h3>
          <form
            action=""
            id="messageForm"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" id="postId" value="236" />
            <div className="input-group">
              <label htmlFor="">Tên của bạn</label>
              <input
                id="m_name"
                type="text"
                className="input"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="">Lời nhắn</label>
              <textarea
                id="m_text"
                className="input-text"
                name=""
                cols={30}
                rows={5}
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary send_message">
              Gửi lời chúc
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
