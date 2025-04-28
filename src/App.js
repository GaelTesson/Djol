import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import SavoirFaire from "./pages/SavoirFaire";
import Autre from "./pages/Autre";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <nav className="fixed top-0 right-0 w-full z-50 backdrop-blur-md shadow-md p-4 flex gap-10 justify-end bg-white opacity-70 font-primary text-primary">
  <Link to="/" className="hover:underline">DJOL</Link>
  <Link to="/mission" className="hover:underline">NOTRE MISSION</Link>
  <Link to="/savoir-faire" className="hover:underline">SAVOIR FAIRE</Link>
  <Link to="/autre" className="hover:underline">AUTRE</Link>
  <Link to="/contact" className="hover:underline">CONTACT</Link>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/savoir-faire" element={<SavoirFaire />} />
        <Route path="/autre" element={<Autre />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

