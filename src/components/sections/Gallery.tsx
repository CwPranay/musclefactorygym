
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const GALLERY_ITEMS = [
  "gallery-1",
  "gallery-2",
  "gallery-3",
  "gallery-4",
  "gallery-5",
  "gallery-6"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Space</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 uppercase tracking-tight">Gym Gallery</h2>
          <p className="text-muted-foreground text-lg">
            Take a look at our modern facility, professional equipments, and vibrant workout environment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_ITEMS.map((id, idx) => {
            const img = PlaceHolderImages.find(p => p.id === id);
            return (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-2xl group ${
                  idx === 0 ? "md:row-span-2" : ""
                }`}
              >
                <Image 
                  src={img?.imageUrl || "https://picsum.photos/seed/gallery/600/600"} 
                  alt={img?.description || "Gym facility"} 
                  width={600} 
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint="gym interior"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="text-white font-bold uppercase tracking-widest text-sm text-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    {img?.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
