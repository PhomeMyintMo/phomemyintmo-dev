"use client"
import { BsArrowRight } from "react-icons/bs"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { FaNodeJs, FaReact } from "react-icons/fa6";
import { SiExpress, SiFirebase, SiMarkdown, SiPrisma, SiRedux, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";

import Link from "next/link";
import useReveal from "@/hooks/useReveal";

export const projects = [
  {
    id: "ai-chatbot",
    title: "🤖 Personal AI Chatbot",
    description: "An AI-powered portfolio chatbot built with Next.js, GroqAI, TypeScript, and Tailwind CSS that allows visitors to learn about my background, projects, and skills through natural conversations.",
    detailedDescription: "This project combines a modern portfolio with an AI assistant to create a more engaging way for visitors to explore my work. Instead of navigating multiple pages, users can ask questions about my experience, technical skills, projects, and contact information in natural language.",
    liveLink: "/chat",
    codeLink: "https://github.com/PhomeMyintMo/personal-ai-chatbot",
    techStack: [
      {
        name: "Next.js", icon: <img src="/nextdotjs.svg" className="h-4 w-4" />,
        color: "text-[#10A37F]",
      },
      {
        name: "TypeScript", icon: <SiTypescript />,
        color: "text-[#3178C6]",
      },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]", },
      { name: "GroqAI", icon: <img src="/groq.svg" />, color: "text-[#10A37F]", },
      { name: "React Markdown", icon: <SiMarkdown />, color: "text-gray-600 dark:text-gray-300", },],
    images: ["/ChatBot/aiChatUI.png"],
    features: [
      "GroqAI API integration with Next.js API Routes",
      "Markdown rendering for formatted responses",
      "Persistent chat history using sessionStorage",
      "Responsive design optimized for desktop and mobile",
    ]
  },
  {
    id: "content-management",
    title: "📊 Content Management Portal",
    description: "A web portal for content creators to manage and track their content efficiently.",
    detailedDescription: (
      <>
        A content management portal developed for my current company <a href="" className="text-blue-600 font-semibold">MTG</a> that enables content creators to organize tasks, monitor content progress, receive real-time notifications, and streamline their workflow through an intuitive and responsive interface.
      </>
    ),
    liveLink: "#",
    codeLink: "#",
    techStack: [
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "text-[#3178C6]",
      },
      {
        name: "React",
        icon: <FaReact />,
        color: "text-[#61DAFB]",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-[#06B6D4]",
      },
      {
        name: "Shadcn UI",
        icon: <SiShadcnui />,
        color: "",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        color: "text-[#FFCA28]",
      },
      {
        name: "Redux",
        icon: <SiRedux />,
        color: "text-[#764ABC]",
      },
    ],
    images: ["/portalOne/WholePage.png", "/portalOne/Theme.png", "/portalOne/ParamsUrl.png", "/portalOne/Noti.png", "/portalOne/Language.png"],
    features: [
      "🔔 Real-time notifications powered by Firebase",
      "🌐 Multi-language support (i18n)",
      "☀️🌙 Light and dark theme switching",
      "💾 Preserves page, filters, and pagination state when navigating between list, detail, create, and edit pages"]
  },
  {
    id: "ecommerce-website",
    title: "🛍️ E-commerce Website",
    description:
      "An ongoing full-stack fashion e-commerce case study focused on creating a smooth, efficient, and convenient online shopping experience.", detailedDescription: "This personal case study explores the challenges of online clothing shopping in Myanmar, where many small businesses rely on Facebook, a platform that currently requires a VPN to access. This dependency makes browsing products, communicating with sellers, and completing purchases slow and inconvenient. I designed and developed a modern e-commerce platform that enables small clothing businesses to manage their own online storefronts, allowing customers to browse products, search by category, and add items to their cart.",
    status: "Ongoing",
    liveLink: "https://e-commerce-phome.vercel.app/",
    codeLink: "https://github.com/PhomeMyintMo/e-commerce",
    techStack: [{ name: "React", icon: <FaReact />, color: "text-[#61DAFB]", },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]", },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#38BDF8]", },
    { name: "shadcn/ui", icon: <SiShadcnui />, color: "", },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-[#5FA04E]", },
    { name: "Express.js", icon: <SiExpress />, color: "", },
    { name: "Prisma", icon: <SiPrisma />, color: "text-[#2D3748]", },
    { name: "ImageKit", icon: <img src="/ImageKitLogo.svg" className="w-8" />, color: "text-[#0095FF]", },],
    images: ["/Ecommerce/AllProducts.png", "/Ecommerce/DetailProduct.png",],
    features: ["Product browsing with category and search filtering",
      "Persistent shopping cart with local storage", "Responsive UI optimized for mobile shopping",
      "Image hosting and optimization with ImageKit", "RESTful API built with Express and Prisma",
    ],
  }

];

const Projects = () => {
  const displayProjects = projects.slice(0, 3);
  const ref = useReveal<HTMLElement>();
  const cardBackgrounds = [
    "bg-primary/40",
    "bg-accent/40",
    "bg-secondary/40",
  ];

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
          <span className="grid grid-cols-2 gap-[2px] w-4 h-4 rotate-45">
            <span className="bg-yellow-400 border border-black shadow-[1px_1px_0_black]" />
            <span className="bg-yellow-400 border border-black shadow-[1px_1px_0_black]" />
            <span className="bg-yellow-400 border border-black shadow-[1px_1px_0_black]" />
            <span className="bg-yellow-400 border border-black shadow-[1px_1px_0_black]" />
          </span>
          Selected Works
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col space-y-6 h-full p-6 shadow-[var(--shadow-brutal)] border text-start hover:scale-105 transition-transform ${cardBackgrounds[index % cardBackgrounds.length]}`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.status && (
                  <span className="inline-flex items-center rounded-full border border-amber-500 bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                    {project.status}
                  </span>
                )}
              </div>
              <p className="">{project.description}</p>


              <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t">
                <div className="flex gap-4">
                  {(project.liveLink && project.id !== "content-management") && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      Live <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                  {(project.codeLink && project.id !== "content-management") && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium hover:font-semibold transition-colors"
                    >
                      Code <FaGithub />
                    </a>
                  )}
                </div>

                <Link
                  href={`/projects?project=${index}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold border shadow-[var(--shadow-brutal)] hover:bg-primary hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase text-xs"
                >
                  View <BsArrowRight className="text-base" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold border shadow-[var(--shadow-brutal)] bg-primary hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase tracking-wider"
          >
            View all projects <BsArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects