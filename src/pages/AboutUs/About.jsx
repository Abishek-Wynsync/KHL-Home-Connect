export default function About() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">About KHR Home Connect</h1>

      <p className="mt-6 text-gray-600">
        KHR Home Connect is an authorized dealer of Bosch home appliances,
        delivering premium quality products with trusted service.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow rounded-xl">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-2 text-gray-600">
            To provide high-quality appliances with excellent customer service.
          </p>
        </div>

        <div className="bg-white p-6 shadow rounded-xl">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="mt-2 text-gray-600">
            To become a leading destination for premium home appliances.
          </p>
        </div>
      </div>
    </div>
  );
}