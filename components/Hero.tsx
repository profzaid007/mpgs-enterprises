"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal text-warm-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="w-16 h-1 bg-brick mb-8" />
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
          Furniture That Bridges Space & Soul
        </h1>
        
        <p className="text-lg md:text-xl text-concrete max-w-2xl mb-10">
          Modern industrial pieces crafted for the way you live — from statement to subtle.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-4 bg-brick text-warm-white font-medium rounded-sm hover:bg-brick/90 transition-colors duration-300">
            Explore Collection
          </button>
          <button className="px-8 py-4 bg-transparent border border-concrete text-warm-white font-medium rounded-sm hover:border-warm-white hover:bg-warm-white/5 transition-colors duration-300">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
}
