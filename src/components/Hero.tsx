import { Button } from "@/components/ui/button";
import { GraduationCap, Star, Users } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-secondary" />
              Trusted by 10,000+ Students
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Expert Assignment Help for{" "}
              <span className="text-gradient">Academic Success</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Struggling with assignments? Our team of professional writers delivers 
              high-quality, plagiarism-free work on time. Focus on learning while we 
              handle the rest.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="hero" size="lg" asChild>
                <a href="https://www.instagram.com/thegoassignment" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#services">
                  View Services
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Expert Writers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">10,000+</p>
                  <p className="text-sm text-muted-foreground">Happy Students</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent fill-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Student Rating</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center animate-float">
            <img 
              src={logo} 
              alt="Go Assignment" 
              className="w-80 h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
