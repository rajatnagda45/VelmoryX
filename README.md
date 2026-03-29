<div align="center">
  <img src="/public/preview.png" alt="Velmoryx preview" width="100%/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  <h1>🌍 Velmoryx — Cinematic Luxury Travel</h1>
  <p><strong>Beyond Travel. Into Experience.</strong></p>
  <p>
    <a href="#quick-start">Quick Start</a> ·
    <a href="#features">Features</a> ·
    <a href="#architecture">Architecture</a> ·
    <a href="#roadmap">Roadmap</a>
  </p>
</div>

---

## 🚀 Overview

Velmoryx is a **cinematic luxury travel platform** designed to deliver an immersive, high-end digital experience.

Built with cutting-edge frontend animation and full-stack capabilities, Velmoryx transforms traditional travel websites into **interactive visual journeys**.

This is not just a booking platform —  
it’s a **premium storytelling engine for luxury travel**.

---

## ✨ Features

### 🎬 Cinematic Scroll Experience
- Frame-by-frame scroll animations (canvas-based)
- Smooth transitions powered by Lenis + Framer Motion
- Movie-like storytelling experience

### 🏝️ Luxury Destination Showcase
- Premium curated travel packages
- High-end UI with immersive visuals
- Minimal, elegant presentation

### 🌐 Interactive Globe Section
- Background looping cinematic video
- Global exploration feel

### 🧠 Advanced Animation System
- Scroll progress → frame mapping
- Physics-based smooth animation
- High-performance rendering

### 💳 Booking & Payments
- Razorpay integration
- Seamless booking flow
- Secure payment handling

### 📩 Contact & Inquiry System
- React Hook Form + Zod validation
- Structured user inquiries

### 📱 Fully Responsive
- Optimized for mobile & desktop
- Mobile fallback (video instead of frames)

---

## 🖼️ Screenshots

> Add your project screenshots here  
> (Hero Animation, Villa Transition, Globe Section, Booking UI)

---

## ⚡ Quick Start

```bash
git clone https://github.com/your-username/velmoryx.git
cd velmoryx
npm install
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret
```

---

## 🧱 Tech Stack

* **Frontend**: Next.js 14, React, TypeScript  
* **Styling**: Tailwind CSS  
* **Animations**: Framer Motion, Lenis  
* **Backend**: Next.js API Routes  
* **Forms**: React Hook Form + Zod  
* **Payments**: Razorpay  

---

## 🎬 Core Animations

### 1. Hero Scroll (Interior → Pier)
- Canvas-based animation
- Frames loaded from `/public/sequence-1/`
- Scroll-driven cinematic storytelling

### 2. Villa Transition (Exterior → Interior)
- Smooth scroll animation
- Frames from `/public/sequence-2/`

### 3. Globe Animation
- Looping video (`/public/globe-loop.mp4`)
- Background immersive section

---

## 🧠 Architecture

```
User Scroll → Scroll Progress (0–1)
                ↓
        Frame Index Calculation
                ↓
      Canvas Rendering (Frames)
                ↓
     Smooth Animation (Framer Motion)
                ↓
        UI Overlay + Interactions
                ↓
      Booking → API → Razorpay
```

---

## 📁 Folder Structure

```
/public
  /sequence-1
  /sequence-2
  globe-loop.mp4

/app
  layout.tsx
  page.tsx

/components
  HeroScroll.tsx
  VillaTransition.tsx
  DestinationGlobe.tsx
  Navbar.tsx
  Footer.tsx
  DestinationGrid.tsx
  ExperienceSection.tsx
  Testimonials.tsx
  ContactForm.tsx

/hooks
  useImagePreloader.ts

/lib
  razorpay.ts
```

---

## ⚡ Performance Optimization

- Preloaded image frames
- requestAnimationFrame rendering
- DPR-aware canvas scaling
- Lazy loading sections
- Mobile optimization (video fallback)

---

## 🔥 Key Highlights

* Cinematic luxury UI experience  
* Smooth, high-performance animations  
* Premium brand-level design  
* Fully functional booking system  
* Scalable architecture  

---

## 📈 Roadmap

* [ ] AI-based travel recommendations  
* [ ] User dashboard & saved trips  
* [ ] Interactive map integration  
* [ ] Advanced animation engine  
* [ ] Multi-language support  
* [ ] Personalized luxury packages  

---

## 👨‍💻 Author

**Rajat Nagda**

---

## 📜 License

MIT License

---

## 💡 Vision

Velmoryx aims to redefine travel platforms by combining:

- Cinema-level storytelling  
- Luxury brand aesthetics  
- Modern web engineering  

> The goal is simple:  
> Make every user feel like they are already on the journey.

---

## ❤️ Support

If you like this project:

* ⭐ Star the repo  
* 🍴 Fork it  
* 🚀 Share it  

---

**Velmoryx — Beyond Travel. Into Experience.**
