"use client";
import { cn } from "@/utils"; // Import Swiper React components
import { Noto_Serif_Display } from "next/font/google";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Fancybox } from "../fancybox";
import "./album.css";
import { motion } from "framer-motion";

import "swiper/css";
const noto = Noto_Serif_Display({
  preload: false,
});

const images = [
  "https://jejuwedding.net/wp-content/uploads/2024/01/27.80663.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/27.80001-1.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/27.80231-1.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/26.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/17.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/16.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/19-1.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/9.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/27.80452.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/11.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/8.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/5.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/27.80862.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/4.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/27.80307-1.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/27.80901.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/27.80878.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/24.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/22.jpg",
  "https://jejuwedding.net/wp-content/uploads/2024/01/27.80252-1.jpg",
];

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
        <h2
          className={cn(
            noto.className,
            "font-bold text-center text-primaryColor text-[32px]"
          )}
        >
          Album ảnh
        </h2>
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
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="object-cover block w-full rounded-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <a href={item} data-fancybox="gallery">
                    <img src={item} className="album-img" />
                  </a>
                  <div className="swiper-slide-shadow-left swiper-slide-shadow-coverflow"></div>
                  <div className="swiper-slide-shadow-right swiper-slide-shadow-coverflow"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Fancybox>
    </section>
  );
}
