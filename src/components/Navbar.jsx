
const navLink = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
]


export const Navbar = () => {
    return (
    <header className="fixed top-0  left-0 right-0 bg=transparent py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a>
                AT <span>.</span>
            </a>
            {/* Desktop Nav */}

            <div>
                <div>
                    {navLink.map((link, index) => (
                        <a href={link.href}>{link.label}</a>
                    ))}
                </div>
            </div>

        </nav>
    </header>
    );
};