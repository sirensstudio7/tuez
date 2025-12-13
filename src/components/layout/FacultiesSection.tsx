"use client";

import { motion } from "framer-motion";
import { facultiesData } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export function FacultiesSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-blue-600 relative border-t border-slate-100" id="faculties">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 md:mb-6 tracking-tight">
            Academic <span className="text-white/60">Faculties</span>
          </h2>
          <p className="text-white/80 text-base font-light max-w-2xl">
            Diverse fields of study designed to prepare students for the modern economic landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {facultiesData.map((faculty, i) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-4 md:p-6 border border-slate-200 bg-white hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="p-2 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <faculty.icon size={20} strokeWidth={1.5} />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="text-slate-400" />
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-medium text-slate-900 mb-4 md:mb-6 line-clamp-2">
                {faculty.name.startsWith("Faculty of") ? (
                  <>
                    Faculty of <span className="block">{faculty.name.replace("Faculty of ", "")}</span>
                  </>
                ) : (
                  faculty.name
                )}
              </h3>
              
              <p className="text-slate-500 font-light leading-relaxed mb-6 md:mb-8 min-h-[80px]">
                {faculty.description}
              </p>

              <div className="flex items-center gap-4 md:gap-6 pt-4 md:pt-6 border-t border-slate-100">
                {faculty.stats?.map((stat, idx) => (
                   <div key={idx}>
                      <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                   </div>
                ))}
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: facultiesData.length * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-4 md:p-6 border border-[#FFE000]/30 bg-[#FFE000]/90 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-start text-left cursor-pointer"
          >
            <div className="p-3 rounded-full bg-white mb-4 md:mb-6 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight size={28} strokeWidth={1.5} className="text-slate-900" />
            </div>
            <div className="mt-auto">
              <h3 className="text-lg md:text-xl font-medium text-slate-900 mb-4 md:mb-6 line-clamp-2">
                View All <span className="block">Departments</span>
              </h3>
              <p className="text-slate-900/80 font-light leading-relaxed">
                Explore all our academic programs and departments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
