
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Membership } from "@/components/sections/Membership";
import { Trainers } from "@/components/sections/Trainers";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/sections/FloatingButtons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Membership />
        <Trainers />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
