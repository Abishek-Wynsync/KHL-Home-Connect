import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/home";
import About from "./pages/AboutUs/About";
import Products from "./pages/Products/Products";
import Technologies from "./pages/Technologies/Technologies";

// Combined Pages
import ExperienceSupport from "./pages/ExperienceSupport/ExperienceSupport";
import ContactVisit from "./pages/ContactVisit/ContactVisit";

import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>

//       {/* 🔝 Navbar */}
//       <Navbar />

//       {/* 📄 Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/technologies" element={<Technologies />} />

//         {/* Combined Pages */}
//         <Route path="/experience-support" element={<ExperienceSupport />} />
//         <Route path="/contact-visit" element={<ContactVisit />} />
//       </Routes>

//       <Footer />

//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      {/* 🔝 Navbar is fixed, so it sits on top */}
      <Navbar />

      {/* Wrapping Routes in a 'flex-grow' container ensures the 
         footer stays at the bottom even on short pages.
      */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/experience-support" element={<ExperienceSupport />} />
            <Route path="/contact-visit" element={<ContactVisit />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}


export default App;