import React from "react";
import { Github } from "lucide-react";

const projects = [
  {
    name: "Crypto Tracker",
    desc: "Live crypto prices + charts.",
    tags: ["React", "JavaScript", "Rest API", "ReCharts"],
    github: "https://github.com/JonnyWen/crypto-tracker",
  },
  {
    name: "AI Movie Recommender",
    desc: "AI-powered recommendations based on user likes.",
    tags: ["React", "TypeScript", "Node", "Tailwind CSS", "Rest API", "Prompting"],
    github: "https://github.com/JonnyWen/MovieTracker",
  },
  {
    name: "Homemade Tetris",
    desc: "Using C++, various design patterns and SOLID principles",
    tags: ["Obj-Oriented Programming", "C++", "Design Patterns", "SOLID"],
    github: "https://github.com/JonnyWen/Tetris-in-CPP",
  },
  {
    name: "Memory Game",
    desc: "Fun memory game for family and friends",
    tags: ["JavaScript", "React"],
    github: "https://github.com/JonnyWen/memory-card-game",
  },
];

export default function ProjectsApp() {
  return (
    <div className="text-white/85">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">Finder</h2>
          <div className="text-sm text-white/65">Projects</div>
        </div>
      </div>

      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl border border-white/15 bg-white/5 p-4"
          >
            {/* Project title */}
            <div className="font-semibold">{p.name}</div>

            {/* Description */}
            <div className="text-sm text-white/70 mt-1">{p.desc}</div>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-1 rounded-full bg-black/25 border border-white/10 text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-3 py-2 text-sm rounded-xl border border-white/15 bg-white/10 hover:bg-white/15 transition"
              >
                <Github size={16} />
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}