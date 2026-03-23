export default function Offers() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Offers & Promotions</h1>

      <div className="mt-10 space-y-6">

        <div className="card">
          <h2 className="font-semibold">Festive Offer</h2>
          <p className="text-gray-600">Up to 20% off on selected appliances.</p>
        </div>

        <div className="card">
          <h2 className="font-semibold">Cashback Offer</h2>
          <p className="text-gray-600">Get cashback on select purchases.</p>
        </div>

      </div>
    </div>
  );
}