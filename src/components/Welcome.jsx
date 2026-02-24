import React, { useEffect, useState } from "react";

export default function Welcome() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // disappears after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-[9999] pointer-events-none">
      
      <div className="text-center animate-fadeIn">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Hello 👋
        </h1>

        <p className="mt-4 text-xl text-white/80">
          Welcome to my portfolio
        </p>
      </div>

    </div>
  );
}