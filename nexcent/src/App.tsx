import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/manual/header/Header";
import Footer from "./components/manual/Footer/Footer";

// Import pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Features from "./pages/Features";
import Product from "./pages/Product";
import Testimonial from "./pages/Testimonial";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          <Route path="/product" element={<Product />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <div className="bg-light-black">
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
