
import Image from "next/image";
import { Instagram, Twitter } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const TRAINERS = [
  {
    name: "Rahul Sharma",
    role: "Senior Fitness Expert",
    image: "trainer-1",
    specialization: "Bodybuilding & Nutrition"
  },
  {
    name: "Akash Gupta",
    role: "Strength Coach",
    image: "trainer-2",
    specialization: "Powerlifting & Cardio"
  },
  {
    name: "Sameer V.",
    role: "Lifestyle Coach",
    image: "trainer-3",
    specialization: "Weight Management"
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Expert Team</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight">Meet Our Trainers</h2>
            <p className="text-muted-foreground text-lg mt-4">
              Our certified trainers are here to guide you with professional expertise and motivational support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, idx) => {
            const trainerImg = PlaceHolderImages.find(img => img.id === trainer.image);
            return (
              <div key={idx} className="group relative overflow-hidden rounded-3xl bg-background border border-border transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image 
                    src={trainerImg?.imageUrl || "https://picsum.photos/seed/trainer/400/500"} 
                    alt={trainer.name} 
                    width={400} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="fitness trainer"
                  />
                </div>
                
                {/* Social Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-headline font-bold mb-1">{trainer.name}</h3>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">{trainer.role}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">Specialization:</p>
                    <p className="font-medium text-sm">{trainer.specialization}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
