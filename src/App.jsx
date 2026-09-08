
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Services Page */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;