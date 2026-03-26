import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import KitchenAppliances from "./KitchenAppliances";
import LaundryAppliances from "./LaundryAppliances";
import CoolingAppliances from "./CoolingAppliances";
import SmallAppliances from "./SmallAppliances";
import ProductsHero from "./ProductsHero";

export default function Products() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="font-serif text-gray-800">

      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Bosch Home Appliances Products | Kitchen, Laundry & Cooling – Chennai
        </title>

        <meta
          name="description"
          content="Browse Bosch home appliances in Chennai including kitchen appliances, washing machines, refrigerators, and small appliances. Visit our Velachery showroom for live demos."
        />

        <meta
          name="keywords"
          content="Bosch kitchen appliances Chennai, Bosch washing machine Velachery, Bosch refrigerator showroom, Bosch built-in oven India"
        />

       
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bosch Home Appliances Product Range" />
        <meta
          name="twitter:description"
          content="Discover Bosch premium home appliances across kitchen, laundry, cooling, and small appliances in Chennai."
        />
        <meta name="twitter:image" content="https://res.cloudinary.com/dapj1nuzz/image/upload/v1774506837/opengraph_vgzvxl.png" />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Velachery, Chennai" />
      </Helmet>

      <ProductsHero />

      <section id="kitchen">
        <KitchenAppliances />
      </section>

      <section id="laundry">
        <LaundryAppliances />
      </section>

      <section id="cooling">
        <CoolingAppliances />
      </section>

      <section id="small">
        <SmallAppliances />
      </section>

    </div>
  );
}