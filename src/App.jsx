import React from 'react'
import {useLayoutEffect, useRef} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'; 
import gsap from 'gsap'
import Home from './components/Home';

function App() {
  const comp = useRef(null)
  const navigate = useNavigate();

  useLayoutEffect( () => {
    let ctx = gsap.context( () => {
      const timeline = gsap.timeline()
      timeline.from("#intro-slider",{
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3
      }).from(['#title1', '#title2', '#title3'], {
        opacity: 0,
        y: '+=30',
        stagger: '0.5',
      }).to(['#title1', '#title2', '#title3'], {
        opacity: 0,
        y: '+=30',
        delay: 0.3,
        stagger: 0.5
      }).to('#intro-slider', {
        xPercent: '-100',
        duration: 1.3,
      }).from('#portfolio', {
        opacity: 0,
        duration: '0.5'
      });
      // setTimeout(() => {
      //   navigate('/'); 
      // }, 1000); 
    }, comp)
    return () => ctx.revert()
  },[])
  return (
    <>
    <div className='relative' ref={comp}>
      <div id="intro-slider" className='h-screen pt-20 p-10 bg-green-50 absolute top-0 left-0 font-space-grotesk z-10 w-full flex flex-col gap-10 tracking-tight'>
        <h1 className='text-8xl' id='title1'>Software Engineering</h1>
        <h1 className='text-8xl' id='title2'>Responsive Design</h1>
        <h1 className='text-9xl'id='title3'>Freelancer</h1>
        </div>
      <div className='h-screen flex justify-center items-center bg-gray-50 text-white' id='portfolio'>
        {/* <h1 className='text-9xl text-gray-950 font-bold font-space-grotesk' id='portfolio'>
          OVO Solutions
        </h1> */}
        <Home/>
      </div>
      {/* <Home/> */}
      </div>
      {/* <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes> */}
    </>
  )
}

export default App
 