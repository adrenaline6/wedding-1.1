import React from "react";
import "./thank-you.css";
import { Noto_Serif_Display } from "next/font/google";
import { cn } from "@/utils";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { Reveal } from "../review";
import Image from "next/image";
import { AnimationTitle } from "../animation-title";

const noto = Noto_Serif_Display({
  preload: false,
});

export function ThankYou() {
  return (
    <section id="thankyou" className="section-thankyou bg_overlay">
      <Image
        src="https://res.cloudinary.com/dl764aic5/image/upload/v1722167432/va-wedding/end_r9fgxh.jpg"
        alt=""
        className="thankyou-bg thankyou_img"
        style={{
          objectPosition: "center center",
        }}
        width={1400}
        height={1000}
      />
      <div className="thankyou-body container">
        <AnimationTitle
          className={cn(
            noto.className,
            "text-6xl aos-init aos-animate leading-[1.6]"
          )}
          data-aos="fade-up"
          data-aos-duration="2000"
          title="Thank you!"
        />
        <Reveal>
          <p
            className="text-xl text-center font-quickSand aos-init aos-animate leading-9"
            data-aos="fade"
            data-aos-duration="3000"
          >
            Sự hiện diện của quý vị là niềm vui và vinh hạnh cho gia đình chúng
            tôi.
            <br />
            Chân thành cảm ơn!
          </p>
        </Reveal>
        {/* <div className="social">
          <h4 className="font-quickSand text-base">Chia sẻ thiệp</h4>
          <div className="social-link">
            <a href="#" className="facebook">
              <RiFacebookFill />
            </a>
            <a href="#" className="instargram">
              <RiInstagramFill />
            </a>
            <a href="#" className="twiter">
              <i className="ri-twitter-x-line"></i>
              <RiTwitterXFill />
            </a>
            <a href="#" className="pinterest">
              <RiPinterestFill />
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
