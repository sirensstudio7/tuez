"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Instagram, Twitter, Linkedin, Facebook, Send, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { navigationData } from "@/data/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<'UZ' | 'EN' | 'RU'>('EN');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  
  // Subtitle texts for each menu item
  const menuSubtitles: Record<string, string> = {
    "University": "Currently, the university has 24 Bachelor's and 13 master's degrees. An electronic IRC is formed on the necessary books on the education of students. Applicants may be aware of the information on the admission process to the University remotely.",
    "Education": "Our comprehensive educational programs prepare students for success in the modern economy. We offer diverse fields of study with state-of-the-art facilities and experienced faculty members.",
    "Science": "TSUE is committed to advancing scientific research and innovation. Our research centers and academic programs contribute to sustainable economic development and global knowledge.",
    "Internationalization": "We foster global partnerships and international collaboration. Our exchange programs and joint initiatives provide students with worldwide opportunities and perspectives.",
    "Student Life": "Experience a vibrant campus community with diverse activities, clubs, and events. Our student support services ensure a well-rounded university experience.",
    "Admission 2025": "Join TSUE for the academic year 2025. We welcome applications from qualified students seeking excellence in economics, business, and related fields.",
    "Information Services": "Access our digital platforms and services for students, faculty, and staff. Manage your academic journey through our integrated information systems.",
    "Vacancies": "Explore career opportunities at TSUE. We seek talented individuals to join our academic and administrative teams in building the future of education."
  };
  
  // Handle scroll for navbar opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className="bg-slate-100 text-slate-700 text-xs h-10 hidden lg:flex items-center border-b border-slate-200">
        <div className="w-full px-6 lg:px-8 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="font-mono text-slate-600 flex items-center gap-2 hover:text-[#FF2D73] transition-colors cursor-pointer [&_svg]:hover:stroke-[#FF2D73] [&_svg]:transition-colors">
              <Phone size={12} />
              +998 95 412 07 07, / +99890 074 74 74
            </span>
            <span className="text-slate-600 flex items-center gap-2 hover:text-[#FF2D73] transition-colors cursor-pointer [&_svg]:hover:stroke-[#FF2D73] [&_svg]:transition-colors">
              <Mail size={12} />
              university@tues.uz
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-slate-600 hover:text-[#FF2D73] transition-colors"><Instagram size={14} /></Link>
            <Link href="#" className="text-slate-600 hover:text-[#FF2D73] transition-colors"><Twitter size={14} /></Link>
            <Link href="#" className="text-slate-600 hover:text-[#FF2D73] transition-colors"><Linkedin size={14} /></Link>
            <Link href="#" className="text-slate-600 hover:text-[#FF2D73] transition-colors"><Facebook size={14} /></Link>
            <Link href="#" className="text-slate-600 hover:text-[#FF2D73] transition-colors"><Send size={14} /></Link>
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
          <Link href="/" className="flex items-center gap-[12px] group transition-colors relative overflow-hidden">
            <div className={`z-50 flex items-center rounded-lg py-2 backdrop-blur-md transition-all duration-300 ${
              scrolled ? 'bg-white/0' : 'bg-white/0'
            }`}>
              <Image 
                src="/logo-new.png" 
                alt="TSUE Logo" 
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
                priority
                unoptimized
                style={{ display: 'block' }}
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-xs font-medium text-black w-[160px] leading-relaxed cursor-pointer group-hover:text-blue-600"
            >
              Termez University of <span className="text-black group-hover:text-blue-600">Economics and Service</span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden min-[1400px]:flex items-center gap-4 relative">
            {navigationData.map((item, index) => (
              <div
                key={item.label}
                className="h-20 flex items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-[13px] font-medium text-slate-600 hover:text-blue-600 transition-colors py-2 whitespace-nowrap"
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
                  className="absolute top-full left-0 right-0 pt-4"
                  onMouseEnter={() => setHoveredIndex(hoveredIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="bg-white rounded-none shadow-lg border border-slate-200 p-4 w-full flex gap-6 overflow-hidden">
                    {/* Background Image on Left */}
                    <div className="w-[300px] flex-shrink-0 flex flex-col p-4 bg-slate-50">
                      <div className="w-[300px] h-[300px] relative rounded-none overflow-hidden hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ 
                            backgroundImage: `url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=3270&auto=format&fit=crop)`
                          }} 
                        />
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 mt-2">{navigationData[hoveredIndex]?.label}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-2">
                        {hoveredIndex !== null && menuSubtitles[navigationData[hoveredIndex]?.label] || ""}
                      </p>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="flex-1 grid grid-cols-2 gap-x-0 gap-y-2 auto-rows-[36px]">
                      {navigationData[hoveredIndex].subItems?.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-1.5 h-9 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors line-clamp-1 flex items-center gap-2"
                          >
                            {Icon && <Icon size={16} className="flex-shrink-0" />}
                            <span>{subItem.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <Button variant="primary" className="hidden h-11 px-4 rounded-full bg-blue-600 text-white border-none shadow-md shadow-blue-200/50 hover:bg-blue-700">
                Become a Student
            </Button>
          </div>

          {/* Separator Line - Desktop only */}
          <div className="hidden min-[1400px]:block w-px h-8 bg-slate-200 ml-4"></div>

          {/* Desktop View - Separate items */}
          <div className="hidden min-[1400px]:flex items-center">
            {/* Language Switcher - Desktop */}
            <div className="relative ml-4">
              <button
                type="button"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors border border-slate-200 rounded-lg bg-white hover:bg-slate-50"
              >
                <span className="text-base">
                  {language === 'UZ' ? '🇺🇿' : language === 'EN' ? '🇬🇧' : '🇷🇺'}
                </span>
                <span>{language}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-50"
                    onMouseLeave={() => setIsLanguageOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('UZ');
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors ${
                        language === 'UZ'
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-base">🇺🇿</span>
                      <span>Uz</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('EN');
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors border-t border-slate-100 ${
                        language === 'EN'
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-base">🇬🇧</span>
                      <span>En</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('RU');
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors border-t border-slate-100 ${
                        language === 'RU'
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-base">🇷🇺</span>
                      <span>Ru</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* EduHub Button - Desktop */}
            <Button className="h-11 px-4 sm:px-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap shadow-none hover:shadow-none hover:translate-y-0 ml-2 relative overflow-hidden">
              <motion.div
                initial={{ x: -20, y: 0, opacity: 0.24 }}
                animate={{ x: 120, y: 0, opacity: 0.24 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "linear"
                }}
                className="absolute pointer-events-none"
              >
                <Rocket size={32} className="text-white/24 fill-white/24" />
              </motion.div>
              <span className="relative z-10">EduHub</span>
            </Button>
          </div>

          {/* Mobile/Tablet View - Grouped items */}
          <div className="flex min-[1400px]:hidden items-center gap-2">
            {/* Language Switcher - Mobile/Tablet */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors border border-slate-200 rounded-lg bg-white hover:bg-slate-50"
              >
                <span className="text-base">
                  {language === 'UZ' ? '🇺🇿' : language === 'EN' ? '🇬🇧' : '🇷🇺'}
                </span>
                <span className="hidden sm:inline">{language}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-50"
                    onMouseLeave={() => setIsLanguageOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('UZ');
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors ${
                        language === 'UZ'
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-base">🇺🇿</span>
                      <span>Uz</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('EN');
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors border-t border-slate-100 ${
                        language === 'EN'
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-base">🇬🇧</span>
                      <span>En</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('RU');
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors border-t border-slate-100 ${
                        language === 'RU'
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-base">🇷🇺</span>
                      <span>Ru</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* EduHub Button - Mobile/Tablet */}
            <Button className="h-11 px-4 sm:px-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap shadow-none hover:shadow-none hover:translate-y-0 relative overflow-hidden">
              <motion.div
                initial={{ x: -20, y: 0, opacity: 0.24 }}
                animate={{ x: 120, y: 0, opacity: 0.24 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "linear"
                }}
                className="absolute pointer-events-none"
              >
                <Rocket size={32} className="text-white/24 fill-white/24" />
              </motion.div>
              <span className="relative z-10">EduHub</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
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
              className="min-[1400px]:hidden fixed inset-0 bg-black/0 z-40"
            />
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="min-[1400px]:hidden fixed inset-x-0 top-20 z-50 border-b border-slate-100 bg-white overflow-hidden flex flex-col shadow-lg max-h-[calc(100vh-5rem)]"
            >
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 max-h-[calc(100vh-9rem)]">
              {navigationData.map((item, index) => {
                const isExpanded = expandedItems.has(index);
                return (
                  <div key={item.label} className="border-b border-slate-100 last:border-b-0">
                    <button
                      type="button"
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
