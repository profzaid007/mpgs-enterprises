import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import About from "@/components/About";
import Lookbook from "@/components/Lookbook";
import Waitlist from "@/components/Waitlist";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <About />
      <Lookbook />
      <Waitlist />
      <Contact />
      <Footer />
    </>
  );
}
