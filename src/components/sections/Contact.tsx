
import Link from "next/link";
import { Phone, MapPin, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Reach Us</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 uppercase tracking-tight">Get in <span className="text-primary">Touch</span></h2>
            <p className="text-muted-foreground text-lg mb-12">
              Have questions about our plans or want a trial session? Contact us today and start your journey with Muscle Factory Gym.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Phone Number</p>
                  <Link href="tel:9028209504" className="text-2xl font-headline font-bold hover:text-primary transition-colors">
                    9028209504
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Our Location</p>
                  <address className="text-xl font-headline font-bold not-italic">
                    Muscle Factory Unisex Gym, Ulhasnagar
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Gym Timing</p>
                  <p className="text-xl font-headline font-bold">Mon - Sat: 6:00 AM - 10:00 PM</p>
                  <p className="text-muted-foreground font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-xl px-8 h-14 font-bold bg-primary group shadow-2xl shadow-primary/20">
                <Link href="https://wa.me/919028209504">
                  Chat on WhatsApp <MessageCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border-8 border-card shadow-2xl h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15069.998934251014!2d73.13927338715818!3d19.2170406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79468281b2e93%3A0x75d17a509b637f92!2sMuscle%20Factory%20Unisex%20Gym!5e0!3m2!1sen!2sin!4v1774852887652!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale brightness-90 contrast-125"
            ></iframe>
            <div className="absolute top-4 left-4 p-4 bg-background/90 backdrop-blur-md rounded-2xl border border-border shadow-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Find Us Here</p>
              <p className="font-headline font-bold">Muscle Factory Unisex Gym</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
