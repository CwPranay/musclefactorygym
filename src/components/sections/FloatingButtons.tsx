
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* Floating WhatsApp */}
      <Link 
        href="https://wa.me/919028209504" 
        target="_blank"
        className={`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white/50"></span>
        </span>
      </Link>

      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="grid grid-cols-2 gap-4">
          <Button asChild size="lg" className="rounded-xl font-bold bg-[#25D366] hover:bg-[#128C7E]">
            <Link href="https://wa.me/919028209504">WhatsApp</Link>
          </Button>
          <Button asChild size="lg" className="rounded-xl font-bold">
            <Link href="tel:9028209504">Call Now</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
