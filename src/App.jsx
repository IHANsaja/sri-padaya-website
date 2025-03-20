import React, { useState, useEffect } from 'react';
import NavBar from './sections/NavBar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import RoadsSection from './sections/RoadsSection';
import ContactForm from './sections/ContactSection';
import Footer from './components/Footer';
import Preloader from './components/LoadingSpinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <NavBar />
          <section id="home">
            <HeroSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="roads">
            <RoadsSection />
          </section>

          <section id="contact">
            <ContactForm />
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
