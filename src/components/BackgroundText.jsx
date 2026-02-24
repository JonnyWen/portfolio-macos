import React from "react";

export default function BackgroundText() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">

      <h1 className="
        text-[80px] md:text-[140px]
        font-bold
        text-white/10
        blur-[1px]
        tracking-tight
        select-none
      ">
        Jonathan's
        <br />
        Portfolio
      </h1>

    </div>
  );
}