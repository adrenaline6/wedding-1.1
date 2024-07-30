import { cn } from "@/utils";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Noto_Serif_Display } from "next/font/google";
import { RiGiftFill } from "react-icons/ri";
import { Fancybox } from "../fancybox";
import "./gift.css";
import { BankImage } from "@/constants";

const noto = Noto_Serif_Display({
  preload: false,
});

export function Gift() {
  return (
    <section id="gift" className="section-gift block">
      <div className="container">
        <p className="text-base text-center mb-1"></p>
        <h2
          className={cn(
            noto.className,
            "text-primaryColor text-[32px] text-center font-bold"
          )}
        >
          Gift box
        </h2>
        <Fancybox>
          <a
            className="btn btn-primary text-textWhite mt-10 gap-x-3"
            data-fancybox="gallery"
            href={BankImage}
          >
            <RiGiftFill size={30} />
            GỬI QUÀ ĐẾN CÔ DÂU CHÚ RỂ
          </a>
        </Fancybox>
      </div>
    </section>
  );
}
