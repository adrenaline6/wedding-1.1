"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiMusicFill, RiVolumeMuteFill, RiVolumeUpFill } from "react-icons/ri";
import "./music-player.css";

export function MusicPlayer() {
  const [pause, setPause] = useState(false);

  useEffect(() => {
    document
      .getElementById("audio")
      ?.play?.()
      ?.catch((error) => {
        setTimeout(() => {
          document.addEventListener(
            "click",
            () => {
              document.getElementById("audio")?.play();
            },
            { once: true }
          );
        }, 100);
      });
  }, []);

  const onToggleMute = () => {
    const audio: Partial<HTMLAudioElement> | null =
      document.getElementById("audio");
    if (pause) {
      audio?.play?.();
      return;
    }
    audio?.pause?.();
  };

  return (
    <div className="fixed right-6 top-6 z-10">
      <button
        className="btn btn-primary text-textWhite music-toggle"
        style={{
          borderRadius: 9999,
        }}
        data-fancybox="gallery"
        onClick={onToggleMute}
      >
        {pause ? (
          <RiVolumeMuteFill size={16} className="min-w-[30px]" />
        ) : (
          <RiVolumeUpFill size={16} />
        )}
      </button>
      <audio
        id="audio"
        autoPlay={true}
        // controls
        loop
        onPause={() => setPause(true)}
        onPlay={() => setPause(false)}
      >
        <source
          src="https://res.cloudinary.com/dl764aic5/video/upload/v1722321653/va-wedding/music/TAEYANG_-_WEDDING_DRESS___Piano_Cover_AnCoong_128kbps_v3vaep.mp3"
          type="audio/mp3"
        />
      </audio>
    </div>
  );
}
