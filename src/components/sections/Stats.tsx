
import { Users, Star, Award, ShieldCheck, MessageSquare } from "lucide-react";

const STATS = [
  { label: "Positive Reviews", value: "300+", icon: MessageSquare, color: "text-blue-500" },
  { label: "Google Rating", value: "4.7", icon: Star, color: "text-yellow-500", suffix: "⭐" },
  { label: "Certified Trainers", value: "Expert", icon: Award, color: "text-primary" },
  { label: "Equipments", value: "Modern", icon: ShieldCheck, color: "text-secondary" },
];

export function Stats() {
  return (
    <section className="py-12 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className={`p-3 rounded-2xl bg-muted mb-4 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-headline font-bold mb-1">
                {stat.value}{stat.suffix}
              </h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
