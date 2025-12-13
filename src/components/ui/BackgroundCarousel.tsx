"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgrounds = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=3270&auto=format&fit=crop", // University building
  "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=3286&auto=format&fit=crop", // Students studying
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=3270&auto=format&fit=crop", // Library
];

export function BackgroundCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgrounds[index]})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />
    </div>
  );
}



