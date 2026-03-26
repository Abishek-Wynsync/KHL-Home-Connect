import { Helmet } from "react-helmet-async";

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

      {/* SEO Meta Tags */}
      <Helmet>
        <title>Bosch Home Appliances Velachery | Premium Appliances in Chennai</title>

        <meta
          name="description"
          content="Explore premium Bosch home appliances in Velachery, Chennai. Discover washing machines, refrigerators, built-in kitchens, and smart home solutions with live showroom experience."
        />

        <meta
          name="keywords"
          content="Bosch appliances Chennai, Bosch showroom Velachery, Bosch washing machine, Bosch refrigerator, Bosch built-in kitchen India"
        />

       
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bosch Home Appliances Velachery" />
        <meta
          name="twitter:description"
          content="Visit our Bosch Experience Store in Velachery to explore premium German home appliances."
        />
        <meta name="twitter:image" content="https://res.cloudinary.com/dapj1nuzz/image/upload/v1774506837/opengraph_vgzvxl.png" />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Velachery, Chennai" />
      </Helmet>

      {/* Page Sections */}
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
