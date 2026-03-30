
"use client";

import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PLANS = [
  {
    name: "Basic",
    price: "999",
    period: "Monthly",
    features: [
      "Access to Weight Area",
      "General Training",
      "Locker Facility",
      "Standard Equipments",
      "Free Consultation"
    ],
    cta: "Start Basic",
    popular: false
  },
  {
    name: "Standard",
    price: "1499",
    period: "Monthly",
    features: [
      "Access to All Areas",
      "Cardio Training",
      "Expert Guidance",
      "Diet Consultation",
      "Full Equipment Access",
      "Personalized Tracking"
    ],
    cta: "Join Standard",
    popular: true
  },
  {
    name: "Premium",
    price: "1999",
    period: "Monthly",
    features: [
      "Everything in Standard",
      "Personal Trainer (2 Sessions)",
      "Premium Supplement Advice",
      "Monthly Body Analysis",
      "Exclusive MF Kit",
      "Priority Support"
    ],
    cta: "Go Premium",
    popular: false
  }
];

export function Membership() {
  return (
    <section id="membership" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Pricing Plans</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 uppercase tracking-tight">Flexible Memberships</h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your goals and lifestyle. No hidden charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? "bg-card border-primary shadow-2xl shadow-primary/10 scale-105 z-10" 
                  : "bg-card/50 border-border hover:border-muted-foreground/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge className="px-4 py-1.5 rounded-full bg-primary text-white font-bold uppercase tracking-widest text-xs">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-headline font-bold uppercase mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-headline font-bold">₹{plan.price}</span>
                  <span className="text-muted-foreground font-medium">/{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 shrink-0 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild className={`w-full h-12 rounded-xl font-bold transition-all ${
                plan.popular 
                  ? "bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20" 
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}>
                <Link href={`https://wa.me/919028209504?text=I'm interested in the ${plan.name} plan`}>
                  {plan.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Want a custom package or corporate discount?</p>
          <Button asChild variant="link" className="text-primary font-bold uppercase tracking-widest">
            <Link href="https://wa.me/919028209504">
              Contact for Custom Quotes <MessageCircle className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
