export default function VisitStore() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Visit Our Store</h1>

      <p className="mt-6 text-gray-600">
        Visit our showroom to explore Bosch appliances in person.
      </p>

      <div className="mt-10 space-y-4">
        <p><strong>Address:</strong> Chennai, Tamil Nadu</p>
        <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
        <p><strong>Hours:</strong> 10:00 AM – 8:00 PM</p>
      </div>

      <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg">
        Book Appointment
      </button>
    </div>
  );
}