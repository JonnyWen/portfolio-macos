import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

export default function Dock({ apps, openApps, onOpen }) {
  const dockRef = useRef(null);
  const itemRefs = useRef([]);

  const items = useMemo(() => apps, [apps]);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const base = 44; // px
    const max = 74;  // px
    const influence = 160; // px radius

    const onMove = (e) => {
      const r = dock.getBoundingClientRect();
      const x = e.clientX - r.left;

      itemRefs.current.forEach((el) => {
        if (!el) return;
        const ir = el.getBoundingClientRect();
        const ix = (ir.left + ir.right) / 2 - r.left;
        const d = Math.abs(ix - x);
        const t = Math.max(0, 1 - d / influence); // 0..1
        const size = base + (max - base) * (t * t);

        gsap.to(el, {
          width: size,
          height: size,
          duration: 0.15,
          ease: "power2.out",
        });
      });
    };

    const onLeave = () => {
      itemRefs.current.forEach((el) => {
        if (!el) return;
        gsap.to(el, { width: 44, height: 44, duration: 0.2, ease: "power2.out" });
      });
    };

    dock.addEventListener("mousemove", onMove);
    dock.addEventListener("mouseleave", onLeave);
    return () => {
      dock.removeEventListener("mousemove", onMove);
      dock.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center z-[9998] pointer-events-none">
      <div
        ref={dockRef}
        className="pointer-events-auto px-3 py-2 rounded-2xl border border-white/20 bg-black/30 backdrop-blur-xl shadow-glass"
      >
        <div className="flex items-end gap-3">
          {items.map((app, idx) => {
            const { Icon } = app;
            const isOpen = !!openApps?.[app.id];
            return (
              <button
                key={app.id}
                onClick={() => onOpen(app.id)}
                className="flex flex-col items-center gap-1"
                title={app.title}
              >
                <div
                  ref={(el) => (itemRefs.current[idx] = el)}
                  className="w-11 h-11 rounded-2xl bg-white/12 border border-white/15 flex items-center justify-center hover:bg-white/15 transition relative"
                >
                  <Icon className="w-5 h-5 text-white/90" />
                  {isOpen && (
                    <div className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-white/70" />
                  )}
                </div>
                <div className="hidden sm:block text-[11px] text-white/70">{app.title}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
