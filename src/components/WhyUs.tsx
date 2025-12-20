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

export default function WhyUs() {
  return (
    <section className="w-full py-16 md:py-20 px-4" id="why-us">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Your Success, Our Priority
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to helping you achieve academic excellence with our reliable and professional services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-xl border border-border shadow-card hover:shadow-glow hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
