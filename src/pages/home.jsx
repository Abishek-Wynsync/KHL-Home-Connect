import React from "react";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-200 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Premium Home Appliances Experience – Now in Velachery
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Discover, experience, and upgrade your home with world-class
              appliances from <span className="font-semibold text-blue-600">Bosch</span>
              and other leading brands — all under one roof.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                Visit Our Store
              </button>

              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition">
                Book a Demo
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt="Home Connect Appliances"
              className="w-80 drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold">About Our Showroom</h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-600">
          We bring premium home appliances from Bosch and other trusted brands
          to Velachery, offering customers a hands-on experience before they
          make a purchase. Our experts guide you in choosing the right products
          for your home and lifestyle.
        </p>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-20 bg-slate-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            "Washing Machines",
            "Refrigerators",
            "Dishwashers",
            "Built-in Appliances",
            "Chimneys & Hobs",
            "Microwave Ovens",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Explore premium {item.toLowerCase()} from top brands.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE BOSCH */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Bosch</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            "German Engineering",
            "Energy Efficient",
            "Long-lasting Durability",
            "Smart Home Technology",
          ].map((item, index) => (
            <div key={index} className="p-6 border rounded-xl">
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-slate-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-semibold">Bosch Appliance Model {item}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  High performance, energy-efficient, and designed for modern
                  homes.
                </p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERS */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Special Launch Offers Available at Our Velachery Store
        </h2>
        <p className="mt-4">Festive discounts, exchange deals, and free installation.</p>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Priya, Velachery",
              text: "Great showroom with knowledgeable staff. Helped me choose the perfect dishwasher.",
            },
            {
              name: "Arun, Chennai",
              text: "Wide range of Bosch appliances and excellent service. Highly recommended!",
            },
          ].map((review, index) => (
            <div key={index} className="p-6 border rounded-xl shadow-sm">
              <p className="text-gray-600">"{review.text}"</p>
              <p className="mt-4 font-semibold">– {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gray-900 text-white text-center px-6">
        <h2 className="text-3xl font-bold">Visit Our Velachery Showroom Today</h2>
        <p className="mt-4 text-gray-300">
          Experience premium home appliances in person and get expert guidance.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
            Get Directions
          </button>
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900">
            Enquire Now
          </button>
        </div>
      </section>
    </div>
  );
}