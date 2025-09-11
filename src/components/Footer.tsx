import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUp,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    "About Us",
    "How It Works",
    "Safety Measures",
    "Partner with Us",
    "Careers",
    "Press & Media",
  ];

  const services = [
    "Bus Booking",
    "Train Booking",
    "Flight Booking",
    "Hotel Booking",
    "Travel Insurance",
    "Group Booking",
  ];

  const policies = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Refund Policy",
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="relative">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-[#c92121] to-[#a01a1a]"></div>
        </div>

        <div className="relative z-10 py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Stay Updated with Our Latest Offers
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/90 mb-12 text-xl leading-relaxed"
              >
                Subscribe to our newsletter and never miss out on exclusive
                deals, travel tips, and special promotions tailored just for
                you.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <Input
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 h-14 text-lg placeholder:text-white/60 focus:border-white"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-white text-[#c92121] hover:bg-gray-100 h-14 px-8 font-semibold text-lg shadow-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div ref={ref} className="py-20 bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#c92121] text-white p-3 rounded-xl mr-4 shadow-lg"
                >
                  <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                    T
                  </div>
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold">TransportBooking</h1>
                  <p className="text-sm text-gray-400 font-medium">
                    Your Journey Starts Here
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                We make travel booking simple, safe, and affordable. Connect
                with millions of travelers and explore the world with
                confidence.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-3 text-gray-400 hover:text-white hover:bg-[#c92121] transition-all duration-300 rounded-xl"
                    >
                      <Icon className="w-6 h-6" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-8 text-white">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#c92121" }}
                      className="text-gray-400 hover:text-[#c92121] transition-all duration-300 text-lg"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-xl font-semibold mb-8 text-white">
                Services
              </h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.4 + 0.1 * index }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#c92121" }}
                      className="text-gray-400 hover:text-[#c92121] transition-all duration-300 text-lg"
                    >
                      {service}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold mb-8 text-white">
                Contact Us
              </h4>
              <div className="space-y-6">
                {[
                  {
                    Icon: Phone,
                    title: "+1 (555) 123-4567",
                    subtitle: "24/7 Customer Support",
                  },
                  {
                    Icon: Mail,
                    title: "support@transportbooking.com",
                    subtitle: "For general inquiries",
                  },
                  {
                    Icon: MapPin,
                    title: "123 Business Street",
                    subtitle: "New York, NY 10001",
                  },
                ].map(({ Icon, title, subtitle }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.5 + 0.1 * index }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 cursor-pointer"
                  >
                    <div className="bg-[#c92121]/20 p-2 rounded-lg mt-1">
                      <Icon className="w-5 h-5 text-[#c92121]" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-lg">{title}</p>
                      <p className="text-gray-400">{subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="py-8 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-400 text-lg"
            >
              © 2025 TransportBooking. All rights reserved.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-8"
            >
              {policies.map((policy, _index: number) => (
                <motion.a
                  key={policy}
                  href="#"
                  whileHover={{ y: -2, color: "#c92121" }}
                  className="text-gray-400 hover:text-[#c92121] transition-all duration-300"
                >
                  {policy}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#c92121] text-white p-4 rounded-full shadow-lg hover:bg-[#a01a1a] transition-all duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
