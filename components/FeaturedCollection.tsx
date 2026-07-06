"use client";

export default function FeaturedCollection() {
  const products = [
    {
      id: 1,
      name: "The Concrete Lounge",
      price: "$1,200",
    },
    {
      id: 2,
      name: "The Brick Accent Table",
      price: "$450",
    },
    {
      id: 3,
      name: "The Industrial Bookshelf",
      price: "$890",
    }
  ];

  return (
    <section className="bg-warm-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
            Featured Collection
          </h2>
          <div className="w-24 h-1 bg-brick mb-6" />
          <p className="text-lg text-charcoal/70 max-w-2xl">
            Curated pieces that define the MPGS point of view.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="bg-concrete/20 aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-charcoal text-warm-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                  Coming Soon
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2 group-hover:text-brick transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-concrete font-medium">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
