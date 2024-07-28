"use client";
import { motion } from "framer-motion";
import React from "react";

interface ReviewProps extends React.HTMLAttributes<HTMLDivElement> {
  once?: boolean;
}

export function Review(props: ReviewProps) {
  const { once = true, children, ...rest } = props;
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: once, amount: 0.1 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
