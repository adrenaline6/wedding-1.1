import { cn } from "@/utils";
import "./header.css";
import { RiPhoneFill, RiGift2Fill, RiMap2Line } from "react-icons/ri";
import { Noto_Serif_Display } from "next/font/google";

const noto = Noto_Serif_Display({
  preload: false,
});

export function Header() {
  return (
    <header>
      <section className="h-screen overflow-hidden relative">
        <img
          className="w-full h-full object-cover bg-no-repeat bg-cover"
          src="https://jejuwedding.net/wp-content/uploads/2024/01/11.jpg"
          style={{
            backgroundPositionX: "center",
            backgroundPositionY: "center",
          }}
        />
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
      Việt Anh
      <br />
      &amp;
      <br />
      Thu Trang
    </div>
  );
};
const Date = () => {
  return (
    <div
      className={cn(
        "border-y-[1px] border-solid border-white p-3",
        noto.className
      )}
    >
      <div className="group-date">
        <span className="border-y-[1px] border-solid border-white p-1 text-center">
          Thứ 7
        </span>
        <span className="font-bold text-[64px] text-center">06</span>
        <span className="border-y-[1px] border-solid border-white p-1 text-center">
          10h45
        </span>
      </div>
      <span>Tháng 09</span>
      {". "}
      <span>2024</span>
      <div className="group-add">
        <p className="font-windSong text-base font-light">
          Hôn lễ được tổ chức tại
        </p>
        <span className="text-xl">Luxury Palace</span>
        <span className="font-light text-base">
          171 Nguyễn Thái Sơn, P8, Gò Vấp
        </span>
      </div>
    </div>
  );
};
const SocialLink = () => {
  return (
    <div className="social-link">
      <a href="tel:+84983460172">
        <RiPhoneFill className="hover:text-primaryColor" />
      </a>
      <a href="#gift">
        <RiGift2Fill className="hover:text-primaryColor" />
      </a>
      <a
        href="https://www.google.com/maps/place/11%C2%B051'41.9%22N+108%C2%B013'07.0%22E/@11.8616389,108.2186111,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.8616389!4d108.2186111?entry=ttu"
        target="_blank"
      >
        <RiMap2Line className="hover:text-primaryColor" />
      </a>
    </div>
  );
};
