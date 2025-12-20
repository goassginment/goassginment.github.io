import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Go Assignment Logo" className="h-10 md:h-12 w-auto" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm lg:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a 
          href="https://wa.me/9779847011359" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-gradient-primary text-primary-foreground px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105 text-sm lg:text-base"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="https://wa.me/9779847011359" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold text-center hover:shadow-glow transition-all duration-300"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
