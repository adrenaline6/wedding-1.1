import {
  AboutInfo,
  CountDownBackgroundCover,
  CountDownInfo,
  weekdays,
} from "@/constants";
import { cn, getDayJs, numberPad } from "@/utils";
import chineseLunar from "chinese-lunar";
import { Noto_Serif_Display } from "next/font/google";
import { RiMap2Fill, RiPhoneFill } from "react-icons/ri";
import { Timer } from "../timer";
import "./count-down.css";
import { Heart } from "./heart";
import Image from "next/image";

const noto = Noto_Serif_Display({
  preload: false,
});

const groomTime = getDayJs(CountDownInfo.groom.timeStamp);
const brideTime = getDayJs(CountDownInfo.bride.timeStamp);

const groomLunar = chineseLunar.solarToLunar(groomTime.toDate());
const brideLunar = chineseLunar.solarToLunar(brideTime.toDate());

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
              <Image
                src={CountDownInfo.groom.img}
                alt={CountDownInfo.groom.name}
                width={500}
                height={500}
              />
              <h3 className={cn(noto.className, "text-2xl")}>
                {CountDownInfo.groom.name}
              </h3>
              <address>
                <p>{CountDownInfo.groom.address}</p>
              </address>
              <div className="invitation-body">
                <div className="invi_time">
                  <p className="font-bold">
                    Vào lúc {numberPad(groomTime.hour())}:
                    {numberPad(groomTime.minute())}
                  </p>
                  <div className="invi_group_time">
                    <span className="invi_date_text">
                      {weekdays[groomTime.day()]}
                    </span>
                    <span className={cn(noto.className, "invi_date_number")}>
                      <p className="invi_date">{numberPad(groomTime.date())}</p>
                      /
                      <p className="invi_month">
                        {numberPad(groomTime.month() + 1)}
                      </p>
                    </span>
                    <span className="invi_year_text">{groomTime.year()}</span>
                  </div>
                  <p className="invi_amlich">
                    Nhằm Ngày {groomLunar.day - 1}/{groomLunar.month}
                  </p>
                </div>
              </div>
              <div className="social-link">
                {AboutInfo.groom.social.tel ? (
                  <a
                    href={`tel:${AboutInfo.groom.social.tel}`}
                    className="phone_number"
                  >
                    <RiPhoneFill />
                  </a>
                ) : undefined}
                {/* <a
                  href="https://jejuwedding.net/wp-content/uploads/2024/01/thiep.png"
                  className="phone_number"
                  data-fancybox=""
                >
                  <i className="ri-image-circle-fill"></i>
                  <RiImageCircleFill />
                </a> */}

                {AboutInfo.groom.social.tel ? (
                  <a
                    href={CountDownInfo.groom.maps}
                    target="_blank"
                    className="invi_map"
                  >
                    <RiMap2Fill />
                  </a>
                ) : undefined}
              </div>
            </div>
            {/* <div className="invitation-card">
              <Image src={CountDownInfo.bride.img} alt="" 
                width={500}
                height={500}/>
              <h3 className={cn(noto.className, "text-2xl")}>
                {CountDownInfo.bride.name}
              </h3>
              <address>
                <p>{CountDownInfo.bride.address}</p>
              </address>
              <div className="invitation-body">
                <div className="invi_time">
                  <p className="font-bold">
                    Vào lúc {numberPad(brideTime.hour())}:
                    {numberPad(brideTime.minute())}
                  </p>
                  <div className="invi_group_time">
                    <span className="invi_date_text">
                      {weekdays[brideTime.day()]}
                    </span>
                    <span className={cn(noto.className, "invi_date_number")}>
                      <p className="invi_date">{numberPad(brideTime.date())}</p>
                      /
                      <p className="invi_month">
                        {numberPad(brideTime.month() + 1)}
                      </p>
                    </span>
                    <span className="invi_year_text">{brideTime.year()}</span>
                  </div>
                  <p className="invi_amlich">
                    Nhằm Ngày {brideLunar.day - 1}/{brideLunar.month}
                  </p>
                </div>
              </div>
              <div className="social-link">
                {AboutInfo.bride.social.tel ? (
                  <a
                    href={`tel:${AboutInfo.bride.social.tel}`}
                    className="phone_number"
                  >
                    <RiPhoneFill />
                  </a>
                ) : undefined}

                {AboutInfo.bride.social.tel ? (
                  <a
                    href={CountDownInfo.bride.maps}
                    target="_blank"
                    className="invi_map"
                  >
                    <RiMap2Fill />
                  </a>
                ) : undefined}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
