import { cn } from "@/utils";
import { Noto_Serif_Display } from "next/font/google";
import { RiFacebookFill, RiInstagramFill, RiPhoneFill } from "react-icons/ri";
import { Review } from "../review";
import "./about.css";

const noto = Noto_Serif_Display({
  preload: false,
});

//edit info
const AboutInfo = {
  bride: {
    image:
      "https://res.cloudinary.com/dl764aic5/image/upload/v1722167263/va-wedding/bride_pihpy2.jpg",
    name: "Thu Trang",
    dob: "04/01/1998",
    desc: " Khác với chú rể, cô dâu thuộc tuýp người hướng nội, đi du học từ nhỏ nên không có nhiều bạn bè.",
    social: {
      tel: "+84902618766",
      fb: "https://www.facebook.com/jan4398",
      insta: "https://www.instagram.com/jan4398/",
    },
  },
  groom: {
    image:
      "https://res.cloudinary.com/dl764aic5/image/upload/v1722167076/va-wedding/groom_hnqedq.jpg",
    name: "Việt Anh",
    dob: "04/01/1999",
    desc: "Chú rể là người cởi mở, thân thiện, giao tiếp tốt và thuộc tuýp người hướng ngoại.",
    social: {
      tel: "+84902618766",
      fb: "https://www.facebook.com/adren9728",
      insta: "https://www.instagram.com/adrenalineee_404",
    },
  },
};

export function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-heading">
          <p className="font-base text-center mb-1"></p>
          <h2
            className={cn(
              "text-[32px] font-bold text-center text-primaryColor",
              noto.className
            )}
          >
            Giới Thiệu{" "}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            className="about-card"
            style={{
              order: 2,
            }}
          >
            <div className="about-media">
              <img
                src={AboutInfo.bride.image}
                alt={AboutInfo.bride.name}
                className="bride_img"
              />
            </div>
            <Review className="about-body aos-init" once={false}>
              <h3 className={cn("text-[32px]", noto.className)}>
                {AboutInfo.bride.name}
              </h3>
              <p className="text-base font-quickSand">{AboutInfo.bride.dob}</p>
              <p className="text-base font-quickSand">{AboutInfo.bride.desc}</p>
              <div className="social-link">
                <a href={`tel:${AboutInfo.bride.social.tel}`}>
                  <RiPhoneFill className="hover:text-primaryColor" />
                </a>
                <a href={AboutInfo.bride.social.fb} target="_blank">
                  <i className="ri-facebook-fill"></i>{" "}
                  <RiFacebookFill className="hover:text-primaryColor" />
                </a>
                <a href={AboutInfo.bride.social.insta} target="_blank">
                  <RiInstagramFill className="hover:text-primaryColor" />
                </a>
              </div>
            </Review>
          </div>
          <div className="about-card" style={{ order: 1 }}>
            <div className="about-media">
              <img
                src={AboutInfo.groom.image}
                alt={AboutInfo.groom.name}
                className="groom_img"
              />
            </div>
            <Review className="about-body aos-init" once={false}>
              <h3 className={cn("text-[32px]", noto.className)}>
                {AboutInfo.groom.name}
              </h3>
              <p className="text-base font-quickSand">{AboutInfo.groom.dob}</p>
              <p className="text-base font-quickSand">{AboutInfo.groom.desc}</p>
              <div className="social-link">
                <a href={`tel:${AboutInfo.groom.social.tel}`}>
                  <RiPhoneFill className="hover:text-primaryColor" />
                </a>
                <a href={AboutInfo.groom.social.fb} target="_blank">
                  <i className="ri-facebook-fill"></i>{" "}
                  <RiFacebookFill className="hover:text-primaryColor" />
                </a>
                <a href={AboutInfo.groom.social.insta} target="_blank">
                  <RiInstagramFill className="hover:text-primaryColor" />
                </a>
              </div>
            </Review>
          </div>
        </div>
      </div>
    </section>
  );
}
