"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const FloatingChat = () => {
  const router = useRouter();
  const [showHint, setShowHint] = useState(true);

  // useEffect(() => {
  //   const hasSeenHint = localStorage.getItem("chat_hint_seen");

  //   if (!hasSeenHint) {
  //     setShowHint(true);

  //     const timer = setTimeout(() => {
  //       setShowHint(false);
  //       localStorage.setItem("chat_hint_seen", "true");
  //     }, 5000); 

  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      
      {showHint && (
        <div className="relative flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2 text-sm shadow-[var(--shadow-brutal)]">
          <span className="font-medium">Ask AI about me</span>

          <button
            onClick={() => setShowHint(false)}
            className="rounded-full p-1 transition hover:bg-black/10 dark:hover:bg-white/10"
            aria-label="Close hint"
          >
            <RxCross2 className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <button
        title="Ask AI about me"
        onClick={() => router.push("/chat")}
        className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center bg-background border shadow-lg rounded-full hover:scale-105 transition"
      >
        <img src="/CatTyping.svg" />
      </button>
    </div>
  );
};

export default FloatingChat;