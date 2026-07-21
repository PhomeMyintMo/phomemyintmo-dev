"use client";

import { ChevronsUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname()


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const pageHeight = document.documentElement.scrollHeight;

            const isAtBottom = scrollPosition >= pageHeight - 10;

            setIsVisible(isAtBottom);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (pathname === "/chat") {
        return null;
    }

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
            className="group fixed bottom-6 left-6 z-50 rounded-full p-2 bg-background  shadow-md transition-transform hover:-translate-y-1"
        >
            <ChevronsUp className="size-5 animate-bounce" /></button>
    );
}