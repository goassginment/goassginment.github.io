import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Go Assignment Logo" className="h-12 w-auto" />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Services
          </a>
          <a href="#why-us" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Why Us
          </a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            How It Works
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>

        <a 
          href="https://wa.me/yourwhatsappnumber" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
