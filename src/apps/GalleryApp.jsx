import React from "react";

// LIST YOUR IMAGES HERE
const imgs = [
  { id: 1, src: "/images/cxc.jpeg" },
  { id: 2, src: "/images/IMG_1969.JPG" },
  { id: 3, src: "/images/JonathanWenHeadshot.jpeg" },
];

export default function GalleryApp() {
  return (
    <div className="text-white/85">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold">Gallery</h2>
          <div className="text-sm text-white/65">Me!</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {imgs.map((img) => (
          <div
            key={img.id}
            className="rounded-2xl overflow-hidden border border-white/15 bg-white/5"
          >
            <img src={img.src} className="w-full h-32 sm:h-48 md:h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
