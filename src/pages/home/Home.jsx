import Hero from "./Hero";
import About from "./about";
import Categories from "./Categories";
import WhyBosch from "./WhyBosch";
import FeaturedProducts from "./FeaturedProducts";
import Offers from "./Offers";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

export default function Home() {
  return (
    <div className="font-serif text-gray-800">
      <Hero />
      <About />
      <Categories />
      <WhyBosch />
      <FeaturedProducts />
      <Offers />
      <Testimonials />
      <CTA />
    </div>
  );
}