import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { ImageWithFallback } from "./fallBack/ImageWithFallback";
import {
  MapPin,
  Star,
  ArrowRight,
  Clock,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const destinations = [
  {
    id: 1,
    name: "Ajah, Lagos",
    country:
      "Front of Furniture Square, Thomas Estate, Along Ajah Ibeju Lekki Expressway, Ajah – Lagos",
    image: "./Aja lagos, furniture square (2).jpg",
    price: "$49",
    rating: 4.8,
    routes: "152 routes available",
    duration: "2h 30m",
    travelers: "2.5k+",
    description: "",
  },
  {
    id: 2,
    name: "Iyana - Ipaja, Lagos",
    country:
      "173, Lagos Abeokuta Expressway, By BRT Bus Stop, Iyana – Ipaja, Lagos.",
    image: "./Iyana-Ipaja.jpg",
    price: "$35",
    rating: 4.9,
    routes: "89 routes available",
    duration: "1h 45m",
    travelers: "1.8k+",
    description: "",
  },
  {
    id: 3,
    name: "Utako, Abuja",
    country: "Utako Bus Terminal, Basemate Warehouse 5, Utako, Abuja.",
    image: "./Utako Abuja.jpg",
    price: "$42",
    rating: 4.7,
    routes: "67 routes available",
    duration: "3h 15m",
    travelers: "1.2k+",
    description: "",
  },
];

const allDestinations = [
  ...destinations,
  {
    id: 4,
    name: "Edo, HQ",
    country: "Central Park, Obakhavhaye Terminal, Benin City, Edo State.",
    image: "./Benin central park.jpeg",
    price: "$89",
    rating: 4.9,
    routes: "234 routes available",
    duration: "8h 45m",
    travelers: "5.2k+",
    description: "",
  },
  {
    id: 5,
    name: "Edo, Auchi",
    country:
      "Between Mr Biggs and Danco Filling Station, Auchi/Okene Road, Before Jetu Junction, Auchi.",
    image: "./Mr Biggs.jpeg",
    price: "$125",
    rating: 4.8,
    routes: "189 routes available",
    duration: "12h 20m",
    travelers: "4.8k+",
    description: "",
  },
  {
    id: 6,
    name: "Edo, Ekpoma",
    country:
      "Benin Auchi Expressway, Before Ikhiromo Junction, Ukpenu Ekpoma, Edo State.",
    image: "./Benin Auchi.jpeg",
    price: "$78",
    rating: 4.7,
    routes: "298 routes available",
    duration: "7h 30m",
    travelers: "6.1k+",
    description: "",
  },
  {
    id: 7,
    name: "Sydney",
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1596428025491-662bbaf50351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBvcGVyYSUyMGhvdXNlJTIwdHJhdmVsfGVufDF8fHx8MTc1Njk3NzUzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$156",
    rating: 4.8,
    routes: "145 routes available",
    duration: "15h 45m",
    travelers: "3.4k+",
    description:
      "Harbor city with stunning architecture, beautiful beaches, and laid-back lifestyle",
  },
  {
    id: 8,
    name: "Barcelona",
    country: "Spain",
    image:
      "https://images.unsplash.com/photo-1690403021832-4934d206cb5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBzYWdyYWRhJTIwZmFtaWxpYSUyMHRyYXZlbHxlbnwxfHx8fDE3NTY5Nzc1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$65",
    rating: 4.6,
    routes: "176 routes available",
    duration: "6h 15m",
    travelers: "4.2k+",
    description:
      "Artistic Mediterranean city with Gaudí architecture and vibrant street life",
  },
  {
    id: 9,
    name: "Rome",
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1713341086964-7bdd392c1948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwY29sb3NzZXVtJTIwdHJhdmVsJTIwZGVzdGluYXRpb258ZW58MXx8fHwxNzU2OTc3NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$72",
    rating: 4.7,
    routes: "203 routes available",
    duration: "7h 10m",
    travelers: "5.8k+",
    description:
      "Eternal city with ancient ruins, Vatican treasures, and incredible cuisine",
  },
  {
    id: 10,
    name: "Dubai",
    country: "UAE",
    image:
      "https://images.unsplash.com/photo-1656403068585-8dceeed716d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1cmolMjBraGFsaWZhJTIwdHJhdmVsfGVufDF8fHx8MTc1Njk3NzU0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$95",
    rating: 4.5,
    routes: "167 routes available",
    duration: "9h 20m",
    travelers: "3.9k+",
    description:
      "Luxury desert oasis with record-breaking architecture and world-class shopping",
  },
  {
    id: 11,
    name: "Amsterdam",
    country: "Netherlands",
    image:
      "https://images.unsplash.com/photo-1519291547479-d8d5fa22f0b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbXN0ZXJkYW0lMjBjYW5hbHMlMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NTY5Nzc1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$58",
    rating: 4.6,
    routes: "142 routes available",
    duration: "6h 45m",
    travelers: "2.7k+",
    description:
      "Charming canal city with historic architecture, museums, and bike-friendly streets",
  },
  {
    id: 12,
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1693649113183-283327208912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwdHJhdmVsJTIwZGVzdGluYXRpb258ZW58MXx8fHwxNzU2OTc3NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$82",
    rating: 4.9,
    routes: "98 routes available",
    duration: "11h 30m",
    travelers: "3.6k+",
    description:
      "Tropical paradise with ancient temples, rice terraces, and spiritual wellness",
  },
];

export function PopularDestinations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);   To be used if we want to track current index for any reason
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollContainerRef.current?.scrollBy({
          left: -400,
          behavior: "smooth",
        });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollContainerRef.current?.scrollBy({ left: 400, behavior: "smooth" });
      } else if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  // Track scroll progress
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const progress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c92121] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
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
            Popular
            <span className="text-[#c92121] block md:inline md:ml-4">
              Destinations
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the most loved travel destinations. Experience seamless
            journeys to places that inspire and captivate travelers worldwide.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.95 }
              }
              transition={{ duration: 0.8, delay: 0.2 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>

                  {/* Price Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.6 + 0.1 * index, type: "spring" }}
                    className="absolute top-6 right-6"
                  >
                    <Badge className="bg-[#c92121] text-white px-4 py-2 text-lg font-semibold shadow-lg">
                      From {destination.price}
                    </Badge>
                  </motion.div>

                  {/* Rating Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.7 + 0.1 * index, type: "spring" }}
                    className="absolute top-6 left-6"
                  >
                    <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-2" />
                      <span className="font-semibold text-gray-800">
                        {destination.rating}
                      </span>
                    </div>
                  </motion.div>

                  {/* Overlay Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-6 right-6 text-white"
                  >
                    <div className="flex justify-between items-center bg-black/30 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">
                            {destination.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">
                            {destination.travelers}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {destination.name}
                    </h3>
                    <div className="flex items-center text-gray-500 mb-3">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="text-lg">{destination.country}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {destination.description}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {destination.routes}
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-[#c92121] font-bold text-xl">
                        Starting at {destination.price}
                      </div>
                      <div className="text-gray-500 text-sm">per person</div>
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-[#c92121] font-semibold"
                    >
                      <span className="mr-2">Book Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(201, 33, 33, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-[#c92121] text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#a01a1a] transition-colors inline-flex items-center gap-3"
          >
            View All Destinations
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Destinations Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-gradient-to-br from-gray-50 to-white border-0 shadow-2xl">
          <DialogHeader className="p-8 pb-4">
            <DialogTitle className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
              Discover Amazing
              <span className="text-[#c92121] block md:inline md:ml-3">
                Destinations
              </span>
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 mt-2">
              Browse our complete collection of travel destinations around the
              world. Use the arrow buttons or scroll horizontally to explore all
              locations.
            </DialogDescription>
          </DialogHeader>

          <div className="relative flex-1 overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>

            {/* Scrollable Destinations Grid */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-8 overflow-x-auto scrollbar-hide px-8 pb-8 h-full scroll-smooth"
              style={
                {
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  touchAction: "pan-x",
                  WebkitOverflowScrolling: "touch",
                } as React.CSSProperties
              }
            >
              {allDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index % 4) }}
                  className="flex-shrink-0 w-80 group"
                >
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                    <div className="relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        <ImageWithFallback
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-56 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>

                      {/* Price Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="absolute top-4 right-4"
                      >
                        <Badge className="bg-[#c92121] text-white px-3 py-1 text-sm font-semibold shadow-lg">
                          From {destination.price}
                        </Badge>
                      </motion.div>

                      {/* Rating Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="absolute top-4 left-4"
                      >
                        <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-semibold text-gray-800 text-sm">
                            {destination.rating}
                          </span>
                        </div>
                      </motion.div>

                      {/* Overlay Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute bottom-4 left-4 right-4 text-white"
                      >
                        <div className="flex justify-between items-center bg-black/30 backdrop-blur-sm rounded-lg p-2">
                          <div className="flex items-center gap-3 text-sm">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{destination.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{destination.travelers}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {destination.name}
                        </h3>
                        <div className="flex items-center text-gray-500 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{destination.country}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {destination.description}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {destination.routes}
                        </p>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <div>
                          <div className="text-[#c92121] font-bold text-lg">
                            Starting at {destination.price}
                          </div>
                          <div className="text-gray-500 text-xs">
                            per person
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ x: 3 }}
                          className="flex items-center text-[#c92121] font-semibold text-sm"
                        >
                          <span className="mr-1">Book Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Scroll Progress Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-gray-600 font-medium">
                    {Math.round(scrollProgress)}% scrolled
                  </div>
                  <div className="w-20 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#c92121] rounded-full"
                      style={{ width: `${scrollProgress}%` }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
          >
            <X className="w-6 h-6 text-gray-600" />
          </motion.button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
