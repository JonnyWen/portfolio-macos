import React from "react";
import { useTheme } from "../store/theme.js";

export default function SettingsApp() {
  const { mode, setMode } = useTheme();
  return (
    <div className="text-white/85 space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Settings</h2>
        <div className="text-sm text-white/65">Theme mode is global (Control Center also edits this).</div>
      </div>

      <div className="rounded-2xl border border-white/15 bg-white/5 p-4 space-y-2">
        <div className="text-sm font-semibold">Theme</div>
        <div className="flex flex-wrap gap-2">
          {["system", "light", "dark"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={[
                "px-3 py-2 rounded-xl border text-sm transition",
                mode === m ? "bg-white/20 border-white/30" : "bg-white/10 border-white/15 hover:bg-white/15",
              ].join(" ")}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

    
    </div>
  );
}
