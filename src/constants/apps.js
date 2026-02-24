import {
  FolderKanban,
  User,
  FileText,
  Mail,
  Terminal,
  Images,
  Settings2,
} from "lucide-react";

import AboutApp from "../apps/AboutApp.jsx";
import ProjectsApp from "../apps/ProjectsApp.jsx";
import ResumeApp from "../apps/ResumeApp.jsx";
import ContactApp from "../apps/ContactApp.jsx";
import TerminalApp from "../apps/TerminalApp.jsx";
import GalleryApp from "../apps/GalleryApp.jsx";
import SettingsApp from "../apps/SettingsApp.jsx";

export const dockApps = [
  {
    id: "projects",
    title: "Finder",
    Icon: FolderKanban,
    component: ProjectsApp,
    defaultPosition: { x: 120, y: 90 },
    defaultSize: { w: 520, h: 420 },
  },
  {
    id: "about",
    title: "About Me",
    Icon: User,
    component: AboutApp,
    defaultPosition: { x: 220, y: 130 },
    defaultSize: { w: 520, h: 380 },
  },
  {
    id: "resume",
    title: "Resume",
    Icon: FileText,
    component: ResumeApp,
    defaultPosition: { x: 280, y: 170 },
    defaultSize: { w: 560, h: 460 },
  },
  {
    id: "gallery",
    title: "Gallery",
    Icon: Images,
    component: GalleryApp,
    defaultPosition: { x: 360, y: 120 },
    defaultSize: { w: 620, h: 440 },
  },
  {
    id: "terminal",
    title: "Terminal",
    Icon: Terminal,
    component: TerminalApp,
    defaultPosition: { x: 180, y: 240 },
    defaultSize: { w: 640, h: 380 },
  },
  {
    id: "contact",
    title: "Contact",
    Icon: Mail,
    component: ContactApp,
    defaultPosition: { x: 420, y: 160 },
    defaultSize: { w: 520, h: 360 },
  },
  {
    id: "settings",
    title: "Settings",
    Icon: Settings2,
    component: SettingsApp,
    defaultPosition: { x: 520, y: 120 },
    defaultSize: { w: 520, h: 380 },
  },
];
