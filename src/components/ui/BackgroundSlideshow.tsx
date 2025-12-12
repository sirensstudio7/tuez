"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgrounds = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=3270&auto=format&fit=crop", // University building
  "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=3286&auto=format&fit=crop", // Students studying
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=3270&auto=format&fit=crop", // Library
  "https://images.unsplash.com/photo-1592280771884-4a1dc6f8663c?q=80&w=3270&auto=format&fit=crop", // Campus life
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3270&auto=format&fit=crop", // Coding/Tech
];

export function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-slate-900 overflow-hidden">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={index}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgrounds[index]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
    </div>
  );
}

