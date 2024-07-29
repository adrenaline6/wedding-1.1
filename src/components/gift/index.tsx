import { cn } from "@/utils";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Noto_Serif_Display } from "next/font/google";
import { RiGiftFill } from "react-icons/ri";
import { Fancybox } from "../fancybox";
import "./gift.css";

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
            href="https://jejuwedding.net/wp-content/uploads/2024/01/z5188874786913_a20788673bb51c9f427e44d6717f12b5.jpg"
          >
            <RiGiftFill size={30} />
            GỬI QUÀ ĐẾN CÔ DÂU CHÚ RỂ
          </a>
        </Fancybox>
        {/* <div
            id="box-gift"
            data-fancybox="gallery"
            style={{
              display: "none",
            }}
          >
            <div className="gift-container" id="gift-container">
              <div className="gift-card">
                <div className="gift-qr">
                  <img
                    src="https://jejuwedding.net/wp-content/uploads/2024/01/z5188874786913_a20788673bb51c9f427e44d6717f12b5.jpg"
                    alt=""
                    className="groom_qr"
                  />
                </div>
                <div className="gift-body">
                  <p>Thành Trung</p>
                </div>
              </div>
              <div className="gift-card">
                <div className="gift-qr">
                  <img
                    src="https://jejuwedding.net/wp-content/uploads/2024/01/z5188874786913_a20788673bb51c9f427e44d6717f12b5.jpg"
                    alt=""
                    className="groom_qr"
                  />
                </div>
                <div className="gift-body">
                  <p>Thanh Hằng</p>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  );
}
