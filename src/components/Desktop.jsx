import React from "react";
import Window from "./Window.jsx";

export default function Desktop({ openApps, appsById, onClose, onFocus }) {
  const ids = Object.keys(openApps || {});
  return (
    <div className="absolute inset-0 pt-11">
      {ids.map((id) => {
        const meta = appsById.get(id);
        if (!meta) return null;
        const z = openApps[id]?.z ?? 1;
        return (
          <Window
            key={id}
            id={id}
            title={meta.title}
            zIndex={z}
            defaultPosition={meta.defaultPosition}
            defaultSize={meta.defaultSize}
            onClose={() => onClose(id)}
            onFocus={() => onFocus(id)}
          >
            <meta.component />
          </Window>
        );
      })}
    </div>
  );
}
