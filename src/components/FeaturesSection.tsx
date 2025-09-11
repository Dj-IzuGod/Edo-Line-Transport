import { Card, CardContent } from "./ui/card";
import { Shield, Clock, CreditCard, Headphones, MapPin, Users } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our priority. All our partner operators are verified and vehicles are regularly inspected.",
    color: "from-green-400 to-green-600"
  },
  {
    icon: Clock,
    title: "24/7 Booking",
    description: "Book your tickets anytime, anywhere. Our platform is available round the clock for your convenience.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "Multiple payment options including credit cards, digital wallets, and bank transfers for hassle-free booking.",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Our dedicated support team is available 24/7 to assist you with any questions or issues.",
    color: "from-orange-400 to-orange-600"
  },
  {
    icon: MapPin,
    title: "Wide Network",
    description: "Extensive network covering thousands of routes across the country with reliable service partners.",
    color: "from-pink-400 to-pink-600"
  },
  {
    icon: Users,
    title: "Trusted by Millions",
    description: "Join millions of satisfied customers who trust us for their daily commute and travel needs.",
    color: "from-indigo-400 to-indigo-600"
  }
];

const stats = [
  { value: "5M+", label: "Happy Customers", target: 5000000 },
  { value: "10K+", label: "Routes Available", target: 10000 },
  { value: "500+", label: "Partner Operators", target: 500 },
  { value: "99.9%", label: "Service Reliability", target: 99.9 }
];

export function FeaturesSection() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#c92121] rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            Why Choose
            <span className="text-[#c92121] block md:inline md:ml-4">
              Us?
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the best in class travel booking with unmatched convenience, 
            reliability, and customer-first approach that sets us apart.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="group"
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  {/* Background gradient on hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: hoveredFeature === index ? 0.1 : 0, 
                      scale: hoveredFeature === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-lg`}
                  />
                  
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 shadow-lg`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                    className="relative z-10"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Video Background for Stats */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-20"
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-[#c92121] to-[#a01a1a]"></div>
          </div>
          
          <div className="relative z-10 p-12 md:p-16 text-white rounded-3xl">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Trusted by Travelers Worldwide
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.3 + 0.2 * index, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                    className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.7 + 0.1 * index }}
                    className="text-white/90 text-lg font-medium group-hover:text-white transition-colors"
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}