'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alexander von Bismarck",
    role: "Private Investor",
    quote: "Velmoryx transformed our family escape into a legacy experience. The attention to detail in the Maldives was beyond any Four Seasons we've visited.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000"
  },
  {
    id: 2,
    name: "Isabella Moretti",
    role: "Fashion Consultant",
    quote: "The Swiss Alps retreat they curated felt like a private kingdom. Every breath was cinematic, every meal a masterpiece by their on-site michelin chef.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000"
  },
  {
    id: 3,
    name: "Julian Chen",
    role: "Tech Entrepreneur",
    quote: "Seamless logistics, exceptional privacy. Their private jet concierge saved us 8 hours of travel time, making our business-to-vacation transition effortless.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000"
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 relative h-[500px] w-full overflow-hidden">
             <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0"
                >
                   <img 
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover grayscale brightness-75 filter blur-[0.5px]"
                   />
                   <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
                </motion.div>
             </AnimatePresence>
             
             {/* Dynamic controls */}
             <div className="absolute bottom-12 right-12 flex gap-4 z-20">
                <button onClick={prev} className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-gold hover:border-gold transition-all duration-300">
                   <ChevronLeft size={20} />
                </button>
                <button onClick={next} className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-gold hover:border-gold transition-all duration-300">
                   <ChevronRight size={20} />
                </button>
             </div>
          </div>

          <div className="md:w-1/2 space-y-12">
             <Quote className="text-gold w-16 h-16 opacity-30" />
             <AnimatePresence mode="wait">
                <motion.div
                   key={current}
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -50 }}
                   transition={{ duration: 0.8, ease: "easeInOut" }}
                   className="space-y-8"
                >
                   <p className="text-2xl md:text-3xl font-serif leading-relaxed italic text-black/80">
                      "{testimonials[current].quote}"
                   </p>
                   <div>
                      <h4 className="text-[12px] tracking-[0.4em] font-bold uppercase text-black">{testimonials[current].name}</h4>
                      <p className="text-[10px] tracking-[0.3em] font-light uppercase opacity-40 mt-2">{testimonials[current].role}</p>
                   </div>
                </motion.div>
             </AnimatePresence>
             
             <div className="flex gap-2">
                {testimonials.map((_, i) => (
                   <div 
                    key={i} 
                    className={`h-[1px] transition-all duration-500 ${i === current ? 'w-12 bg-gold' : 'w-6 bg-black/10'}`} 
                   />
                ))}
             </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <h1 className="absolute -bottom-24 -left-24 text-[30vw] font-serif text-black/5 leading-none pointer-events-none select-none">
         MUSE
      </h1>
    </section>
  )
}
