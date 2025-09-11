import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Card, CardContent } from "./ui/card";
import {
  CalendarIcon,
  MapPin,
  ArrowRightLeft,
  Search,
  Play,
  Pause,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";

export function HeroSection() {
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [selectedTransport, setSelectedTransport] = useState("bus");
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const transportTypes = [
    {
      id: "bus",
      icon: "🚌",
      label: "Transportation by Bus",
      color: "bg-blue-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="./202509091443 (2).mp4" type="video/mp4" />
          {/* Fallback background */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-[#c92121] to-gray-800"></div>
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>

        {/* Video Controls */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={toggleVideo}
          className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          {isVideoPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center text-white mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            Book Your Perfect
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-[#c92121] drop-shadow-lg"
            >
              Journey
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-3xl mb-12 text-gray-100 leading-relaxed max-w-4xl mx-auto"
          >
            Discover seamless travel experiences with our premium booking
            platform. Safe, reliable, and designed for the modern traveler.
          </motion.p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Card className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-10">
              {/* Transport Type Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex justify-center mb-10"
              >
                <div className="flex bg-gray-100 rounded-2xl p-2 gap-2">
                  {transportTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTransport(type.id)}
                      className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                        selectedTransport === type.id
                          ? "bg-[#c92121] text-white shadow-lg"
                          : "text-gray-600 hover:bg-white hover:shadow-md"
                      }`}
                    >
                      <span className="text-2xl mr-3">{type.icon}</span>
                      {type.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
                {/* From Location */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="space-y-3"
                >
                  <Label className="text-gray-700 font-medium text-lg">
                    From
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Departure city"
                      className="pl-12 h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-[#c92121] transition-colors"
                    />
                  </div>
                </motion.div>

                {/* To Location */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                  className="space-y-3"
                >
                  <Label className="text-gray-700 font-medium text-lg">
                    To
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Destination city"
                      className="pl-12 h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-[#c92121] transition-colors"
                    />
                    <motion.button
                      whileHover={{ rotate: 180 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute right-3 top-3 p-2 hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <ArrowRightLeft className="w-5 h-5 text-gray-400" />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Departure Date */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="space-y-3"
                >
                  <Label className="text-gray-700 font-medium text-lg">
                    Departure
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-14 justify-start text-left font-normal text-lg border-2 border-gray-200 rounded-xl hover:border-[#c92121] transition-colors"
                      >
                        <CalendarIcon className="mr-3 w-5 h-5" />
                        {departureDate
                          ? departureDate.toLocaleDateString()
                          : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={departureDate}
                        onSelect={setDepartureDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </motion.div>

                {/* Return Date */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="space-y-3"
                >
                  <Label className="text-gray-700 font-medium text-lg">
                    Return (Optional)
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-14 justify-start text-left font-normal text-lg border-2 border-gray-200 rounded-xl hover:border-[#c92121] transition-colors"
                      >
                        <CalendarIcon className="mr-3 w-5 h-5" />
                        {returnDate
                          ? returnDate.toLocaleDateString()
                          : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </motion.div>

                {/* Search Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="bg-[#c92121] hover:bg-[#a01a1a] text-white h-14 text-lg px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                    <Search className="w-6 h-6 mr-3" />
                    Search
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
