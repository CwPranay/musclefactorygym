
import { Dumbbell, HeartPulse, Zap, UserCheck } from "lucide-react";

const SERVICES = [
  {
    title: "Strength Training",
    description: "Build muscle and increase power with our heavy weight section and premium machines.",
    icon: Dumbbell,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Cardio Training",
    description: "Improve endurance and heart health with modern treadmills, cycles, and cross trainers.",
    icon: HeartPulse,
    color: "bg-secondary/10 text-secondary"
  },
  {
    title: "Weight Loss",
    description: "Specialized programs designed to burn fat effectively through high-intensity training.",
    icon: Zap,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching to accelerate your results with customized workout and diet plans.",
    icon: UserCheck,
    color: "bg-green-500/10 text-green-500"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 uppercase tracking-tight">Professional Services</h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive fitness solutions tailored to your individual needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
