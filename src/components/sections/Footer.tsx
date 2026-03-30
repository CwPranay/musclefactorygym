
import Link from "next/link";
import { Dumbbell, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <div className="bg-primary p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="font-headline font-bold text-2xl tracking-tight uppercase">
                Muscle <span className="text-primary">Factory</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Empowering the fitness community of Ulhasnagar since our inception. We provide top-notch facilities and training programs for everyone.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-headline font-bold uppercase tracking-wider mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["About", "Services", "Membership", "Trainers", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-headline font-bold uppercase tracking-wider mb-8">Services</h4>
            <ul className="space-y-4">
              {["Strength Training", "Cardio Training", "Weight Loss", "Personal Coaching", "Diet Plans"].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-headline font-bold uppercase tracking-wider mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <Link href="tel:9028209504" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  +91 9028209504
                </Link>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground font-medium">contact@musclefactory.com</span>
              </li>
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground font-medium">Ulhasnagar, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground font-medium">
            © {currentYear} Muscle Factory Gym. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground font-medium">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
