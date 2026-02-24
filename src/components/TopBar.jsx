import React, { useEffect, useState } from "react";
import { Wifi, BatteryFull, SlidersHorizontal } from "lucide-react";

function formatTime(d) {
  return d.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function TopBar({ onToggleControlCenter }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 10_000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-11 px-4 flex items-center justify-between text-white/90">
      <div className="font-medium tracking-tight">Jonathan Wen</div>
      <div className="flex items-center gap-3 text-white/85">
        <div className="hidden sm:block text-sm">{formatTime(now)}</div>
        <Wifi className="w-4 h-4" />
        <BatteryFull className="w-4 h-4" />
        <button
          onClick={onToggleControlCenter}
          className="p-1.5 rounded-lg hover:bg-white/10 active:bg-white/15 transition"
          aria-label="Open Control Center"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
