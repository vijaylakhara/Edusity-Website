import React, { useState } from 'react'
import { Navbar } from './components/Navabar/Navbar'
import { Heros } from './components/Hero/Heros'
import { Programs } from './components/Programs/Programs'
import { Title } from './components/Title/Title'
import { About } from './components/About/About'
import { Campus } from './components/Campus/Campus'
import { Testimonial } from './components/Testimonial/Testimonial' 
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { VideoPlayer } from './components/videoPlayer/VideoPlayer'

export const App = () => {
  const [playState,setPlayState]=useState(false)

  return (
    <div>
     <Navbar/>
     <Heros/>
     <div className="container">
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
     <Programs/>
     <About setPlayState={setPlayState}/>
     <Title subTitle='Gallery' title='Campus Photos'/>
     <Campus/>
     <Title subTitle='TESTIMONIALS' title='What Student Says'/>
     <Testimonial/>
     <Title subTitle='Contact Us' title='Get in Touch'/>
     <Contact/>
     <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}
