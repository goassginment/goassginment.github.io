import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Ace Your Assignments?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Don't let deadlines stress you out. Contact us today and let our experts 
          help you achieve academic excellence.
        </p>
        <Button 
          size="lg" 
          className="bg-background text-primary hover:bg-background/90 hover:scale-105 transition-all duration-300 font-semibold w-full sm:w-auto"
          asChild
        >
          <a 
            href="https://wa.me/9779847011359" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
