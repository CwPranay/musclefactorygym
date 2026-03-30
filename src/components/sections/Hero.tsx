
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-gradient z-10" />
        {/* Placeholder overlay for depth */}
        <div className="absolute inset-0 bg-black/40 z-0" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Muscle Factory Gym - Ulhasnagar
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-none mb-6 tracking-tighter uppercase">
            Train <span className="text-primary italic">Hard.</span> <br /> 
            Stay <span className="text-secondary italic">Strong.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl text-balance">
            Elevate your fitness journey at Muscle Factory Gym. The most reliable, well-equipped, and affordable fitness center in Ulhasnagar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 group">
              <Link href="https://wa.me/919028209504" target="_blank">
                Join Now <MessageCircle className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg font-bold border-white/20 hover:bg-white/10 group">
              <Link href="tel:9028209504">
                Call Now <Phone className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm font-medium">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                  <img src={`https://picsum.photos/seed/face${i}/100/100`} alt="Member" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold">
                300+
              </div>
            </div>
            <p className="text-muted-foreground">Joined by <span className="text-foreground font-bold">300+ members</span> in Ulhasnagar</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
