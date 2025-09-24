import { Button } from "./ui/button";
import { Menu, Phone, Mail, User, X } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignupModal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg py-2" : "py-0"
      }`}
    >
      {/* Top contact bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`bg-[#c92121] text-white transition-all duration-300 ${
          isScrolled ? "py-1" : "py-3"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">
                +2348161519935, +2348127132210
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@newedoline.com</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block"
          >
            <span>24/7 Customer Support Available</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main navigation */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className=" text-white p-3  mr-4  "
            >
              <div
                className="w-8 h-8 flex items-center justify-center font-bold "
                style={{ width: "100px" }}
              >
                <img src="./New-edo-logo-with-bus-1-scaled.webp" alt="logo" />
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-10">
            {[
              "Home",
              "About Us",
              "Hire a Buses",
              "Terminals",
              "My Bookings",
              "Contact",
            ].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, color: "#c92121" }}
                className="text-gray-700 hover:text-[#c92121] transition-all duration-300 font-medium relative group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c92121] group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </nav>

          {/* User Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLoginModalOpen(true)}
                className="hidden md:flex items-center gap-2 border-gray-300 hover:border-[#c92121] transition-colors"
              >
                <User className="w-4 h-4" />
                Login
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setIsSignupModalOpen(true)}
                className="bg-[#c92121] hover:bg-[#a01a1a] text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Sign Up
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 pt-6 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              {[
                "Home",
                "About Us",
                "Hire a Buses",
                "Terminals",
                "My Bookings",
                "Contact",
              ].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-gray-700 hover:text-[#c92121] transition-colors font-medium py-2"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginModalOpen(false);
          setIsSignupModalOpen(true);
        }}
      />

      {/* Signup Modal */}
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onSwitchToLogin={() => {
          setIsSignupModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
    </motion.header>
  );
}
