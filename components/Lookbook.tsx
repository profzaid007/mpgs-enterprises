"use client";

export default function Lookbook() {
  const categories = [
    "Living Room",
    "Bedroom",
    "Office",
    "Dining",
    "Outdoor",
    "Accessories",
  ];

  return (
    <section className="bg-charcoal text-warm-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block border-b-4 border-brick pb-2">
            The Lookbook
          </h2>
          <p className="text-lg md:text-xl text-concrete">
            A glimpse into the MPGS aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden bg-concrete/20 cursor-pointer"
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-concrete/10 transition-transform duration-500 group-hover:scale-105" />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Text */}
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h3 className="text-lg md:text-2xl font-medium text-warm-white">
                  {category}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
