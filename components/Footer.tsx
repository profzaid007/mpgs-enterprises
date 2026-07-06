"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-warm-white border-t border-brick/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">MPGS</h3>
            <p className="text-concrete mb-8">
              Industrial-urban furniture for the modern aesthetic.
            </p>
            <p className="text-sm text-concrete/60">
              &copy; {new Date().getFullYear()} MPGS. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4 text-concrete">
              <li><a href="#" className="hover:text-brick transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-brick transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-brick transition-colors">Lookbook</a></li>
              <li><a href="#" className="hover:text-brick transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-medium mb-6">Collections</h4>
            <ul className="space-y-4 text-concrete">
              <li><a href="#" className="hover:text-brick transition-colors">Living</a></li>
              <li><a href="#" className="hover:text-brick transition-colors">Bedroom</a></li>
              <li><a href="#" className="hover:text-brick transition-colors">Dining</a></li>
              <li><a href="#" className="hover:text-brick transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-medium mb-6">Connect</h4>
            <ul className="space-y-4 text-concrete">
              <li><a href="#" className="hover:text-brick transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brick transition-colors">Pinterest</a></li>
              <li><a href="mailto:hello@mpgs.com" className="hover:text-brick transition-colors">hello@mpgs.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
