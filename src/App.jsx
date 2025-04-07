import React from 'react'
import { useLayoutEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom' 
import gsap from 'gsap'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Services from './components/Services'


function App() {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline()
      timeline
        .from("#intro-slider", {
          xPercent: "-100",
          duration: 0.8,
          delay: 0.3,
        })
        .from(["#title1", "#title2", "#title3"], {
          opacity: 0,
          y: '+=30',
          stagger: 0.5,
        })
        .to(["#title1", "#title2", "#title3"], {
          opacity: 0,
          y: '+=30',
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#portfolio", {
          opacity: 0,
          duration: 0.5,
        })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="relative" ref={comp}>
        <div
          id="intro-slider"
          className="h-screen pt-20 p-10 bg-green-50 absolute top-0 left-0 font-space-grotesk z-10 w-full flex flex-col gap-10 tracking-tight"
        >
          <h1 className="text-8xl pt-10" id="title1">Software Engineering</h1>
          <h1 className="text-8xl" id="title2">Responsive Design</h1>
          <h1 className="text-9xl" id="title3">Freelancer</h1>
        </div>       
      </div>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  )
}

export default App
