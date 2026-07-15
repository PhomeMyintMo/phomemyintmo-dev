"use client"
import useReveal from "@/hooks/useReveal";
import { LiaFileDownloadSolid } from "react-icons/lia"


const Home = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="home"
      className="space-y-4 flex flex-col justify-center text-center py-40"
    >

      <div className="text-left">
        <h5 className="font-semibold text-lg flex items-center gap-2">
          <span className="text-yellow-400 text-lg drop-shadow-[2px_2px_0_black]">
            ✦
          </span>

          Hello! I'm

          <span className="text-secondary font-bold text-xl sm:text-2xl">
            Phome Myint Mo
          </span>
        </h5>       <h2 className="text-lg sm:text-xl font-semibold italic">Frontend Developer</h2>
        <p>
          I’m passionate about art, design, and technology, and I enjoy working where these disciplines
          intersect. I build web applications with a focus on clean design, usability, and performance.
          Along the way, I’m expanding my skills in mobile app development, user interface design, and user research to create thoughtful, user-centered digital experiences.
        </p>
        {/* <div className="bg-accent/30 p-4 mt-3">
        
        <p className="italic text-sm text-secondary text-center">✦ "My relationship with technology stems on the desire to make the lives of others and even myself easier with my lifelong skill."</p>
      </div> */}
      </div>
      <div className="flex gap-4">
        <a
          href="/CV/Resume-PhomeMyintMo.pdf"
          download
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold border shadow-[var(--shadow-brutal)] bg-primary hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase tracking-wider"
        >
          Download CV
          <LiaFileDownloadSolid size={18} />
        </a>
      </div>
    </section>
  )
}

export default Home