import { AboutInfo } from "@/constants";
import { cn } from "@/utils";
import { Noto_Serif_Display } from "next/font/google";
import { RiFacebookFill, RiInstagramFill, RiPhoneFill } from "react-icons/ri";
import { Reveal } from "../review";
import "./about.css";
import Image from "next/image";

const noto = Noto_Serif_Display({
  preload: false,
});

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
            Giới Thiệu
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
              <Image
                src={AboutInfo.bride.image}
                alt={AboutInfo.bride.name}
                className="bride_img"
                width={500}
                height={500}
              />
            </div>
            <Reveal className="about-body aos-init" once={false}>
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
            </Reveal>
          </div>
          <div className="about-card" style={{ order: 1 }}>
            <div className="about-media">
              <Image
                src={AboutInfo.groom.image}
                alt={AboutInfo.groom.name}
                className="groom_img"
                width={500}
                height={500}
              />
            </div>
            <Reveal className="about-body aos-init" once={false}>
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
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
