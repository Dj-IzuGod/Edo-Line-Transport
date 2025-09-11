import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PopularDestinations } from "./components/PopularDestinations";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white relative overflow-x-hidden"
    >
      <Header />
      <main>
        <HeroSection />
        <PopularDestinations />
        <FeaturesSection />
      </main>
      <Footer />
      
      {/* Cursor Follower Effect */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-[#c92121]/20 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
          y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.8
        }}
        style={{
          display: typeof window !== 'undefined' && window.innerWidth > 768 ? 'block' : 'none'
        }}
      />
    </motion.div>
  );
}