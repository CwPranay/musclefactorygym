
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const HIGHLIGHTS = [
  "Affordable Membership Plans",
  "Friendly & Supportive Trainers",
  "Spacious Workout Area",
  "Modern & Well-Maintained Machines",
  "Unisex Environment",
  "Personal Training Available"
];

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-gym');

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-muted shadow-2xl">
              <Image 
                src={aboutImage?.imageUrl || "https://picsum.photos/seed/gym-about/800/600"} 
                alt="Muscle Factory Gym Interior" 
                width={800} 
                height={600}
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
                data-ai-hint="fitness training"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-primary z-20 rounded-tl-2xl" />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-8">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight uppercase">
                A Reliable Fitness Hub in <span className="text-primary">Ulhasnagar</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Muscle Factory Gym is a well-equipped fitness center in Ulhasnagar, dedicated to helping you achieve your physical goals. 
                We offer a supportive environment, professional guidance, and affordable membership plans to ensure fitness is accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-card border border-border flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <span className="font-bold text-white italic text-xl">MF</span>
              </div>
              <p className="text-sm font-medium italic italic">
                "Our mission is simple: to make every member feel stronger, healthier, and more confident every single day."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
