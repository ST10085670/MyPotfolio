export const Skills = () => {
  const skills = [
    { name: "C#", level: "Advanced" },
    { name: "Python", level: "Beginner" },
    { name: "Java", level: "Intermediate" },
    { name: "Kotlin", level: "Intermediate" },
    { name: "GD Script", level: "Advanced" },
    { name: "SQL", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    
  ];

  const technologies = [
    "Azure Cloud Services", "Android Studio", "NetBeans", "Visual Studio", ".NET MVC", ".NET API", "React", "Next.js", "TypeScript", "Node.js",
    "MongoDB", "Docker", "Firebase", "Unity", "Godot", "Blender", "Raspberry Pi", "ESP32", "Jetpack Compose"
  ];

  const levelMap = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3,
  };

  const totalCells = 3;

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* 🔹 1. HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            These are the skills that I’ve developed
            <span className="font-serif italic font-normal text-white">
              {" "}through my journey.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A combination of technical expertise and hands-on experience in
            software, mobile, and game development.
          </p>
        </div>

        {/* 🔹 2. SKILL LEVELS */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            > 
              {/* 🔥 MAIN ROW */}
              <div className="flex items-center gap-4">
                
                {/* Skill name */}
                <span className="min-w-[80px] font-semibold">
                  {skill.name}
                </span>
                <span className="text-sm text-muted-foreground"> 
                {skill.level} 
                </span>

                {/* Cells container */}
                <div className="flex flex-wrap gap-2 max-w-[100px]">
                  {Array.from({ length: totalCells }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        i < levelMap[skill.level]
                          ? "bg-primary shadow"
                          : "bg-secondary opacity-25"
                      }`}
                    />
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* 🔹 3. TECHNOLOGY MARQUEE */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">

            {/* Gradient fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Marquee */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[...technologies, ...technologies].map((tech, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};