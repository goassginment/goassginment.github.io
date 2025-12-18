import { Shield, Clock, Award, MessageCircle, RefreshCw, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Plagiarism-Free",
    description: "Every assignment is written from scratch and checked through advanced plagiarism detection.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your deadlines. Get your completed work before the submission date.",
  },
  {
    icon: Award,
    title: "Expert Writers",
    description: "Our team consists of qualified professionals with advanced degrees in their fields.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Reach out anytime. Our support team is always available to assist you.",
  },
  {
    icon: RefreshCw,
    title: "Free Revisions",
    description: "Not satisfied? We offer unlimited revisions until you're completely happy.",
  },
  {
    icon: Lock,
    title: "100% Confidential",
    description: "Your privacy matters. All personal information is kept strictly confidential.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Your Success Is Our Priority
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We go above and beyond to ensure you receive the best academic support possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
