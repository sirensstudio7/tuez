"use client";

import { motion } from "framer-motion";
import { newsData } from "@/data/content";
import { ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";

function NewsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-100 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-4 md:mb-6">
              Latest News & Events
            </h2>
            <p className="text-slate-500 text-base font-light max-w-md">
              Updates from our campus, research breakthroughs, and global collaborations.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-none text-slate-600 hover:bg-slate-50 hover:text-slate-900">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {newsData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col h-full bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 bg-slate-100 w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: item.image 
                        ? `url(${item.image})` 
                        : `url(/image${(i % 3) + 1}.jpg)`
                    }}
                  />
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-3 md:gap-4 text-xs text-slate-400 mb-4 font-medium">
                  <span>
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                    <Tag size={12} /> {item.category}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-xl font-medium text-slate-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-4 md:mb-6 flex-grow line-clamp-2">
                  {item.summary}
                </p>
                
                <div className="pt-4 md:pt-6 border-t border-slate-50">
                   <span className="text-sm text-slate-900 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center cursor-pointer">
                     Read Story <ArrowRight className="ml-2 h-3 w-3" />
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { NewsSection };
