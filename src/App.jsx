import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Home
import Home from "./pages/home";

// Pages
import About from "./pages/AboutUs/About";
import Technologies from "./pages/Technologies/Technologies";
import ExperienceCenter from "./pages/ExperienceCenter/ExperienceCenter";
import ServiceSupport from "./pages/ServiceSupport/ServiceSupport";
import Reviews from "./pages/Reviews/Reviews";
import VisitStore from "./pages/VisitStore/VisitStore";

// New Pages
import Products from "./pages/Products/Products";
import Offers from "./pages/Offers/Offers";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>

      {/* 🔝 Navbar */}
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">KHR Home Connect</h1>

        <div className="flex gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* 📄 Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/experience-center" element={<ExperienceCenter />} />
        <Route path="/service-support" element={<ServiceSupport />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/visit-store" element={<VisitStore />} />

        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;