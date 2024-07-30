import React from "react";
import { Fancybox } from "../fancybox";
import { RiGiftFill } from "react-icons/ri";
import { BankImage } from "@/constants";

export function FloatButton() {
  return (
    <div className="fixed right-6 bottom-6 z-[9999]">
      <Fancybox>
        <a
          className="btn btn-primary text-textWhite"
          style={{
            height: 60,
            width: 60,
            borderRadius: 9999,
          }}
          data-fancybox="gallery"
          href={BankImage}
        >
          <RiGiftFill size={30} />
        </a>
      </Fancybox>
    </div>
  );
}
