import React from "react";

export default function AboutApp() {
  return (
    <div className="text-white/85 space-y-3">
      <h1 className="text-xl font-semibold">Hey 👋 — I'm Jonathan.</h1>
      <p className="leading-relaxed text-white/75">
        This is a macOS-style portfolio template built with React + Vite, Tailwind, GSAP, and Zustand.
        Customize the text and apps to match your own story.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
          <div className="text-sm font-semibold text-white/85">What I do</div>
          <div className="text-sm text-white/70 mt-1">
            Full-Stack Software projects, lots of React, and I love front-end UI/UX work!
          </div>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
          <div className="text-sm font-semibold text-white/85">What I'm into</div>
          <div className="text-sm text-white/70 mt-1">
            Building things that feel polished, software dev, UI design, fintech.
          </div>
        </div>
      </div>
    </div>
  );
}
