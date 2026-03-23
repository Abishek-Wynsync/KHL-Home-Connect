export default function Contact() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Contact Us</h1>

      <div className="mt-8 space-y-4">
        <p><strong>Address:</strong> Chennai, Tamil Nadu</p>
        <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
        <p><strong>Email:</strong> info@khrhomeconnect.com</p>
      </div>

      <form className="mt-10 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg"
        ></textarea>

        <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}