import { cn, getDayJs, numberPad } from "@/utils";
import { Noto_Serif_Display } from "next/font/google";
import { RiGift2Fill, RiMap2Line, RiPhoneFill } from "react-icons/ri";
import { BackgroundCover } from "./BackgroundCover";
import "./header.css";
import { AboutInfo, CountDownPlace, weekdays } from "@/constants";
import dayjs from "dayjs";

const noto = Noto_Serif_Display({
  preload: false,
});

export function Header() {
  return (
    <header>
      <section className="h-screen overflow-hidden relative">
        <BackgroundCover />
        <div className="max-w-maxWidth mx-auto my-0 px-5 py-0">
          <div className="banner-container text-textWhite">
            <Title />
            <Name />
            <Date />
            <SocialLink />
          </div>
        </div>
      </section>
    </header>
  );
}
const Title = () => {
  return (
    <div className={cn("text-[32px] font-windSong")}>
      <p>
        Save <span> The </span>Date
      </p>
    </div>
  );
};
const Name = () => {
  return (
    <div
      className={cn(
        "font-notoSerifDisplay text-[64px] text-center",
        noto.className
      )}
    >
      {AboutInfo.groom.name}
      <br />
      &amp;
      <br />
      {AboutInfo.bride.name}
    </div>
  );
};

const date = getDayJs(CountDownPlace.groom.timeStamp);

const Date = () => {
  return (
    <div
      className={cn(
        "border-y-[1px] border-solid border-white p-3",
        noto.className
      )}
    >
      <div className="group-date">
        <span className="border-y-[1px] border-solid border-white p-1 text-center uppercase">
          {weekdays[date.day()]}
        </span>
        <span className="font-bold text-[64px] text-center">
          {numberPad(date.date())}
        </span>
        <span className="border-y-[1px] border-solid border-white p-1 text-center">
          {numberPad(date.hour())}:{numberPad(date.minute())}
        </span>
      </div>
      <span>Tháng {numberPad(date.month() + 1)}</span>
      {". "}
      <span>{date.year()}</span>
      <div className="group-add">
        <p className="font-windSong text-base font-light">
          Hôn lễ được tổ chức tại
        </p>
        <span className="text-xl">{CountDownPlace.groom.name}</span>
        <span className="font-light text-base">
          {CountDownPlace.groom.address}
        </span>
      </div>
    </div>
  );
};
const SocialLink = () => {
  return (
    <div className="social-link">
      <a href={`tel:${AboutInfo.groom.social.tel}`}>
        <RiPhoneFill className="hover:text-primaryColor" />
      </a>
      <a href="#gift">
        <RiGift2Fill className="hover:text-primaryColor" />
      </a>
      <a href={CountDownPlace.groom.maps} target="_blank">
        <RiMap2Line className="hover:text-primaryColor" />
      </a>
    </div>
  );
};
