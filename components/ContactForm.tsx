'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Send, MapPin, Phone, Mail } from "lucide-react"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <section className="py-32 bg-foreground text-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-24">
          <div className="md:w-1/3 space-y-16">
            <div>
               <h2 className="text-4xl md:text-5xl font-serif tracking-[0.2em] uppercase leading-tight mb-8">
                 SAY <br /> HELLO
               </h2>
               <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 font-light max-w-xs leading-relaxed">
                 Our private concierge team is available 24/7 to begin crafting your next chapter.
               </p>
            </div>
            
            <div className="space-y-12">
               <ContactInfo icon={<MapPin size={16} />} title="Headquarters" info="74 St. James's St, London" />
               <ContactInfo icon={<Phone size={16} />} title="Global Hotdesk" info="+44 20 7946 0123" />
               <ContactInfo icon={<Mail size={16} />} title="Enquiries" info="private@velmoryx.travel" />
            </div>
          </div>

          <div className="md:w-2/3 glass-panel p-10 md:p-16 border-background/5">
             <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-2 relative group">
                      <label className="text-[10px] tracking-[0.4em] uppercase opacity-40 group-focus-within:opacity-100 transition-opacity">Name</label>
                      <input 
                        {...register("name")}
                        className="w-full bg-transparent border-b border-background/10 py-4 focus:border-gold outline-none transition-all placeholder:text-background/10 text-xl font-serif tracking-widest uppercase"
                        placeholder="ALEXANDER..."
                      />
                      {errors.name && <p className="text-red-500 text-[8px] tracking-[0.3em] uppercase pt-2">{errors.name.message}</p>}
                   </div>
                   <div className="space-y-2 relative group">
                      <label className="text-[10px] tracking-[0.4em] uppercase opacity-40 group-focus-within:opacity-100 transition-opacity">Email</label>
                      <input 
                        {...register("email")}
                        className="w-full bg-transparent border-b border-background/10 py-4 focus:border-gold outline-none transition-all placeholder:text-background/10 text-xl font-serif tracking-widest uppercase"
                        placeholder="PRIVATE@DOMAIN..."
                      />
                      {errors.email && <p className="text-red-500 text-[8px] tracking-[0.3em] uppercase pt-2">{errors.email.message}</p>}
                   </div>
                </div>
                
                <div className="space-y-2 relative group">
                   <label className="text-[10px] tracking-[0.4em] uppercase opacity-40 group-focus-within:opacity-100 transition-opacity">Story</label>
                   <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full bg-transparent border-b border-background/10 py-4 focus:border-gold outline-none transition-all placeholder:text-background/10 text-xl font-serif tracking-widest uppercase resize-none"
                    placeholder="TELL US ABOUT YOUR VISION..."
                   />
                   {errors.message && <p className="text-red-500 text-[8px] tracking-[0.3em] uppercase pt-2">{errors.message.message}</p>}
                </div>
                
                <div className="flex justify-end pt-12">
                   <button 
                    disabled={isSubmitting}
                    className="flex items-center gap-6 px-16 py-6 border border-gold text-gold text-[10px] tracking-[0.5em] uppercase hover:bg-gold hover:text-black transition-all duration-700 disabled:opacity-50"
                   >
                     {isSubmitting ? "SENDING..." : "DISPATCH"} <Send size={14} />
                   </button>
                </div>
             </form>
          </div>
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold opacity-5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
    </section>
  )
}

function ContactInfo({ icon, title, info }: { icon: any, title: string, info: string }) {
    return (
        <div className="flex gap-6 items-start">
            <div className="text-gold mt-1">{icon}</div>
            <div>
               <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase opacity-30 mb-2">{title}</h4>
               <p className="text-sm tracking-[0.2em] font-light font-serif">{info}</p>
            </div>
        </div>
    )
}
