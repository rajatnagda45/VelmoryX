'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const destinations = [
  {
    id: "maldives",
    title: "Maldives Private Villa",
    price: "₹4,50,000",
    description: "Overwater luxury escape",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: "swiss",
    title: "Swiss Alps Retreat",
    price: "₹3,80,000",
    description: "Snow luxury experience",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1000",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "santorini",
    title: "Santorini Escape",
    price: "₹3,20,000",
    description: "Cliffside elegance",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "dubai",
    title: "Dubai Ultra Luxury",
    price: "₹5,00,000",
    description: "Desert opulence",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: "bali",
    title: "Bali Wellness",
    price: "₹2,50,000",
    description: "Spiritual rejuvenation",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000",
    span: "md:col-span-1 md:row-span-1"
  }
]



export default function DestinationGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h6 className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold mb-4 italic">Exclusive access to paradise</h6>
            <h2 className="text-4xl md:text-6xl font-serif tracking-[0.2em] uppercase leading-tight">
              WORLD'S FINEST <br /> DESTINATIONS
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-bold text-black/40 hover:text-black transition-colors group">
            Explore All <span><ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" /></span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[120vh]">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={cn("relative group overflow-hidden bg-black", dest.span)}
            >
              <Image 
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000 saturate-50 group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-gold text-[8px] tracking-[0.4em] uppercase mb-2">Starts at {dest.price}</p>
                <h3 className="text-white text-xl md:text-2xl font-serif tracking-[0.1em] mb-2">{dest.title}</h3>
                <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-6">{dest.description}</p>
                <div className="w-0 group-hover:w-full h-[1px] bg-white/20 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

