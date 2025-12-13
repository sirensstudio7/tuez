"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AlumniStory {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  year: string;
}

const alumniStories: AlumniStory[] = [
  {
    id: "1",
    name: "Akmal Karimov",
    position: "Chief Financial Officer",
    company: "Uzbekistan National Bank",
    image: "/image1.jpg",
    quote: "TSUE provided me with the knowledge and skills that shaped my career. The faculty's expertise and practical approach to learning prepared me for real-world challenges.",
    year: "Class of 2015"
  },
  {
    id: "2",
    name: "Dilshoda Nurmatova",
    position: "Senior Economist",
    company: "Ministry of Economy",
    image: "/image2.jpg",
    quote: "The university's focus on research and international collaboration opened doors for me. I'm grateful for the opportunities that TSUE provided.",
    year: "Class of 2018"
  },
  {
    id: "3",
    name: "Javohir Ismoilov",
    position: "Investment Director",
    company: "Silk Road Capital",
    image: "/image3.jpg",
    quote: "TSUE's curriculum aligned perfectly with industry needs. The connections I made here continue to support my professional growth.",
    year: "Class of 2016"
  }
];

function AlumniStoriesSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-100 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-4 md:mb-6">
              Alumni Stories
            </h2>
            <p className="text-slate-500 text-base font-light max-w-md">
              Success stories from our graduates who are making an impact in their fields.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[30%_30%_40%] gap-0 lg:min-h-[500px]">
          {alumniStories.map((story, i) => {
            const images = [
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop', // Male picture
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop', // Woman picture
              null // Third card will have blue background
            ];
            const bgImage = images[i % images.length];
            
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 aspect-[3/4] lg:aspect-auto lg:h-full ${i === 2 ? 'bg-blue-500 flex flex-col justify-center items-start p-6' : ''}`}
              >
                {/* Background Image - Only for first two cards */}
                {bgImage && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${bgImage})`
                    }}
                  />
                )}
                
                {/* Text description for blue card */}
                {i === 2 && (
                  <div className="relative z-10 text-white text-left">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider bg-white/20 text-white rounded-full backdrop-blur-sm">
                      Alumni Stories
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">Join Our Alumni Network</h3>
                    <p className="text-base md:text-lg font-light leading-relaxed">
                      Discover inspiring journeys of our graduates who are making a significant impact in their fields. Learn how TSUE has shaped their careers and opened doors to remarkable opportunities.
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Student Stories Section */}
        <div className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-0 lg:min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 aspect-[3/4] lg:aspect-auto lg:h-full bg-yellow-500 flex flex-col justify-center items-start p-6"
            >
              <div className="relative z-10 text-white text-left">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider bg-white/20 text-white rounded-full backdrop-blur-sm">
                  Student Stories
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Student Success Stories</h3>
                <p className="text-base md:text-lg font-light leading-relaxed">
                  Read inspiring stories from our current students who are achieving excellence in academics, research, and leadership. Discover how TSUE empowers students to reach their full potential and make a difference in their communities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 aspect-[3/4] lg:aspect-auto lg:h-full"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: 'url(/image2.jpg)'
                }}
              />
            </motion.div>
          </div>
          <div className="mt-6 flex justify-center">
            <button type="button" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors duration-200 w-fit">
              View more Stories
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AlumniStoriesSection };

