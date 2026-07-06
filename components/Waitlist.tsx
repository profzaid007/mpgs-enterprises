"use client";

export default function Waitlist() {
  return (
    <section className="bg-warm-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Be the First to Know
        </h2>
        <p className="text-lg md:text-xl text-charcoal mb-8 max-w-2xl mx-auto">
          Join the waitlist for early access, exclusive previews, and launch updates.
        </p>

        <form action="/api/waitlist" className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-concrete bg-transparent text-black focus:outline-none focus:border-brick transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-brick text-warm-white font-medium hover:bg-brick/90 transition-colors whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </div>
          <p className="text-sm text-concrete mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
}
