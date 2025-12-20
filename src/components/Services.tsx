import { BookOpen, FileText, PenTool, Calculator, FlaskConical, Languages, Presentation, Code } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Essay Writing",
    description: "Well-researched, original essays on any topic with proper citations and formatting.",
  },
  {
    icon: BookOpen,
    title: "Research Papers",
    description: "In-depth research papers with thorough analysis and academic rigor.",
  },
  {
    icon: PenTool,
    title: "Thesis & Dissertations",
    description: "Comprehensive thesis writing support from proposal to final submission.",
  },
  {
    icon: Calculator,
    title: "Math & Statistics",
    description: "Expert solutions for complex mathematical and statistical problems.",
  },
  {
    icon: Code,
    title: "Programming Help",
    description: "Coding assignments in Python, Java, C++, and more with clean, documented code.",
  },
  {
    icon: FlaskConical,
    title: "Science Projects",
    description: "Lab reports, case studies, and science assignments with accurate data.",
  },
  {
    icon: Languages,
    title: "Language & Literature",
    description: "Creative writing, literary analysis, and language coursework assistance.",
  },
  {
    icon: Presentation,
    title: "Presentations",
    description: "Professional PowerPoint presentations with compelling visuals and content.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Expert Help Across All Subjects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            From essays to coding assignments, our experts cover every academic discipline 
            to help you succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-card p-5 md:p-6 rounded-xl border border-border hover:border-secondary/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
