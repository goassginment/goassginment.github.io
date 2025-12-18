import { MessageSquare, FileCheck, CreditCard, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Contact Us",
    description: "Reach out via Instagram, WhatsApp, or any of our social platforms with your assignment details.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Get a Quote",
    description: "We'll review your requirements and provide a fair, transparent price quote within minutes.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Confirm & Pay",
    description: "Once you approve the quote, make a secure payment and we'll start working on your assignment.",
  },
  {
    number: "04",
    icon: Download,
    title: "Receive Your Work",
    description: "Get your completed, quality-checked assignment delivered before your deadline.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting help with your assignments has never been easier.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-secondary to-secondary/20" />
              )}
              
              <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <span className="text-5xl font-bold text-muted/50">{step.number}</span>
              <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
