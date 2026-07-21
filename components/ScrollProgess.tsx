"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollProgress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 h-1 bg-secondary"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}