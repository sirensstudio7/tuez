"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Instagram, Twitter, Linkedin, Facebook, Send, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { navigationData } from "@/data/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<'UZ' | 'EN'>('EN');
  
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      const body = document.body;
      const html = document.documentElement;
      
      // Lock body scroll
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position when menu closes
        body.style.position = '';
        body.style.top = '';
        body.style.left = '';
        body.style.right = '';
        body.style.width = '';
        body.style.overflow = '';
        html.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);
  
  const toggleItem = (index: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <>
      <div className="bg-slate-900 text-white text-xs h-10 hidden lg:flex items-center border-b border-white/10">
        <div className="w-full px-6 lg:px-8 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="font-mono opacity-80 flex items-center gap-2 hover:text-[#FF2D73] hover:opacity-100 transition-colors cursor-pointer [&_svg]:hover:stroke-[#FF2D73] [&_svg]:transition-colors">
              <Phone size={12} />
              +998 71 239 01 49
            </span>
            <span className="opacity-80 flex items-center gap-2 hover:text-[#FF2D73] hover:opacity-100 transition-colors cursor-pointer [&_svg]:hover:stroke-[#FF2D73] [&_svg]:transition-colors">
              <Mail size={12} />
              university@tsue.uz
            </span>
          </div>
          <div className="flex gap-4 opacity-70">
            <Link href="#" className="hover:text-white hover:opacity-100 transition-colors"><Instagram size={14} /></Link>
            <Link href="#" className="hover:text-white hover:opacity-100 transition-colors"><Twitter size={14} /></Link>
            <Link href="#" className="hover:text-white hover:opacity-100 transition-colors"><Linkedin size={14} /></Link>
            <Link href="#" className="hover:text-white hover:opacity-100 transition-colors"><Facebook size={14} /></Link>
            <Link href="#" className="hover:text-white hover:opacity-100 transition-colors"><Send size={14} /></Link>
          </div>
        </div>
      </div>
      <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200' 
          : 'bg-white/80 backdrop-blur-md border-slate-100'
      }`}>
      <div className="w-full px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="z-50 flex items-center">
              <Image 
                src="/logo.png" 
                alt="TSUE Logo" 
                width={180}
                height={60}
                className="h-14 w-auto object-contain"
                priority
                unoptimized
                style={{ display: 'block' }}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 relative">
            {navigationData.map((item, index) => (
              <div
                key={item.label}
                className="h-20 flex items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors py-2"
                >
                  {item.label}
                  {item.subItems && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        hoveredIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
              </div>
            ))}
            
            {/* Dropdown Menu - Positioned relative to nav container */}
            <AnimatePresence>
              {hoveredIndex !== null && navigationData[hoveredIndex]?.subItems && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-0 right-0 pt-2"
                  onMouseEnter={() => setHoveredIndex(hoveredIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="bg-white rounded-none shadow-lg border border-slate-200 p-4 w-full flex gap-4 overflow-hidden">
                    {/* Background Image on Left */}
                    <div className="w-[300px] flex-shrink-0 flex flex-col">
                      <div className="w-[300px] h-[300px] relative rounded-none overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ 
                            backgroundImage: `url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=3270&auto=format&fit=crop)`
                          }} 
                        />
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 mt-2">{navigationData[hoveredIndex]?.label}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-2">
                        Termez University of Economics and Services (TUES) is committed to providing excellent higher education to both Uzbek and international students. We offer a variety of undergraduate and graduate programs in economics, medicine, computer science, and other fields, providing our graduates with excellent opportunities in the global labor market.
                      </p>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      {navigationData[hoveredIndex].subItems?.map((subItem, idx) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2.5 h-10 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors line-clamp-1 flex items-center"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Language Switcher */}
            <div className="hidden flex items-center gap-1 border border-slate-200 rounded-lg p-1 bg-slate-50">
              <button
                onClick={() => setLanguage('UZ')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all ${
                  language === 'UZ'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage('EN')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all ${
                  language === 'EN'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
            </div>
            
            <Button variant="primary" className="hidden h-11 px-4 rounded-full bg-blue-600 text-white border-none shadow-md shadow-blue-200/50 hover:bg-blue-700">
                Become a Student
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-500 hover:text-blue-600 transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/0 z-40"
            />
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-x-0 top-20 z-50 border-b border-slate-100 bg-white overflow-hidden flex flex-col shadow-lg max-h-[calc(100vh-5rem)]"
            >
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 max-h-[calc(100vh-9rem)]">
              {navigationData.map((item, index) => {
                const isExpanded = expandedItems.has(index);
                return (
                  <div key={item.label} className="border-b border-slate-100 last:border-b-0">
                    <button
                      onClick={() => item.subItems && toggleItem(index)}
                      className="w-full flex items-center justify-between py-3 text-left group"
                    >
                      <span className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.label}
                      </span>
                      {item.subItems && (
                        <ChevronDown
                          size={18}
                          className={`text-slate-400 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                    {item.subItems && (
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-3 space-y-1.5 border-l-2 border-slate-100 ml-1">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:pl-2 transition-all duration-200"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="hidden border-t border-slate-100 bg-white px-4 sm:px-6 py-4 sticky bottom-0">
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Become a Student</Button>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
      </nav>
    </>
  );
}
