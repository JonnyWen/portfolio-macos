import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactApp() {
  const links = [
    { icon: Github, label: "GitHub", href: "https://github.com/JonnyWen" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jonathan-wen-5133a9295/" },
    { icon: Mail, label: "Email", href: "mailto:jswen@uwaterloo.ca" },
  ];

  return (
    <div className="text-white/85 space-y-3">
      <div>
        <h2 className="text-xl font-semibold">Contact</h2>
        <div className="text-sm text-white/65">
          Feel free to reach out!
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-black/25 border border-white/10 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-white/85" />
            </div>

            {/* FIXED SECTION */}
            <div className="min-w-0">
              <div className="font-semibold">{label}</div>

              <div className="text-sm text-white/65 break-all">
                {href}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
