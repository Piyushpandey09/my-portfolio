import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Projects from './Components/Project';
import Preloader from './Components/Preloader';
import Footer from './Components/Footer';
import Certifications from './Components/Certifications';
import ContactPage from './Components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ⏳ total preloader time = 5 sec (scan + check)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Certificate" element={<Certifications />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
