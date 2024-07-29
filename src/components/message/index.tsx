import React from "react";
import "./message.css";
import { cn } from "@/utils";
import { Noto_Serif_Display } from "next/font/google";

const noto = Noto_Serif_Display({
  preload: false,
});
export function Message() {
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
        <div className="list_message">
          <div className="message-item">
            {" "}
            <h3 className={cn(noto.className, "user_message")}>3</h3>{" "}
            <p className="message_body"></p>
            <p>3</p>
            <p></p>{" "}
          </div>
          <div className="message-item">
            {" "}
            <h3 className="user_message">1</h3> <p className="message_body"></p>
            <p>2</p>
            <p></p>{" "}
          </div>
          <div className="message-item">
            {" "}
            <h3 className="user_message">JEJU Wedding</h3>{" "}
            <p className="message_body"></p>
            <p>Happy Wedding!</p>
            <p></p>{" "}
          </div>
          <div className="message-item">
            {" "}
            <h3 className="user_message">
              JEJU Wedding{" "}
              <img
                draggable="false"
                role="img"
                className="emoji"
                alt="❤️"
                src="https://s.w.org/images/core/emoji/15.0.3/svg/2764.svg"
              />
            </h3>{" "}
            <p className="message_body"></p>
            <p>
              Happy Wedding!
              <br />
              Trăm năm hạnh phúc, sớm sinh quý tử nha{" "}
              <img
                draggable="false"
                role="img"
                className="emoji"
                alt="🫶🏻"
                src="https://s.w.org/images/core/emoji/15.0.3/svg/1faf6-1f3fb.svg"
              />
            </p>
            <p></p>{" "}
          </div>
        </div>

        <div className="form-message">
          <h3 className="form-title">Gửi lời chúc</h3>
          <form action="" id="messageForm" method="POST">
            <input type="hidden" id="postId" value="236" />
            <div className="input-group">
              <label htmlFor="">Tên của bạn</label>
              <input
                id="m_name"
                type="text"
                className="input"
                value=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="">Lời nhắn</label>
              <textarea
                id="m_text"
                className="input-text"
                name=""
                cols="30"
                rows="5"
                required
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
