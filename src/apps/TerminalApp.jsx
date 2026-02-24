import React, { useMemo, useState } from "react";

const help = [
  { cmd: "help", out: "Commands: help, whoami, skills, clear" },
  { cmd: "whoami", out: "Jonathan — CS + Finance @ Waterloo, building software things." },
  { cmd: "skills", out: "React, TypeScript, Python, C++, C, SQL, R, GSAP (and more)." },
];

export default function TerminalApp() {
  const [lines, setLines] = useState([
    "Welcome to Terminal.",
    "Ask about me with 'whoami'",
    "Type 'help' to see commands.",
  ]);
  const [value, setValue] = useState("");

  const cmdMap = useMemo(() => new Map(help.map((h) => [h.cmd, h.out])), []);

  const run = () => {
    const cmd = value.trim();
    if (!cmd) return;
    if (cmd === "clear") {
      setLines([]);
      setValue("");
      return;
    }
    const out = cmdMap.get(cmd) ?? `command not found: ${cmd}`;
    setLines((l) => [...l, `$ ${cmd}`, out]);
    setValue("");
  };

  return (
    <div className="text-white/85 font-mono">
      <div className="rounded-2xl border border-white/15 bg-black/25 p-3 h-72 overflow-auto">
        {lines.map((l, i) => (
          <div key={i} className="text-sm leading-6 text-white/80">
            {l}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="text-white/70">$</span>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && run()}
          className="flex-1 bg-black/25 border border-white/15 rounded-xl px-3 py-2 text-sm text-white/85 outline-none focus:border-white/25"
          placeholder="help"
        />
        <button
          onClick={run}
          className="px-3 py-2 rounded-xl border border-white/15 bg-white/10 hover:bg-white/15 transition text-sm"
        >
          Run
        </button>
      </div>
    </div>
  );
}
