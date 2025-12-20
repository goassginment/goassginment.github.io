import { Button } from "@/components/ui/button";
import { GraduationCap, Star, Users } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-secondary" />
              Trusted by 10,000+ Students
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Expert Assignment Help for{" "}
              <span className="text-gradient">Academic Success</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Struggling with assignments? Our team of professional writers delivers 
              high-quality, plagiarism-free work on time. Focus on learning while we 
              handle the rest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <a href="https://wa.me/9779847011359" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto">
                <a href="#services">
                  View Services
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm md:text-base">500+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Expert Writers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm md:text-base">10,000+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Happy Students</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Star className="w-5 h-5 md:w-6 md:h-6 text-accent fill-accent" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm md:text-base">4.9/5</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Student Rating</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center animate-float">
            <img 
              src={logo} 
              alt="Go Assignment" 
              className="w-64 lg:w-80 h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
