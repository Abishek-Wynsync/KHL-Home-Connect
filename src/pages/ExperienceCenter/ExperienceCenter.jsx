export default function ExperienceCenter() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold">Experience Center</h1>

      <p className="mt-6 text-gray-600">
        Visit our showroom to explore Bosch appliances in real-time.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="card">Showroom Overview</div>
        <div className="card">Live Demo</div>
        <div className="card">Product Experience Zones</div>
      </div>

      <button className="mt-10 bg-red-600 text-white px-6 py-3 rounded-lg">
        Book a Demo
      </button>
    </div>
  );
}