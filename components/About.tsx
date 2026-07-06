"use client";

export default function About() {
  return (
    <section className="bg-warm-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-16 h-1 bg-brick mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-8 leading-tight">
              Rooted in Craft, Built for Life
            </h2>
            <div className="space-y-6 text-lg text-charcoal/80">
              <p>
                MPGS was born from a belief that furniture should do more than fill a room. Every piece is a study in balance — raw meets refined, industrial meets intimate.
              </p>
              <p>
                We partner with makers who share our obsession with material, form, and longevity.
              </p>
            </div>
            <div className="mt-10 group cursor-pointer inline-flex items-center gap-2">
              <span className="text-brick font-semibold uppercase tracking-wider text-sm group-hover:text-charcoal transition-colors duration-300">
                Read Our Story
              </span>
              <span className="block w-8 h-[1px] bg-brick transition-all duration-300 group-hover:w-12 group-hover:bg-charcoal" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-concrete/20 rounded-lg aspect-[4/3] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
