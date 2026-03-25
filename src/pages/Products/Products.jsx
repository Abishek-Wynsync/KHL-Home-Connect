import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

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