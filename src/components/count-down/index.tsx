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
          <svg
            className="heartbeat"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="red"
              d="M16.5 13.287c-2.475-2.716-5.5-.712-5.5 2.112c0 2.56 1.814 4.035 3.358 5.292l.044.036l.427.35c.571.475 1.121.923 1.671.923s1.1-.448 1.671-.923C19.789 19.73 22 18.224 22 15.399c0-.927-.326-1.767-.853-2.38c-1.075-1.251-2.985-1.556-4.647.268Z"
            ></path>
            <path
              fill="#f1ebe4"
              d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501C16.5.825 22 4.274 22 9.137c0 .834-.118 1.6-.329 2.31a4.203 4.203 0 0 0-2.619-.947c-.89-.005-1.758.274-2.553.81c-1.39-.933-2.956-1.058-4.33-.395c-1.635.79-2.669 2.556-2.669 4.484c0 2.306 1.149 3.923 2.342 5.095c-.948-.076-1.897-.808-2.88-1.583c-.277-.219-.564-.44-.856-.664Z"
            ></path>
          </svg>
          <Timer />
          {/* <script>var date = "07" var month = "01"</script> */}
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
