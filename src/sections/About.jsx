export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-background text-foreground px-6"
    >
      <div className="max-w-3xl w-full">
        
        {/* Floating Card */}
        <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition duration-300">
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          {/* Content */}
          <p className="text-muted-foreground text-lg leading-relaxed text-justify">
            I got into software development through my love of art. I’ve always been drawn to creativity and expression, 
            and I wanted to translate that into a digital medium. That curiosity quickly evolved into a passion for 
            building things—especially games—where I could combine logic, design, and imagination into something 
            interactive and meaningful.

            <br /><br />

            Today, I focus on creating clean, user-friendly applications while continuing to explore my passion for 
            game development and creative coding.
          </p>

        </div>
      </div>
    </section>
  );
};