import React from "react";
import KitchenAppliances from "./KitchenAppliances";
import LaundryAppliances from "./LaundryAppliances";
import CoolingAppliances from "./CoolingAppliances";
import SmallAppliances from "./SmallAppliances";
import ProductsHero from "./ProductsHero";

export default function Products() {
  return (
    <div className="font-serif text-gray-800">

      <ProductsHero />
      <KitchenAppliances />
      <LaundryAppliances />
      <CoolingAppliances />
      <SmallAppliances />

    </div>
  );
}