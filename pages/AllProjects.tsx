"use client"
import { useState } from "react";
import { projects } from "../sections/Projects";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type Props = {
    initialProject?: number;
};


export default function AllProjects({ initialProject = 0 }: Props) {
    const [activeTab, setActiveTab] = useState(initialProject);
    const [currentImage, setCurrentImage] = useState(0);
    const ref = useReveal<HTMLElement>();

    const safeProjectIndex = Math.min(Math.max(activeTab, 0), projects.length - 1);
    const project = projects[safeProjectIndex] ?? projects[0];

    const handleTabChange = (index: number) => {
        setActiveTab(index);
        setCurrentImage(0);
    }

    const nextImage = () => {
        if (!project?.images?.length) return;
        setCurrentImage((prev) => prev === project.images.length - 1 ? 0 : prev + 1)
    }

    const prevImage = () => {
        if (!project?.images?.length) return;
        setCurrentImage((prev) => prev === 0 ? project.images.length - 1 : prev - 1)
    }
    return (
        <section ref={ref} className="section py-20 p-8 sm:p-16 md:p-24">
            <div className="space-y-4">
                <Link href={"/"} className="flex items-center gap-2 hover:font-semibold"><BiArrowBack />Go Back</Link>

                <h1 className="text-2xl sm:text-3xl text-center font-bold">
                    Projects Showcase
                </h1>

                {/* Tabs */}
                <div className="flex justify-center flex-wrap border-b pb-4">
                    {projects.map((project, index) => (
                        <button
                            key={project.id}
                            onClick={() => handleTabChange(index)}
                            className={`shrink-0 px-8 py-1 text-sm font-bold border transition-all
                               ${activeTab === index
                                    ? "bg-primary "
                                    : "bg-background hover:bg-primary/20"
                                }`}
                        >
                            {(index + 1).toString().padStart(2, "0")}
                        </button>
                    ))}
                </div>

                {/* Project Content */}
                <div className="space-y-8">

                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <h2 className="text-xl md:text-2xl font-bold text-left">
                                {project.title}
                            </h2>
                            {project.status && (
                                <span className="inline-flex items-center rounded-full border border-amber-500 bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                                    {project.status}
                                </span>
                            )}
                        </div>

                        <p className="mt-4 text-left">
                            {project.detailedDescription}
                        </p>
                    </div>

                    {/* Images */}
                    <div className="relative mt-8">
                        <div className="flex justify-center">
                            <div className="overflow-hidden max-w-lg p-4 bg-secondary/20 border">
                                <img
                                    src={project.images[currentImage]}
                                    alt={project.title}
                                    className="w-full aspect-video object-contain"
                                />
                            </div>
                        </div>
{project.images.length > 1 && (
                        <div className="mt-4 flex items-center justify-center gap-6">
                            <button
                                onClick={prevImage}
                                className=" p-1 px-2 border shadow-[var(--shadow-brutal)] hover:bg-primary hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                            >
                                <ArrowBigLeft size={16}/>
                            </button>
                            <div>
                                
                                    <div className="flex justify-center gap-4">
                                        {project.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImage(index)}
                                                className={`rounded-full w-3 h-3 transition-all border ${currentImage === index
                                                    ? "bg-secondary scale-110"
                                                    : "bg-background"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                
                            </div>
                            <button
                                onClick={nextImage}
                                className="p-1 px-2 border shadow-[var(--shadow-brutal)] hover:bg-primary hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                            >
                                <ArrowBigRight size={16}/>
                            </button>
                        </div>
                        )}
                    </div>


                    {/* Features */}
                    <div className="text-left">
                        <h3 className="font-bold text-xl mb-4">
                            Features
                        </h3>

                        <ul className="space-y-2 flex flex-col">
                            {project.features.map((feature, index) => (
                                <li key={index}>
                                    ⋆ {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="text-justify">
                        <div className="mb-2">
                            <h3 className="font-bold text-xl mb-4">
                                Tech Stack
                            </h3>
                            <span className="font-semibold">{project.id === "ecommerce-website" ? "⋆ Frontend/ Backend" : "⋆ Frontend"}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <div key={tech.name} className="flex gap-2 items-center border px-2 p-1">
                                    <span className={tech.color}>{tech.icon}</span>
                                    {tech.name}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};