import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import MarketContext from './sections/MarketContext';
import CompetitivePosition from './sections/CompetitivePosition';
import Roadmap from './sections/Roadmap';
import About from './sections/About';
import CallToAction from './sections/CallToAction';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <MarketContext />
          <CompetitivePosition />
          <Roadmap />
          <About />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;