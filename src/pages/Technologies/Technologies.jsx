export default function Technologies() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold">Bosch Technologies</h1>

      <div className="mt-10 grid md:grid-cols-2 gap-8">

        <div className="card">
          <h2 className="font-semibold text-lg">EcoSilence Drive</h2>
          <p className="text-gray-600 mt-2">
            Energy-efficient motor with quiet operation.
          </p>
        </div>

        <div className="card">
          <h2 className="font-semibold text-lg">ActiveWater</h2>
          <p className="text-gray-600 mt-2">
            Optimized water usage for better efficiency.
          </p>
        </div>

        <div className="card">
          <h2 className="font-semibold text-lg">VitaFresh</h2>
          <p className="text-gray-600 mt-2">
            Keeps food fresh for longer periods.
          </p>
        </div>

        <div className="card">
          <h2 className="font-semibold text-lg">Home Connect</h2>
          <p className="text-gray-600 mt-2">
            Smart appliance control via mobile app.
          </p>
        </div>

      </div>
    </div>
  );
}