import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    course: "MBA Student",
    rating: 5,
    text: "Amazing service! Got my assignment done before the deadline with excellent quality. Highly recommended!",
  },
  {
    name: "Rahul K.",
    course: "Engineering",
    rating: 5,
    text: "The programming assignment was perfect. Clean code with proper documentation. Will definitely use again.",
  },
  {
    name: "Anita M.",
    course: "Medical Student",
    rating: 5,
    text: "Very professional and reliable. They helped me with my research paper and it was well-researched.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Real feedback from students who trusted us with their assignments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-secondary/30 mb-4" />
              <p className="text-foreground mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
