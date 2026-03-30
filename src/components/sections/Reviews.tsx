
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Sumit Jha",
    review: "Great gym with helpful trainers and good equipment. The environment is really motivating for daily workouts.",
    rating: 5
  },
  {
    name: "Pooja Malhotra",
    review: "Affordable pricing and supportive staff. Being a girl, I felt very comfortable and the trainers are very respectful.",
    rating: 4
  },
  {
    name: "Vikram Singh",
    review: "Best place for workout in Ulhasnagar. The machines are well maintained and it's never too crowded to finish your set.",
    rating: 5
  }
];

export function Reviews() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-yellow-500 font-bold">4.7 Rating</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 uppercase tracking-tight">What Members Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className="bg-background p-8 rounded-3xl border border-border relative group">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-lg italic leading-relaxed mb-8">
                "{rev.review}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-lg">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{rev.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Verified Member</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
