export default function Reviews() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Customer Reviews</h1>

      <div className="mt-10 space-y-6">

        <div className="card">
          <p>"Excellent service and genuine Bosch products!"</p>
          <h4 className="mt-2 font-semibold">– Customer 1</h4>
        </div>

        <div className="card">
          <p>"Highly recommended showroom experience."</p>
          <h4 className="mt-2 font-semibold">– Customer 2</h4>
        </div>

      </div>
    </div>
  );
}