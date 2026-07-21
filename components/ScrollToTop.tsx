"use client";

import { ChevronsUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
  onClick={scrollToTop}
  aria-label="Scroll to top"
  className="group fixed bottom-6 left-6 z-50 rounded-full border border-black bg-background p-3 shadow-md transition-transform hover:-translate-y-1"
>
<ChevronsUp className="size-5 animate-bounce" /></button>
  );
}