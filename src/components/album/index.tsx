"use client";
import { cn } from "@/utils"; // Import Swiper React components
import { motion } from "framer-motion";
import { Noto_Serif_Display } from "next/font/google";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Fancybox } from "../fancybox";
import "./album.css";

import { AlbumImages } from "@/constants";
import "swiper/css";
import Image from "next/image";
import { AnimationTitle } from "../animation-title";
const noto = Noto_Serif_Display({
  preload: false,
});

const swiperConfig: SwiperProps = {
  spaceBetween: 24,
  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
  },
  loop: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  centeredSlides: true,
};

export function Album() {
  return (
    <section id="album">
      <div className="container">
        <AnimationTitle
          className={cn(
            noto.className,
            "font-bold text-center text-primaryColor text-[32px]"
          )}
          title="Album ảnh"
        />
      </div>

      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className="album-slide">
          <Swiper
            {...swiperConfig}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {AlbumImages.sort((a, b) => 0.5 - Math.random()).map(
              (item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="object-cover block w-full rounded-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <a href={item} data-fancybox="gallery">
                      <Image
                        src={item}
                        className="album-img"
                        alt=""
                        width={500}
                        height={500}
                      />
                    </a>
                    <div className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"></div>
                    <div className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"></div>
                  </motion.div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </Fancybox>
    </section>
  );
}
