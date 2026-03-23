export default function home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          KHR Home Connect
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Authorized Dealer for Bosch Home Appliances
        </p>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* About Us */}
          <a href="/about" className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">About Us</h2>
            <p className="mt-2 text-gray-600">
              Learn more about KHR Home Connect and our partnership with Bosch.
            </p>
          </a>

          {/* Bosch Technologies */}
          <a href="/technologies" className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">Bosch Technologies</h2>
            <p className="mt-2 text-gray-600">
              Explore innovative technologies powering Bosch appliances.
            </p>
          </a>

          {/* Experience Center */}
          <a href="/experience-center" className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">Experience Center</h2>
            <p className="mt-2 text-gray-600">
              Visit our showroom and experience Bosch appliances live.
            </p>
          </a>

          {/* Service & Support */}
          <a href="/service-support" className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">Service & Support</h2>
            <p className="mt-2 text-gray-600">
              Get assistance with installation, warranty, and service.
            </p>
          </a>

          {/* Customer Reviews */}
          <a href="/reviews" className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">Customer Reviews</h2>
            <p className="mt-2 text-gray-600">
              See what our customers say about us.
            </p>
          </a>

          {/* Visit Our Store */}
          <a href="/visit-store" className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">Visit Our Store</h2>
            <p className="mt-2 text-gray-600">
              Find our location and book an appointment.
            </p>
          </a>

        </div>
      </section>

    </main>
  );
}