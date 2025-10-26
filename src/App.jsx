import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Member from './components/Member';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

import About from './components/About';
import Contact from './components/Contact';

// ✅ Reusable Page Transition Wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

// ✅ Separate component for AnimatePresence (important!)
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/member" element={<PageWrapper><Member /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper>< Contact /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

// ✅ Main App Component
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen overflow-hidden bg-black">
        {/* Top Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem]
                       -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr
                       from-[#dc2626] to-[#dc2626] opacity-30 sm:left-[calc(50%-30rem)]
                       sm:w-[72rem]"
          />
        </div>

        {/* ✅ Animated Page Transitions */}
        <AnimatedRoutes />

        {/* Bottom Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem]
                       -translate-x-1/2 bg-gradient-to-tr from-[#dc2626]
                       to-[#dc2626] opacity-30 sm:left-[calc(50%+36rem)]
                       sm:w-[72rem]"
          />
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
