"use client";

export default function Contact() {
  return (
    <section className="bg-warm-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4 text-lg text-charcoal">
              <p>Studio: San Francisco, CA</p>
              <p>Email: hello@mpgs.com</p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <form action="/api/contact" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-concrete bg-transparent text-black focus:outline-none focus:border-brick transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-concrete bg-transparent text-black focus:outline-none focus:border-brick transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-concrete bg-transparent text-black focus:outline-none focus:border-brick transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-brick text-warm-white font-medium hover:bg-brick/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
