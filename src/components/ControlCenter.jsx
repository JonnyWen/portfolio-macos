import React, { useEffect } from "react";
import { Moon, Sun, Laptop2, X } from "lucide-react";
import { useTheme } from "../store/theme.js";

export default function ControlCenter({ open, onClose }) {
  const { mode, setMode } = useTheme();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const Button = ({ active, children, onClick }) => (
    <button
      onClick={onClick}
      className={[
        "flex items-center gap-2 px-3 py-2 rounded-xl border",
        "transition",
        active ? "bg-white/20 border-white/30" : "bg-white/10 border-white/15 hover:bg-white/15",
        "text-white/90",
      ].join(" ")}
    >
      {children}
    </button>
  );

  return (
    <div className="absolute top-12 right-4 z-[9999]">
      <div className="w-80 rounded-2xl border border-white/20 bg-black/35 backdrop-blur-xl shadow-glass overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="text-white/90 font-semibold">Control Center</div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 active:bg-white/15 transition"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-white/80" />
          </button>
        </div>

        <div className="p-4 space-y-3">
          <div className="text-xs uppercase tracking-wider text-white/60">Appearance</div>
          <div className="grid grid-cols-1 gap-2">
            <Button active={mode === "light"} onClick={() => setMode("light")}>
              <Sun className="w-4 h-4" /> Light
            </Button>
            <Button active={mode === "dark"} onClick={() => setMode("dark")}>
              <Moon className="w-4 h-4" /> Dark
            </Button>
            <Button active={mode === "system"} onClick={() => setMode("system")}>
              <Laptop2 className="w-4 h-4" /> System
            </Button>
          </div>

          <div className="text-xs text-white/55 leading-relaxed">
            Tip: drag windows around and click the Dock icons to open apps.
          </div>
        </div>
      </div>
    </div>
  );
}
