"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, BookOpen, Globe, Laptop, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Global Recognition",
    description: "Ranked among the top economic universities in Central Asia.",
    icon: Globe,
    className: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-blue-600 text-white shadow-xl shadow-blue-200/50",
    iconBg: "bg-white/20 text-white",
  },
  {
    title: "Digital Campus",
    description: "State-of-the-art labs and AI-driven learning platforms.",
    icon: Laptop,
    className: "col-span-1 bg-white border-slate-100 shadow-lg shadow-slate-100/50",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    title: "Research Hub",
    description: "Leading research in sustainable economics.",
    icon: BookOpen,
    className: "col-span-1 bg-white border-slate-100 shadow-lg shadow-slate-100/50",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    title: "25,000+ Students",
    description: "A vibrant community of future leaders.",
    icon: Users,
    className: "col-span-1 md:col-span-2 bg-white border-slate-100 shadow-lg shadow-slate-100/50",
    iconBg: "bg-blue-50 text-blue-600",
  },
];

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className={cn(
            "group relative overflow-hidden border p-4 hover:scale-[1.02] transition-all duration-300",
            feature.className
          )}
        >
          <div className="relative z-10 flex flex-col h-full justify-between gap-4">
            <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors", feature.iconBg)}>
              <feature.icon size={24} />
            </div>
            <div>
              <h3 className={cn("mb-2 text-xl font-medium", feature.title === "Global Recognition" ? "text-white" : "text-slate-900")}>
                {feature.title}
              </h3>
              <p className={cn("font-light leading-relaxed", feature.title === "Global Recognition" ? "text-white/80" : "text-slate-500")}>
                {feature.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
