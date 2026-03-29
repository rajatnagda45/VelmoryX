'use client'

import { useRef, useEffect, useState, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const FRAME_COUNT = 258

export default function HeroScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const currentFrame = useRef(0)
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  // ─── Draw a single frame ──────────────────────────────────────
  const paint = useCallback((idx: number) => {
    const ctx = ctxRef.current
    const canvas = canvasRef.current
    if (!ctx || !canvas) return

    const i = Math.max(0, Math.min(idx, FRAME_COUNT - 1))
    const img = imagesRef.current[i]
    if (!img || !img.complete || !img.naturalWidth) return

    const cw = canvas.width
    const ch = canvas.height

    // Cover-fit with slightly more zoom (overscan) to ensure corner watermarks are fully outside the viewport
    const overscan = 1.18; 
    const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight) * overscan
    const dw = img.naturalWidth * s
    const dh = img.naturalHeight * s

    ctx.clearRect(0, 0, cw, ch)
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh)
    currentFrame.current = idx
  }, [])

  // ─── Size the canvas to viewport ──────────────────────────────
  const sizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const w = window.innerWidth
    const h = window.innerHeight
    canvas.width = w
    canvas.height = h
    // Also set CSS attributes explicitly
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"
    paint(currentFrame.current)
  }, [paint])

  // ─── Preload all frames ────────────────────────────────────────
  useEffect(() => {
    let n = 0
    const arr = new Array<HTMLImageElement>(FRAME_COUNT)
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()
      img.src = `/sequence-1/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`
      img.onload = () => {
        n++
        setProgress(Math.round((n / FRAME_COUNT) * 100))
        if (n >= FRAME_COUNT) setLoaded(true)
      }
      img.onerror = () => {
        n++
        if (n >= FRAME_COUNT) setLoaded(true)
      }
      arr[i] = img
    }
    imagesRef.current = arr
  }, [])

  // ─── Master Cinematic Timeline ──────────────────────────────────
  useEffect(() => {
    if (!loaded) return
    const wrapper = wrapperRef.current
    const canvas = canvasRef.current
    if (!wrapper || !canvas) return

    ctxRef.current = canvas.getContext("2d")
    sizeCanvas()

    const proxy = { frame: 0 }
    
    // Master timeline for the entire pinned experience
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=" + window.innerHeight * 5, // 5vh for a cinematic length
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    })

    // 0. Initial Hero Title (VELMORYX) - Fades out immediately as scroll begins
    const initialTitle = wrapper.querySelector("#hero-main-title")
    const initialSubtitle = wrapper.querySelector("#hero-main-subtitle")
    if (initialTitle && initialSubtitle) {
      masterTl.to(initialTitle, { opacity: 0, y: -100, filter: "blur(20px)", duration: 0.15 }, 0)
              .to(initialSubtitle, { opacity: 0, y: -50, filter: "blur(10px)", duration: 0.1 }, 0)
    }

    // 1. Frame Animation (using power1.inOut to speed up static sequences)
    masterTl.to(proxy, {
      frame: FRAME_COUNT - 1,
      ease: "power1.inOut",
      duration: 1, 
      onUpdate: () => paint(Math.round(proxy.frame)),
    }, 0)

    // 2. Slogan Sequences (Precise offsets on the master timeline)
    const s1 = wrapper.querySelector("#slogan-1")
    const s2 = wrapper.querySelector("#slogan-2")
    const s3 = wrapper.querySelector("#slogan-3")
    const s4 = wrapper.querySelector("#slogan-4")

    const animateSlogan = (el: Element | null, start: number, end: number) => {
      if (!el) return
      const dur = (end - start) * 0.4
      masterTl.fromTo(el, { opacity: 0, y: 100, filter: "blur(20px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: dur }, start)
              .to(el, { opacity: 0, y: -100, filter: "blur(20px)", duration: dur }, end - dur)
    }

    animateSlogan(s1, 0.20, 0.35) // Delayed start to give the title space
    animateSlogan(s2, 0.40, 0.55)
    animateSlogan(s3, 0.60, 0.75)
    animateSlogan(s4, 0.80, 0.95)

    window.addEventListener("resize", sizeCanvas)
    const t = setTimeout(() => ScrollTrigger.refresh(true), 500)

    return () => {
      clearTimeout(t)
      window.removeEventListener("resize", sizeCanvas)
      masterTl.kill()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [loaded, paint, sizeCanvas])

  // ─── Render ─────────────────────────────────────────────────────
  return (
    <>
      <div ref={wrapperRef} style={{ position: "relative", width: "100%", height: "100vh", background: "#000", overflow: "hidden" }}>
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100vw", height: "100vh", position: "relative", zIndex: 1 }}
        />

        {/* Cinematic Overlays */}
        <div style={{ position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none" }}>


          {/* Slogans Container (Explicitly hidden by default) */}
          <div id="slogan-1" style={{ ...CAPTION_STYLE, zIndex: 20 }}>
            <h3 className={SLOGAN_CLASS}>Explore <br/> Beautiful Places</h3>
            <button className={BUTTON_CLASS}>View More</button>
          </div>
          <div id="slogan-2" style={{ ...CAPTION_STYLE, zIndex: 20 }}>
            <h3 className={SLOGAN_CLASS}>You deserve <br/> it</h3>
            <button className={BUTTON_CLASS}>Schedule Now</button>
          </div>
          <div id="slogan-3" style={{ ...CAPTION_STYLE, zIndex: 20 }}>
            <h3 className={SLOGAN_CLASS}>We have <br/> financing plans</h3>
            <button className={BUTTON_CLASS}>Explore Now</button>
          </div>
          <div id="slogan-4" style={{ ...CAPTION_STYLE, zIndex: 20 }}>
            <h3 className={SLOGAN_CLASS}>Wait is <br/> over</h3>
            <button className={BUTTON_CLASS}>Contact Us</button>
          </div>

          {/* Aggressive Corner & Bottom Vignette to hide residual watermarks */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 5,
            background: "radial-gradient(circle at bottom left, rgba(0,0,0,1) 0%, transparent 30%), radial-gradient(circle at bottom right, rgba(0,0,0,1) 0%, transparent 30%), linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 50%, rgba(0,0,0,0.8) 100%)",
          }} />

          {/* Main Hero Content (Cinematic Intro) */}
          <div id="hero-main-title-container" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 100, textAlign: "center", pointerEvents: "none" }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.4, y: 0 }}
                transition={{ delay: 0.5, duration: 2 }}
                className="mb-6"
            >
                <span className="text-[9px] text-white tracking-[1.2em] font-light uppercase">Presenting</span>
            </motion.div>
            
            <motion.h1
                id="hero-main-title"
                initial={{ opacity: 0, letterSpacing: "0.8em", scale: 0.9, filter: "blur(20px)" }}
                animate={{ opacity: 1, letterSpacing: "0.25em", scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-7xl md:text-[12vw] font-serif text-white uppercase px-4 max-w-full leading-none"
                style={{ textShadow: "0 0 80px rgba(255,255,255,0.2)" }}
            >
                Velmoryx
            </motion.h1>
            
            <motion.div id="hero-main-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.6, y: 0 }} transition={{ delay: 2, duration: 2 }} className="mt-12 flex flex-col items-center">
                <div style={{ width: 60, height: 1, background: "rgba(255,255,255,0.3)", marginBottom: 20 }} />
                <span className="text-[11px] text-white tracking-[0.9em] font-light uppercase">Excellence in Motion</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Luxury Loader */}
      {!loaded && (
        <div style={{
          position: "fixed", inset: 0, background: "#0a0a0a", zIndex: 9999,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        }}>
          <h2 className="text-white text-4xl font-serif tracking-[0.5em] mb-8">VELMORYX</h2>
          <div style={{ width: 240, height: 1, background: "rgba(255,255,255,0.05)", position: "relative", marginBottom: 20 }}>
            <div style={{ position: "absolute", height: "100%", width: `${progress}%`, background: "#fff", transition: "width 0.3s ease-out" }} />
          </div>
          <p className="text-[9px] text-white/30 tracking-[0.8em] uppercase">Initialising Sequence {progress}%</p>
        </div>
      )}
    </>
  )
}

// ─── Styles & Constants ───────────────────────────────────────────

const CAPTION_STYLE: React.CSSProperties = {
  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
  textAlign: "center", width: "100%", opacity: 0, padding: "0 24px"
}

const SLOGAN_CLASS = "text-white text-4xl md:text-[9vw] font-sans font-black mb-12 leading-[0.85] tracking-tighter uppercase"
const BUTTON_CLASS = "px-10 md:px-20 py-4 md:py-5 border border-white/50 text-white text-[8px] md:text-[10px] font-bold tracking-[0.6em] uppercase rounded-full hover:bg-white hover:text-black transition-all duration-700 pointer-events-auto backdrop-blur-xl bg-white/5"
