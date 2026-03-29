import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-24 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-background/10 pb-20">
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-serif tracking-[0.4em] mb-4">Velmoryx</h2>
            <p className="font-sans text-sm tracking-[0.1em] opacity-60 leading-relaxed max-w-sm font-light">
              The world's most exclusive travel experiences, curated for those who demand more than luxury — they demand storytelling.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-sans text-[10px] tracking-[0.3em] font-bold uppercase opacity-40">Quick Links</h3>
            <div className="flex flex-col gap-4 font-sans text-xs tracking-[0.2em] font-medium uppercase">
              <Link href="/destinations" className="hover:text-gold transition-colors">Destinations</Link>
              <Link href="/experiences" className="hover:text-gold transition-colors">Experiences</Link>
              <Link href="/journal" className="hover:text-gold transition-colors">Journal</Link>
              <Link href="/concierge" className="hover:text-gold transition-colors">Concierge</Link>
            </div>
          </div>
          <div className="space-y-6">
             <h3 className="font-sans text-[10px] tracking-[0.3em] font-bold uppercase opacity-40">Contact</h3>
             <div className="font-sans text-xs tracking-[0.2em] font-medium opacity-60">
                <p>Private Office, London W1</p>
                <p>velmoryx.travel</p>
                <p>+44 20 7946 0123</p>
             </div>
          </div>
        </div>
        <div className="pt-12 text-center">
            <h1 className="text-[12vw] font-serif tracking-[0.5em] leading-[0.8] opacity-[0.03] select-none pointer-events-none">VELMORYX</h1>
            <div className="flex justify-between items-center text-[10px] tracking-[0.3em] font-bold uppercase opacity-30">
               <p>© 2026 VELMORYX. ALL RIGHTS RESERVED.</p>
               <p>PRIVACY / TERMS OF SERVICE</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
