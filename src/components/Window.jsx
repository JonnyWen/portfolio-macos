import React, { useRef, useState } from "react";

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

export default function Window({
  id,
  title,
  zIndex,
  defaultPosition = { x: 140, y: 100 },
  defaultSize = { w: 520, h: 380 },
  onClose,
  onFocus,
  children,
}) {
  const [pos, setPos] = useState(defaultPosition);
  const [size] = useState(defaultSize);
  const [minimized, setMinimized] = useState(false);

  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  // START DRAG
  const handleMouseDown = (e) => {
    dragging.current = true;
    onFocus?.();

    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  // MOVE WINDOW
  const handleMouseMove = (e) => {
    if (!dragging.current) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    setPos({
      x: clamp(e.clientX - offset.current.x, 12, vw - size.w - 12),
      y: clamp(e.clientY - offset.current.y, 56, vh - size.h - 12),
    });
  };

  // STOP DRAG
  const handleMouseUp = () => {
    dragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  if (minimized) {
    return (
      <div
        className="absolute left-4 top-16 text-white/70 text-sm"
        style={{ zIndex }}
      >
        <button
          className="px-3 py-2 rounded-xl border border-white/15 bg-black/20 backdrop-blur"
          onClick={() => setMinimized(false)}
        >
          {title} (minimized) — click to restore
        </button>
      </div>
    );
  }

  return (
    <div
      className="absolute"
      style={{
        left: pos.x,
        top: pos.y,
        width: size.w,
        height: size.h,
        zIndex,
      }}
      onMouseDown={() => onFocus?.()}
    >
      <div className="w-full h-full rounded-2xl border border-white/20 bg-black/35 backdrop-blur-xl shadow-glass overflow-hidden">
        
        {/* HEADER — DRAG FROM HERE */}
        <div
          onMouseDown={handleMouseDown}
          className="h-11 px-3 flex items-center justify-between border-b border-white/10 cursor-move"
        >
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-[#ff5f57]"
            />
            <button
              onClick={() => setMinimized(true)}
              className="w-3.5 h-3.5 rounded-full bg-[#febc2e]"
            />
            <div className="w-3.5 h-3.5 rounded-full bg-[#28c840]" />
          </div>

          <div className="text-white/80 text-sm font-medium">{title}</div>
          <div className="w-16" />
        </div>

        {/* CONTENT */}
        <div className="h-[calc(100%-44px)] overflow-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
}