import HeroScroll from "@/components/HeroScroll";
import DestinationGrid from "@/components/DestinationGrid";
import ExperienceSection from "@/components/ExperienceSection";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="relative overflow-hidden w-full">
      <HeroScroll />
      
      <div className="relative z-10 -mt-[1px]">
        <DestinationGrid />
        
        <VideoSpacer />
        
        <ExperienceSection />
        
        <Testimonials />
        
        <ContactForm />
      </div>
    </div>
  );
}

function VideoSpacer() {
  return (
    <section className="h-screen w-full relative overflow-hidden bg-black flex flex-col items-center justify-center">
       {/* High-fidelity video background / fallback */}
       <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534430480872-3498386e7a56?q=80&w=2000"
            className="w-full h-full object-cover opacity-50 grayscale contrast-125 saturate-50"
            alt="World Explorer"
          />
       </div>
       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
       
       <div className="relative z-10 text-center px-6">
          <h6 className="text-gold text-[10px] tracking-[0.6em] uppercase font-bold mb-12">Beyond Boundaries</h6>
          <h2 className="text-5xl md:text-[8vw] font-serif tracking-[0.3em] font-light leading-[1.1] text-white">
             EXPLORE THE <br /> WORLD
          </h2>
          <div className="mt-16 w-[1px] h-32 bg-gold/30 mx-auto" />
       </div>
    </section>
  )
}
