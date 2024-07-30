import { cn } from "@/utils";
import { Noto_Serif_Display } from "next/font/google";
import {
  RiFacebookFill,
  RiImageCircleFill,
  RiMap2Fill,
  RiPhoneFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { Timer } from "../timer";
import "./count-down.css";
import {
  CountDownPlace,
  CountDownBackgroundCover,
  weekdays,
} from "@/constants";
import dayjs from "dayjs";
import { Heart } from "./heart";

const noto = Noto_Serif_Display({
  preload: false,
});

const groomTime = dayjs.unix(CountDownPlace.groom.timeStamp);
const brideTime = dayjs.unix(CountDownPlace.bride.timeStamp);

export function Countdown() {
  return (
    <section id="countdown-section" className="">
      <div className="container">
        <div
          className="count-down section-countdown img_bg bg_overlay"
          style={{
            backgroundImage: `url(${CountDownBackgroundCover})`,
          }}
        >
          <p className="text-base text-center mb-1 font-quickSand">
            CÙNG ĐẾM NGƯỢC THỜI GIAN
          </p>
          <h2
            className={cn(noto.className, "text-[32px] font-bold text-center")}
          >
            Save The Date
          </h2>
          <Heart />
          <Timer />
        </div>

        <div className="bg-background">
          <div className="invitation-container grid md:flex md:justify-evenly">
            <div className="invitation-card">
              {" "}
              <img src={CountDownPlace.groom.img} alt="" />
              <h3 className={cn(noto.className, "text-2xl")}>
                {CountDownPlace.groom.name}
              </h3>
              <address>
                <p>{CountDownPlace.groom.address}</p>
              </address>
              <div className="invitation-body">
                <div className="invi_time">
                  <p className="font-bold">
                    Vào lúc {groomTime.hour().toString().padStart(2, "0")}:
                    {groomTime.minute().toString().padStart(2, "0")}
                  </p>
                  <div className="invi_group_time">
                    <span className="invi_date_text">
                      {weekdays[groomTime.day()]}
                    </span>
                    <span className={cn(noto.className, "invi_date_number")}>
                      <p className="invi_date">
                        {(groomTime.day() + 1).toString().padStart(2, "0")}
                      </p>
                      /
                      <p className="invi_month">
                        {(groomTime.month() + 1).toString()}
                      </p>
                    </span>
                    <span className="invi_year_text">{groomTime.year()}</span>
                  </div>
                  <p className="invi_amlich">Nhằm Ngày ....</p>
                </div>
              </div>
              <div className="social-link">
                <a href="tel:(+84)" className="phone_number">
                  <RiPhoneFill />
                </a>
                <a
                  href="https://jejuwedding.net/wp-content/uploads/2024/01/thiep.png"
                  className="phone_number"
                  data-fancybox=""
                >
                  <i className="ri-image-circle-fill"></i>
                  <RiImageCircleFill />
                </a>

                <a href="" className="invi_map" target="_blank">
                  <RiFacebookFill />
                </a>

                <a href="" className="invi_map" target="_blank">
                  <RiTwitterXFill />
                </a>

                <a href="" className="invi_map" target="_blank">
                  <RiMap2Fill />
                </a>
              </div>
            </div>
            <div className="invitation-card">
              {" "}
              <img src={CountDownPlace.bride.img} alt="" />
              <h3 className={cn(noto.className, "text-2xl")}>
                {CountDownPlace.bride.name}
              </h3>
              <address>
                <p>{CountDownPlace.bride.address}</p>
              </address>
              <div className="invitation-body">
                <div className="invi_time">
                  <p className="font-bold">
                    Vào lúc {brideTime.hour().toString().padStart(2, "0")}:
                    {brideTime.minute().toString().padStart(2, "0")}
                  </p>
                  <div className="invi_group_time">
                    <span className="invi_date_text">
                      {weekdays[brideTime.day()]}
                    </span>
                    <span className={cn(noto.className, "invi_date_number")}>
                      <p className="invi_date">
                        {(brideTime.day() + 1).toString().padStart(2, "0")}
                      </p>
                      /
                      <p className="invi_month">
                        {(brideTime.month() + 1).toString()}
                      </p>
                    </span>
                    <span className="invi_year_text">{brideTime.year()}</span>
                  </div>
                  <p className="invi_amlich">Nhằm Ngày ....</p>
                </div>
              </div>
              <div className="social-link">
                <a href="tel:(+84)" className="phone_number">
                  <RiPhoneFill />
                </a>
                <a
                  href="https://jejuwedding.net/wp-content/uploads/2024/01/thiep.png"
                  className="phone_number"
                  data-fancybox=""
                >
                  <i className="ri-image-circle-fill"></i>
                  <RiImageCircleFill />
                </a>

                <a href="" className="invi_map" target="_blank">
                  <RiFacebookFill />
                </a>

                <a href="" className="invi_map" target="_blank">
                  <RiTwitterXFill />
                </a>

                <a href="" className="invi_map" target="_blank">
                  <RiMap2Fill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
