import { useState } from "react";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import Github from "lucide-react/dist/esm/icons/github";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Coinnect : Secure Financial Platform",
    description:
      "A full-stack financial management system featuring secure transaction workflows, API-driven architecture, and robust authentication. Implemented validation, RBAC, and data integrity checks to ensure secure and reliable financial operations.",
    image: "/projects/coinnect.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    link: "#",
    github: "https://github.com/VCNMB-3rd-years/INSY7314_POE.git",
  },
  {
    title: "Municipality Issue Reporting System",
    description:
      "A full-stack ASP.NET MVC web application enabling users to log and track municipal service issues. Designed structured database workflows, optimized SQL queries, and ensured data validation for consistent and reliable system performance.",
    image: "/projects/municipality.png",
    tags: ["C#", "ASP.NET MVC", "SQL Server", "REST APIs"],
    link: "#",
    github:
      "https://github.com/VCNMB-3rd-years/vcnmb-prog7312-2025-poe-ST10085670.git",
  },
  {
    title: "IoT Smart Device Control System",
    description:
      "An embedded IoT system for remote monitoring and control of smart devices using ESP microcontrollers. Implemented API-based communication and object-oriented design for real-time device interaction and automation.",
    image: "/projects/iot.png",
    tags: ["C++", "ESP32", "IoT", "Networking"],
    link: "#",
    github:
      "https://github.com/Kuhle-MM/AttndEase-Attendance_Tracker.git",
  },
  {
    title: "BuggyBank : Android Budget Tracker",
    description:
      "A mobile financial tracking application with real-time income and expense management. Integrated Firebase authentication and database services while implementing dashboards, search, and reporting features.",
    image: "/projects/buggybank.jpeg",
    tags: ["Kotlin", "Firebase", "Android", "Realtime DB"],
    link: "#",
    github: "https://github.com/VCNMB-3rd-years/BuggyBank.git",
  },
  {
    title: "P.A.M : Robotics & Mobile Control System",
    description:
      "A full-stack robotics solution integrating a mobile app, REST API backend, and Raspberry Pi hardware. Enabled real-time communication for camera streaming and remote motor control in an interactive system.",
    image: "/projects/pam.png",
    tags: ["Kotlin", "REST APIs", "Raspberry Pi", "Jetpack Compose"],
    link: "#",
    github: "https://github.com/Kuhle-MM/PROG7314_POE_PAMZOZO.git",
  },
  {
    title: "ArgiEnergyConnect : Microservices E-Commerce Platform",
    description:
      "A microservices-based e-commerce system with separate user and product services. Built secure APIs with authentication and RBAC, ensuring scalable and maintainable service communication using Docker.",
    image: "/projects/logo.png",
    tags: ["C#", ".NET 6", "Microservices", "Docker", "REST APIs"],
    link: "#",
    github:
      "https://github.com/VCNMB-3rd-years/vcnmb-prog7311-2025-poe-ST10085670.git",
  },
];


export const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 overflow-x-clip">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover blur-sm scale-105 transition-all duration-500 group-hover:blur-0 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton onClick={() => setExpanded(prev => !prev)}>
            {expanded ? "Show Less" : "View All Projects"}
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};