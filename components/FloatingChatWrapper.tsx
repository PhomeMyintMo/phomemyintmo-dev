"use client"
import { usePathname } from "next/navigation";
import FloatingChat from "./FloatingChat";

const FloatingChatWrapper = () => {
  const pathname = usePathname()
  if (pathname === "/chat") {
    return null;
  }

  return <FloatingChat />;
};

export default FloatingChatWrapper;