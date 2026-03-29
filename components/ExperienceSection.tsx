'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Plane, Ship, Camera, Star } from "lucide-react"

const experiences = [
  {
    id: "private-jets",
    title: "PRIVATE JETS",
    description: "Global reach with personalized service.",
    icon: <Plane className="w-10 h-10 mb-8 font-light text-gold" />,
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000"
  },
  {
    id: "yachts",
    title: "YACHT CHARTERS",
    description: "Bespoke sea exploration at its finest.",
    icon: <Ship className="w-10 h-10 mb-8 font-light text-gold" />,
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1000"
  },
  {
    id: "safari",
    title: "SAFARI ADVENTURES",
    description: "Immersive nature in raw luxury.",
    icon: <Camera className="w-10 h-10 mb-8 font-light text-gold" />,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000"
  },
  {
    id: "wellness",
    title: "WELLNESS RETREATS",
    description: "Rejuvenation for soul and mind.",
    icon: <Star className="w-10 h-10 mb-8 font-light text-gold" />,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68753?q=80&w=1000"
  }
]

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={containerRef} className="py-32 bg-[#0c0c0c] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif tracking-[0.3em] uppercase mb-8 leading-tight">THE VELMORYX <br /> SIGNATURES</h2>
          <p className="text-xs tracking-[0.2em] font-light opacity-50 uppercase leading-loose font-sans">Our specialized concierges redefine what it means to travel beyond limits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 overflow-hidden">
          {experiences.map((exp, i) => (
             <ExperienceCard key={exp.id} exp={exp} index={i} scrollYProgress={scrollYProgress}/>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, index, scrollYProgress }: { exp: any, index: number, scrollYProgress: any }) {
    const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -100 : 100])
    
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative h-[80vh] md:h-[60vh] overflow-hidden flex flex-col items-center justify-center text-center p-8 bg-black/20"
        >
            <div className="absolute inset-0 z-0">
                <img 
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-40 group-hover:opacity-60 saturate-0 group-hover:saturate-100 grayscale group-hover:grayscale-0"
                />
            </div>
            
            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-8 flex flex-col items-center">
                {exp.icon}
                <hr className="w-12 h-[1px] bg-gold border-none mb-4 group-hover:w-24 transition-all duration-700 mx-auto" />
                <h3 className="text-2xl font-serif tracking-[0.2em] mb-4 text-white uppercase">{exp.title}</h3>
                <p className="text-[10px] tracking-[0.2em] uppercase font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gold">{exp.description}</p>
            </div>
            
            <button className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-[8px] tracking-[0.4em] uppercase py-3 border-b border-gold hover:text-gold">
                View service
            </button>
        </motion.div>
    )
}
