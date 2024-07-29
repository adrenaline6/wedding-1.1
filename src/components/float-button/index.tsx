import React from "react";
import { Fancybox } from "../fancybox";
import { RiGiftFill } from "react-icons/ri";

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
          href="https://jejuwedding.net/wp-content/uploads/2024/01/z5188874786913_a20788673bb51c9f427e44d6717f12b5.jpg"
        >
          <RiGiftFill size={30} />
        </a>
      </Fancybox>
    </div>
  );
}
