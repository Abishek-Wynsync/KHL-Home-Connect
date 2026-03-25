// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // Components
// // import Navbar from "./components/Navbar";

// // // Pages
// // import Home from "./pages/home";
// // import About from "./pages/AboutUs/About";
// // import Products from "./pages/Products/Products";
// // import Technologies from "./pages/Technologies/Technologies";

// // // Combined Pages
// // import ExperienceSupport from "./pages/ExperienceSupport/ExperienceSupport";
// // import ContactVisit from "./pages/ContactVisit/ContactVisit";

// // import Footer from "./components/Footer";

// // // function App() {
// // //   return (
// // //     <Router>

// // //       {/* 🔝 Navbar */}
// // //       <Navbar />

// // //       {/* 📄 Routes */}
// // //       <Routes>
// // //         <Route path="/" element={<Home />} />
// // //         <Route path="/about" element={<About />} />
// // //         <Route path="/products" element={<Products />} />
// // //         <Route path="/technologies" element={<Technologies />} />

// // //         {/* Combined Pages */}
// // //         <Route path="/experience-support" element={<ExperienceSupport />} />
// // //         <Route path="/contact-visit" element={<ContactVisit />} />
// // //       </Routes>

// // //       <Footer />

// // //     </Router>
// // //   );
// // // }

// // // function App() {
// // //   return (
// // //     <Router>
// // //       {/* 🔝 Navbar is fixed, so it sits on top */}
// // //       <Navbar />

// // //       {/* Wrapping Routes in a 'flex-grow' container ensures the 
// // //          footer stays at the bottom even on short pages.
// // //       */}
// // //       <div className="flex flex-col min-h-screen">
// // //         <main className="flex-grow">
// // //           <Routes>
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/products" element={<Products />} />
// // //             <Route path="/technologies" element={<Technologies />} />
// // //             <Route path="/experience-support" element={<ExperienceSupport />} />
// // //             <Route path="/contact-visit" element={<ContactVisit />} />
// // //           </Routes>
// // //         </main>
        
// // //         <Footer />
// // //       </div>
// // //     </Router>
// // //   );
// // // }


// // function App() {
// //   return (
// //     <Router>
// //       <div className="flex flex-col min-h-screen">
// //         <Navbar />
// //         {/* pt-[80px] matches the height of your navbar on mobile. 
// //             lg:pt-[110px] matches the height on desktop. 
// //             This prevents content from hiding behind the fixed navbar.
// //         */}
// //         <main className="flex-grow pt-[80px] lg:pt-[110px]">
// //           <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/products" element={<Products />} />
// //             <Route path="/technologies" element={<Technologies />} />
// //             <Route path="/experience-support" element={<ExperienceSupport />} />
// //             <Route path="/contact-visit" element={<ContactVisit />} />
// //           </Routes>
// //         </main>
// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/home";
// import About from "./pages/AboutUs/About";
// import Products from "./pages/Products/Products";
// import Technologies from "./pages/Technologies/Technologies";
// import ExperienceSupport from "./pages/ExperienceSupport/ExperienceSupport";
// import ContactVisit from "./pages/ContactVisit/ContactVisit";

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Navbar is fixed at the top */}
//         <Navbar />

//         {/* pt-[80px] accounts for Navbar height on mobile.
//           lg:pt-[110px] accounts for Navbar height on desktop.
//         */}
//        <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/technologies" element={<Technologies />} />
//             <Route path="/experience-support" element={<ExperienceSupport />} />
//             <Route path="/contact-visit" element={<ContactVisit />} />
//           </Routes>
//         </main>
        
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/home/home";
import About from "./pages/AboutUs/About";
import Products from "./pages/Products/Products";
import Technologies from "./pages/Technologies/Technologies";
import ExperienceSupport from "./pages/ExperienceSupport/ExperienceSupport";
import ContactVisit from "./pages/ContactVisit/ContactVisit";
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
        <ScrollToTop />
        {/* 🔝 Navbar */}
        <Navbar />

        {/* 🔹 Main Content */}
        <main className="flex-grow pt-[80px] md:pt-[100px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/experience-support" element={<ExperienceSupport />} />
            <Route path="/ContactVisit" element={<ContactVisit />} />
            
          </Routes>
        </main>

        {/* 🔻 Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;