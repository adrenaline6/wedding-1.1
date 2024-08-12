import { AboutInfo } from "@/constants";
import Image from "next/image";

export function QrBox() {
  return (
    <div
      id="dialog-content"
      style={{
        display: "none",
        maxWidth: "500px",
      }}
    >
      <div className="gift-container" id="gift-container">
        <div className="gift-card">
          <div className="gift-qr">
            <Image
              src={AboutInfo.groom.qr}
              alt=""
              className="groom_qr"
              width={325}
              height={280}
            />
          </div>
          <div className="gift-body">
            <p className="font-bold">{AboutInfo.groom.name}</p>
          </div>
        </div>
        <div className="gift-card">
          <div className="gift-qr">
            <Image
              src={AboutInfo.bride.qr}
              alt=""
              className="groom_qr"
              width={325}
              height={280}
            />
          </div>
          <div className="gift-body">
            <p className="font-bold">{AboutInfo.bride.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
