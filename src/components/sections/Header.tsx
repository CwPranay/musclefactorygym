
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Membership", href: "#membership" },
  { name: "Trainers", href: "#trainers" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-border py-3 shadow-lg" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg transform group-hover:rotate-12 transition-transform">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight uppercase">
            Muscle <span className="text-primary">Factory</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="rounded-full px-6 font-bold shadow-xl shadow-primary/20">
            <Link href="tel:9028209504">
              <Phone className="mr-2 w-4 h-4" /> 9028209504
            </Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[68px] bg-background z-40 lg:hidden flex flex-col p-6 gap-6 transition-transform duration-300 transform border-t border-border",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-headline font-bold uppercase tracking-wider border-b border-border pb-4 hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <div className="mt-auto grid grid-cols-1 gap-4">
          <Button asChild size="lg" className="rounded-xl font-bold w-full">
            <Link href="tel:9028209504">Call Muscle Factory</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
