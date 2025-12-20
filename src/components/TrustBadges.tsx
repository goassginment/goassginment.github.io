import { ShieldCheck, Clock, ThumbsUp, Award } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "100% Secure" },
  { icon: Clock, label: "24/7 Support" },
  { icon: ThumbsUp, label: "Satisfaction Guaranteed" },
  { icon: Award, label: "Top Rated" },
];

const TrustBadges = () => {
  return (
    <section className="py-6 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
              <badge.icon className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
