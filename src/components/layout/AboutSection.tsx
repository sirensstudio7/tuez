"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/data/content";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative border-t border-slate-100 overflow-hidden">
      {/* Vertical Lines - Left and Right */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 pointer-events-none z-0" />
      <div className="absolute right-6 top-0 bottom-0 w-px bg-slate-200 pointer-events-none z-0" />
      
      {/* Decorative Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent rotate-12" />
        <div className="absolute top-20 right-0 w-3/4 h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent -rotate-8" />
        <div className="absolute top-32 left-1/3 w-2/3 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent rotate-6" />
        <div className="absolute top-48 right-1/4 w-1/2 h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent -rotate-12" />
        <div className="absolute top-64 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent rotate-3" />
        <div className="absolute top-80 right-0 w-full h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent -rotate-15" />
        <div className="absolute top-96 left-1/4 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent rotate-9" />
        <div className="absolute top-[28rem] right-1/3 w-2/3 h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent -rotate-5" />
        <div className="absolute top-[32rem] left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent rotate-18" />
        <div className="absolute top-[36rem] right-0 w-4/5 h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent -rotate-10" />
        <div className="absolute top-[40rem] left-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent rotate-7" />
        <div className="absolute top-[44rem] right-1/4 w-3/4 h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent -rotate-14" />
        <div className="absolute bottom-40 left-0 w-2/3 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent rotate-11" />
        <div className="absolute bottom-24 right-1/3 w-1/2 h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent -rotate-7" />
        <div className="absolute bottom-12 left-1/4 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent rotate-15" />
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch relative z-10 p-6">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-xs font-semibold text-blue-600 uppercase tracking-wide">
            Our Legacy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-6 md:mb-8 tracking-tight leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="block"
            >
              Building the Future
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="block text-slate-400"
            >
              Since 1931
            </motion.span>
          </h2>
          
          <div className="space-y-4 md:space-y-6 text-base text-slate-500 font-light leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {aboutContent.history}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {aboutContent.mission}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-8"
          >
            <Button className="h-11 px-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-none">
              Learn more
            </Button>
          </motion.div>
        </motion.div>

        {/* Visual / Image Side */}
        <div className="relative grid grid-cols-2 gap-3 sm:gap-4 h-auto">
           <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border border-slate-100 bg-slate-50 shadow-lg shadow-slate-200/50 col-span-2 sm:col-span-1 row-span-2 sm:row-span-3 min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-0 lg:h-full"
            >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=3270&auto=format&fit=crop')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                    <p className="font-medium text-sm sm:text-base md:text-lg">Main Campus</p>
                    <p className="text-white/80 text-xs mt-1">Historic Building</p>
                </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border border-slate-100 bg-slate-50 shadow-lg shadow-slate-200/50 min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:h-full"
            >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: `url('/image1.jpg')`
                  }}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <p className="font-medium text-xs sm:text-sm">Library</p>
                </div>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border border-slate-100 bg-slate-50 shadow-lg shadow-slate-200/50 min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:h-full"
            >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: `url('/image2.jpg')`
                  }}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <p className="font-medium text-xs sm:text-sm">Student Life</p>
                </div>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border border-slate-100 bg-slate-50 shadow-lg shadow-slate-200/50 min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:h-full"
            >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: `url('/image3.jpg')`
                  }}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <p className="font-medium text-xs sm:text-sm">Community</p>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
