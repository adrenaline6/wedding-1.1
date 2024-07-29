"use client";
import { cn } from "@/utils";
import { Noto_Serif_Display } from "next/font/google";
import { Review } from "../review";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
const duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

const noto = Noto_Serif_Display({
  preload: false,
});

// const weddingDay = dayjs("2024-07-29 14:55:00", "YYYY-MM-DD HH:mm:ss");
const weddingDay = dayjs("2024-09-02 09:15:00", "YYYY-MM-DD HH:mm:ss");

export function Timer() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  const [hasReached, setHasReached] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = getTimeRemaining();
      setTimeRemaining(timeLeft);
      if (timeLeft.isPast) {
        setHasReached(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeRemaining() {
    const now = dayjs();
    const diff = weddingDay.diff(now);

    if (diff <= 0) {
      return { isPast: true };
    }

    const duration = dayjs.duration(diff);
    return {
      isPast: false,
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  return (
    <>
      <Review once={false}>
        {hasReached ? (
          <div id="content" className="emoji">
            <span>Đã kết hôn</span>
          </div>
        ) : (
          <div id="countdown">
            <ul>
              <li className="font-quickSand">
                <span
                  id="days"
                  className={cn(
                    noto.className,
                    "text-[32px] text-center font-semibold block"
                  )}
                >
                  {timeRemaining.days}
                </span>
                ngày
              </li>
              <li className="font-quickSand">
                <span
                  id="hours"
                  className={cn(
                    noto.className,
                    "text-[32px] text-center font-semibold block"
                  )}
                >
                  {timeRemaining.hours}
                </span>
                giờ
              </li>
              <li className="font-quickSand">
                <span
                  id="minutes"
                  className={cn(
                    noto.className,
                    "text-[32px] text-center font-semibold block"
                  )}
                >
                  {timeRemaining.minutes}
                </span>
                phút
              </li>
              <li className="font-quickSand">
                <span
                  id="seconds"
                  className={cn(
                    noto.className,
                    "text-[32px] text-center font-semibold block"
                  )}
                >
                  {timeRemaining.seconds}
                </span>
                giây
              </li>
            </ul>
          </div>
        )}
      </Review>
    </>
  );
}
