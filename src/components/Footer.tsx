import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const TikTokIcon = () => (
  <svg 
    className="w-5 h-5" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center sm:text-left">
            <img src={logo} alt="Go Assignment" className="h-14 md:h-16 w-auto mb-4 brightness-0 invert mx-auto sm:mx-0" />
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted partner for academic success. We help students achieve their 
              educational goals with high-quality assignment assistance.
            </p>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-background/70 hover:text-secondary transition-colors text-sm">Our Services</a></li>
              <li><a href="#why-us" className="text-background/70 hover:text-secondary transition-colors text-sm">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="text-background/70 hover:text-secondary transition-colors text-sm">How It Works</a></li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-background/70 text-sm mb-4">Follow @TheGoAssignment on social media</p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a 
                href="https://www.instagram.com/TheGoAssignment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/TheGoAssignment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@TheGoAssignment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-10 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} GoAssignment.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
