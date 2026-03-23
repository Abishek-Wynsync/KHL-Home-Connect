export default function Products() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold">Products</h1>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="card">Kitchen Appliances</div>
        <div className="card">Laundry Appliances</div>
        <div className="card">Cooling Appliances</div>
      </div>
    </div>
  );
}