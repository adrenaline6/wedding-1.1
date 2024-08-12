import { RiGiftFill } from "react-icons/ri";
import { Fancybox } from "../fancybox";
import { QrBox } from "../qr-box";

export function FloatButton() {
  return (
    <div className="fixed right-6 bottom-6 z-10">
      <Fancybox>
        <button
          data-fancybox
          data-src="#dialog-content"
          className="btn btn-primary text-textWhite"
          style={{
            height: 60,
            width: 60,
            borderRadius: 9999,
          }}
        >
          <RiGiftFill size={30} />
        </button>
        <QrBox />
      </Fancybox>
    </div>
  );
}
