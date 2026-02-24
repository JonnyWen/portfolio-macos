import { create } from "zustand";

function systemPrefersDark() {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true;
}

export const useTheme = create((set, get) => ({
  mode: "system", // "system" | "light" | "dark"
  setMode: (mode) => set({ mode }),
  resolved: () => {
    const { mode } = get();
    if (mode === "light") return "light";
    if (mode === "dark") return "dark";
    return systemPrefersDark() ? "dark" : "light";
  },
}));
