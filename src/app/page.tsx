"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Counter } from "@/components/ui/Counter";
import { Button } from "@/components/ui/Button";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { BackgroundSlideshow } from "@/components/ui/BackgroundSlideshow";
import { Globe } from "@/components/ui/globe";
import { NewsSection } from "@/components/layout/NewsSection";
import { AboutSection } from "@/components/layout/AboutSection";
import { FacultiesSection } from "@/components/layout/FacultiesSection";

const titles = [
  "Welcome to Termez University Of Economics and Service",
  "Become a professional in Classrooms",
  "Most Modern Infrastructures"
];

const TITLES_COUNT = titles.length;

export default function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % TITLES_COUNT);
    }, 4000); // Change title every 4 seconds

    return () => clearInterval(interval);
  }, [TITLES_COUNT]);

  return (
    <div className="relative bg-white min-h-screen">
      {/* Subtle Background Grid - Light Mode */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_800px_at_50%_-30%,#e0e7ff,transparent)]" />
      
      {/* Hero Section */}
      <section className="relative items-end h-[calc(100vh-7.5rem)] pt-0 overflow-hidden">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[80%_20%]">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative text-left z-10 h-full flex flex-col justify-end w-full pb-8 sm:pb-12 lg:pb-16 overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 h-full w-full">
                 <BackgroundSlideshow />
              </div>


              <div className="px-4 sm:px-6 lg:px-8">
                <div className="mb-6 w-fit inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C49D] opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C49D]"></span>
                  </span>
                  Admissions Open 2025
                </div>
                
                <h1 className="-mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1] min-h-[120px] sm:min-h-[140px] md:min-h-[160px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTitleIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="block m-0"
                    >
                      {currentTitleIndex === 1 ? (
                        <>
                          <span className="block">Become a professional</span>
                          <span className="block">in Classrooms</span>
                        </>
                      ) : currentTitleIndex === 2 ? (
                        <>
                          <span className="block">Most Modern</span>
                          <span className="block">Infrastructures</span>
                        </>
                      ) : (
                        titles[currentTitleIndex]
                      )}
                    </motion.span>
                  </AnimatePresence>
                </h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="mb-8 text-base text-white/90 max-w-xl leading-relaxed font-light"
                >
                  TUES strongly emphasizes conducting cutting-edge research and implementing the latest teaching methods.
                </motion.p>
              </div>
              
              <div className="px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4">
                <Button className="h-11 px-8 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-900/20">
                  Become a Student
                </Button>
                <Button variant="outline" className="h-11 px-8 text-sm rounded-full border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                  Virtual Tour
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Stats Stack (Vertical - Full Height - No Radius - Flat - Zero Gap) */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative z-10 flex h-full"
            >
                 <div className="flex flex-col w-full h-full justify-between min-h-[500px]">
                    <div className="group flex-1 flex flex-col justify-center items-start gap-8 p-8 border-x border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-300">
                        <h4 className="text-4xl font-bold text-blue-600 transition-colors duration-300">
                          <Counter value={23798} />
                        </h4>
                        <p className="text-sm text-slate-500 uppercase tracking-wider font-medium text-left">Students</p>
                    </div>
                    <div className="group flex-1 flex flex-col justify-center items-start gap-8 p-8 border-x border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-300">
                        <h4 className="text-4xl font-bold text-blue-600 transition-colors duration-300">
                          <Counter value={412} />
                        </h4>
                        <p className="text-sm text-slate-500 uppercase tracking-wider font-medium text-left">Professors Teachers</p>
                    </div>
                    <div className="group flex-1 flex flex-col justify-center items-start gap-8 p-8 border-x border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-300">
                        <h4 className="text-4xl font-bold text-blue-600 transition-colors duration-300">
                          <Counter value={27447} />
                        </h4>
                        <p className="text-sm text-slate-500 uppercase tracking-wider font-medium text-left">IRC Fund</p>
                    </div>
                    <div className="group flex-1 flex flex-col justify-center items-start gap-6 p-6 sm:p-8 border border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-300">
                        <h4 className="text-4xl font-bold text-blue-600 transition-colors duration-300">
                          <Counter value={3} suffix="+" />
                        </h4>
                        <p className="text-sm text-slate-500 uppercase tracking-wider font-medium text-left">Faculties Count</p>
                    </div>
                 </div>
            </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Faculties Section */}
      <FacultiesSection />

      {/* Features Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 md:gap-8">
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight max-w-xl">
              Excellence in education <span className="text-slate-400">since 1931.</span>
            </h2>
            <p className="text-slate-500 max-w-xs text-base font-light">
              Building the next generation of leaders for a digital world.
            </p>
          </div>
          <BentoGrid />
        </div>
      </section>

      {/* News Section */}
      <NewsSection />

      {/* New Grid Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[600px]">
        {/* Left Side - Background Image */}
        <div 
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: `url(/image1.jpg)`
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Right Side - Background */}
        <div className="bg-[#FF2D73] flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              Your Future Starts Here
            </h2>
            <p className="text-white/80 text-base font-light leading-relaxed mb-8">
              Join thousands of students who are shaping their future at Termez University of Economics and Service.
            </p>
            <Button className="h-12 px-8 text-sm rounded-full bg-white text-black hover:bg-slate-100 transition-all duration-300 shadow-none">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* 360 Tour Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4 tracking-tight">
              Virtual <span className="text-blue-600">360° Tour</span>
            </h2>
            <p className="text-slate-500 text-base font-light max-w-2xl mx-auto">
              Explore our campus from anywhere in the world. Take an immersive journey through our facilities, classrooms, and student spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Main Building", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=3270&auto=format&fit=crop" },
              { name: "Library", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=3270&auto=format&fit=crop" },
              { name: "Student Center", image: "https://images.unsplash.com/photo-1592280771884-4a1dc6f8663c?q=80&w=3270&auto=format&fit=crop" },
              { name: "Research Labs", image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=3286&auto=format&fit=crop" },
              { name: "Auditorium", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=3222&auto=format&fit=crop" },
              { name: "Cafeteria", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=3270&auto=format&fit=crop" },
            ].map((location, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-64 overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${location.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <span>360° View</span>
                    <span>•</span>
                    <span>Interactive</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v4M12 17v4M3 12h4M17 12h4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 9l3-3 3 3M15 15l-3 3-3-3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6a6 6 0 0 1 6 6" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <Button className="h-12 px-8 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-200/50">
              Start Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden min-h-[500px] md:min-h-[600px]">
          <div className="absolute inset-0 w-full h-full pt-8 md:pt-16">
             <Globe className="top-auto bottom-0 translate-y-1/2" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
                  Contact <span className="text-blue-500">Us</span>
              </h2>
              <div className="inline-block text-center p-6 md:p-8 rounded-2xl">
                  <div className="text-white/80 flex flex-col items-center justify-center gap-4">
                      <p className="text-base sm:text-lg max-w-2xl">
                        49 Islam Karimov Street, Tashkent, Uzbekistan, 100003 • info@tsue.uz • +998 71 239 01 49
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
