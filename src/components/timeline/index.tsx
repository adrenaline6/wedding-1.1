import React from "react";
import "./timeline.css";
import { cn } from "@/utils";
import { Noto_Serif_Display } from "next/font/google";
import { Review } from "../review";

const noto = Noto_Serif_Display({
  preload: false,
});

interface TimeLineItem {
  img: string;
  date: string;
  title: string;
  desc: string;
}

const timeline: TimeLineItem[] = [
  {
    img: "https://jejuwedding.net/wp-content/uploads/2024/01/4.jpg",
    date: "20.03.2020",
    title: "Lần đầu gặp gỡ",
    desc: "Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen.",
  },
  {
    img: "https://jejuwedding.net/wp-content/uploads/2024/01/27.80452.jpg",
    date: "04.05.2023",
    title: "Hẹn hò",
    desc: "Mỗi chiều cuối tuần thường chạy xe vòng quanh qua những con phố, len lỏi trong từng dòng người tấp nập",
  },
  {
    img: "https://jejuwedding.net/wp-content/uploads/2024/01/26.jpg",
    date: "24.08.2023",
    title: "Lễ đính hôn",
    desc: "Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang mới.",
  },
  {
    img: "https://jejuwedding.net/wp-content/uploads/2024/01/4.jpg",
    date: "06.01.2024",
    title: "Lễ thành hôn",
    desc: "Em và anh không chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh",
  },
];

interface TimelineItemProps {
  data: TimeLineItem;
  index?: number;
}
export function Timeline() {
  return (
    <section
      id="time-line"
      className="time-line-section img_bg bg_overlay"
      style={{
        backgroundImage:
          "url(https://jejuwedding.net/wp-content/uploads/2024/01/24.jpg)",
      }}
    >
      <div className="time-line container">
        <div className="section-heading">
          <p className="text-center mb-1 text-base">CÂU CHUYỆN TÌNH YÊU</p>
          <h2
            className={cn(
              noto.className,
              "font-bold text-center md:text-[54px] text-[32px]"
            )}
          >
            Love Story{" "}
          </h2>
        </div>

        <div className="timeline-list">
          {timeline.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const TimelineItem = (props: TimelineItemProps) => {
  const {
    data: { date, desc, img, title },
    index,
  } = props;
  return (
    <Review>
      <div
        className="timeline-item aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className="timeline-media"
          style={{
            order: (index ?? 0) % 2 === 0 ? 0 : 1,
          }}
        >
          <img src={img} alt={title} className="timline-img" />
        </div>
        <div className="timeline-body">
          <span className={cn(noto.className, "story-date")}>{date}</span>
          <span className={cn(noto.className, "title")}>{title}</span>
          <p className="timeline-des"></p>
          <p>{desc}</p>
          <p></p>
        </div>
      </div>
    </Review>
  );
};
