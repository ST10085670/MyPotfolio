import { useEffect, useState } from "react";

const navLinks = [
  { id: "about", name: "About", href: "#about" },
  { id: "skills", name: "Skills", href: "#skills" },
  { id: "projects", name: "Projects", href: "#projects" },
  { id: "experience", name: "Experience", href: "#experience" },
];

export const Navbar = () => {
  const [theme, setTheme] = useState("light");

  // Load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";

      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // Ripple effect
  const createRipple = (e) => {
    const button = e.currentTarget;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    const ripple = document.createElement("span");
    ripple.className = "ripple";

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 500);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-lg font-semibold tracking-wide">
          AT<span className="text-primary">.</span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-8">
          
          {/* Nav Links */}
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={createRipple}
                className="relative overflow-hidden px-3 py-1 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={(e) => {
              createRipple(e);
              toggleTheme();
            }}
            className="relative overflow-hidden px-3 py-1 rounded-lg bg-secondary text-foreground shadow-md hover:shadow-lg transition"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

        </div>
      </nav>
    </header>
  );
};