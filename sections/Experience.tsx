"use client"
import useReveal from "@/hooks/useReveal";

const Experience = () => {
  const ref = useReveal<HTMLElement>();
  const experiences = [
    {
      company: "MTG (Myanmar Technology Gateway) Co.,Ltd",
      role: "Frontend Developer",
      duration: "Dec 2024 – Present",
      description: [
        "Developed and maintained responsive CRUD-based web portals by integrating RESTful APIs.",
        "Optimized frontend performance, enhanced user experience, and improved code maintainability."
      ],
    },
    {
      company: "SoftGuide",
      role: "Developer Intern",
      duration: "May 2024 – Jul 2024",
      year: "3 months",
      description: [
        "Learned software development fundamentals and built a small web application.",
      ],
    },
  ];

  return (
    <section ref={ref} id="my-journey" className="section">
   <div>
  <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
    <span className="flex items-center justify-center w-4 h-4 bg-pink-400 border-2 border-black shadow-[3px_3px_0px_black]">
      <span className="w-1 h-1 bg-black" />
    </span>
    My Journey
  </h2>

        <div className="relative border-l-2 border-border pl-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-14">
              <div className="absolute -left-[38px] flex h-3 w-3 items-center justify-center border border-2 bg-secondary">
                {/* <BiStar className="h-4 w-4 " /> */}
              </div>

              {/* Card */}
              <div className="">
                <div className="flex flex-col gap-2 text-left md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="mt-1 text-muted-foreground">{exp.company}</p>
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {exp.duration}
                  </span>
                </div>

                <ul className="mt-5 space-y-2 text-left">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      ⋆ <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;