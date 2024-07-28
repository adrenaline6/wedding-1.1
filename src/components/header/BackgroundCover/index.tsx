"use client";
import React from "react";
import { motion } from "framer-motion";
import "./cover.css";

const duration = 12;
export function BackgroundCover() {
  return (
    <motion.img
      className="w-full h-full object-cover bg-no-repeat bg-cover object-center lg:object-[right_0_top_-200px]"
      src="https://res.cloudinary.com/dl764aic5/image/upload/v1722166006/va-wedding/cover_pflqfp.jpg"
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: duration,
        times: [0, 0.6, 1],
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
}
