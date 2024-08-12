import { TimeLine, TimeLineBackground } from "@/constants";
import { TimeLineItem } from "@/model";
import { cn } from "@/utils";
import { Noto_Serif_Display } from "next/font/google";
import { Reveal } from "../review";
import "./timeline.css";
import Image from "next/image";

const noto = Noto_Serif_Display({
  preload: false,
});

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
        backgroundImage: `url(${TimeLineBackground})`,
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
          {TimeLine.map((item, index) => (
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
    <Reveal>
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
          <Image
            src={img}
            alt={title}
            className="timline-img"
            width={500}
            height={500}
          />
        </div>
        <div className="timeline-body">
          <span className={cn(noto.className, "story-date")}>{date}</span>
          <span className={cn(noto.className, "title")}>{title}</span>
          <p className="timeline-des"></p>
          <p>{desc}</p>
          <p></p>
        </div>
      </div>
    </Reveal>
  );
};
