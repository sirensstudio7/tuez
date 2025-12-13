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
import { AlumniStoriesSection } from "@/components/layout/AlumniStoriesSection";

const titles = [
  "Welcome to Termez University Of Economics and Service",
  "Become a professional in Classrooms",
  "Most Modern Infrastructures"
];

export function HomeClient() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000); // Change title every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white min-h-screen">
      {/* Subtle Background Grid - Light Mode */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_800px_at_50%_-30%,#e0e7ff,transparent)]" />
      
      {/* Hero Section */}
      <section className="relative items-end min-h-[calc(100vh-7.5rem)] h-auto md:h-[calc(100vh-7.5rem)] pt-0 overflow-hidden">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[80%_20%]">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative text-left z-10 min-h-[500px] md:h-full flex flex-col justify-center md:justify-end w-full pt-12 md:pt-0 pb-8 sm:pb-12 lg:pb-16 overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 min-h-full w-full">
                 <BackgroundSlideshow />
              </div>


              <div className="px-4 sm:px-6 lg:px-8">
                <div className="mb-6 w-fit inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm
">
                  <Globe className="h-3 w-3" />
                  <span>Global Excellence</span>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentTitleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                  >
                    {titles[currentTitleIndex]}
                  </motion.h1>
                </AnimatePresence>
                
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

            {/* Right Column: Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative z-10 flex flex-col"
            >
                 <div className="grid grid-cols-2 lg:flex lg:flex-col h-full">
                    <div className="group flex flex-col justify-center items-start gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-6 lg:p-8 border-r border-b lg:border-x lg:border-b-0 border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-300">
                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 transition-colors duration-300">
                          <Counter value={25000} suffix="+" />
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-medium text-left">Total Students</p>
                    </div>
                    <div className="group flex flex-col justify-center items-start gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-6 lg:p-8 border-b lg:border-x lg:border-b-0 border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-300">
                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 transition-colors duration-300">
                          <Counter value={412} />
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-medium text-left">Professors Teachers</p>
                    </div>
                    <div className="group flex flex-col justify-center items-start gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 border-r lg:border-x border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-300">
                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 transition-colors duration-300">
                          <Counter value={27447} />
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-medium text-left">IRC Fund</p>
                    </div>
                    <div className="group flex flex-col justify-center items-start gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-6 lg:p-8 lg:border border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-300">
                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 transition-colors duration-300">
                          <Counter value={3} suffix="+" />
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-medium text-left">Faculties Count</p>
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

      {/* Alumni Stories Section */}
      <AlumniStoriesSection />

      {/* New Grid Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        {/* Left Side - Background Image */}
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: 'url(/bn1.webp)'
          }}
        />
        
        {/* Right Side - Content */}
        <div className="bg-[#80F5BF] flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#006CDE] mb-6 tracking-tight">
              Your Future Starts Here
            </h2>
            <p className="text-[#006CDE]/80 text-base font-light leading-relaxed mb-8">
              Join thousands of students who are shaping their future at Termez University of Economics and Service.
            </p>
            <Button className="bg-[#006CDE] text-white hover:bg-[#0056b3]">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
