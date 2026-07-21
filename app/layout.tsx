
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingChatWrapper from "@/components/FloatingChatWrapper";
import { Metadata } from "next";
import { Space_Grotesk, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
// import ScrollProgress from "@/components/ScrollProgess";
// import ScrollToTop from "@/components/ScrollToTop";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata ={
  title: "Phome Myint Mo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className={cn("font-sans", geist.variable)}
    >
      <body className={`${spaceGrotesk.variable} antialiased `}>
        {/* <ScrollProgress/>
        <ScrollToTop/> */}
        <Navbar/>
        {children}

        <Footer/>
        <FloatingChatWrapper/>
        <Toaster position="top-right"/>
        </body>
    </html>
  );
}
