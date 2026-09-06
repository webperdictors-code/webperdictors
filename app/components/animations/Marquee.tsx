"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  speedClassName?: string;
}

export default function Marquee({
  children,
  className,
  reverse = false,
  speedClassName = "animate-marquee",
}: MarqueeProps) {
  return (
    <div
      className={clsx(
        "group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={clsx(
          "flex shrink-0 items-center gap-12 pr-12 group-hover:[animation-play-state:paused]",
          speedClassName,
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={clsx(
          "flex shrink-0 items-center gap-12 pr-12 group-hover:[animation-play-state:paused]",
          speedClassName,
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
