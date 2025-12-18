import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Ace Your Assignments?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Don't let deadlines stress you out. Contact us today and let our experts 
          help you achieve academic excellence.
        </p>
        <Button 
          size="lg" 
          className="bg-background text-primary hover:bg-background/90 hover:scale-105 transition-all duration-300 font-semibold"
          asChild
        >
          <a 
            href="https://www.instagram.com/thegoassignment" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
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
