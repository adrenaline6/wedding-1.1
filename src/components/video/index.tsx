import React from "react";
import "./video.css";
import { cn } from "@/utils";
import { Noto_Serif_Display } from "next/font/google";
const noto = Noto_Serif_Display({
  preload: false,
});

export function Video() {
  return (
    <section id="video">
      <div className="container">
        <p className="subtitle"></p>
        <h2
          className={cn(
            noto.className,
            "font-bold text-center text-primaryColor text-[32px]"
          )}
        >
          Những khoảng khắc đôi mình
        </h2>
      </div>
      <div className="video-container">
        <div className="video-list">
          <div className="video-item">
            <iframe
              title="WEDDING MOMENT - Phương Thanh x Quốc Đạt || ANH ĐÁNH RƠI NGƯỜI YÊU NÀY - AMEE FT. ANDIEZ | Cover"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/1JE24VcCZpM?feature=oembed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={false}
            ></iframe>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
