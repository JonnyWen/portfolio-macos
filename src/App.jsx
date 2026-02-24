import React, { useEffect, useMemo, useState } from "react";
import Desktop from "./components/Desktop.jsx";
import Dock from "./components/Dock.jsx";
import TopBar from "./components/TopBar.jsx";
import ControlCenter from "./components/ControlCenter.jsx";
import { dockApps } from "./constants/apps.js";
import { useTheme } from "./store/theme.js";

export default function App() {
  const { mode, resolved } = useTheme();
  const resolvedTheme = resolved();

  const [openApps, setOpenApps] = useState(() => {
    // open Finder by default
    return { projects: { z: 1 } };
  });
  const [zCounter, setZCounter] = useState(2);
  const [ccOpen, setCcOpen] = useState(false);

  const appsById = useMemo(() => {
    const m = new Map();
    for (const a of dockApps) m.set(a.id, a);
    return m;
  }, []);

  const openApp = (id) => {
    setOpenApps((prev) => {
      const next = { ...prev };
      if (!next[id]) next[id] = { z: zCounter };
      return next;
    });
    bringToFront(id);
  };

  const closeApp = (id) => {
    setOpenApps((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const bringToFront = (id) => {
    setZCounter((z) => z + 1);
    setOpenApps((prev) => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: { ...prev[id], z: zCounter } };
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-light", resolvedTheme === "light");
    root.classList.toggle("theme-dark", resolvedTheme === "dark");
  }, [mode, resolvedTheme]);

  return (
    <div className={`h-full ${resolvedTheme === "light" ? "theme-light" : "theme-dark"}`}>
      <div className="h-full bg-wallpaper relative overflow-hidden select-none">
        <TopBar onToggleControlCenter={() => setCcOpen((v) => !v)} />
        <Desktop
          openApps={openApps}
          appsById={appsById}
          onClose={closeApp}
          onFocus={bringToFront}
        />
        <Dock apps={dockApps} openApps={openApps} onOpen={openApp} />
        <ControlCenter open={ccOpen} onClose={() => setCcOpen(false)} />
      </div>
    </div>
  );
}
