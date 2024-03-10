import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
export const About = ({setPlayState}) => {
  return (
   <div className='about'>
    <div className="about-left">
        <img className ='about-img' src={about_img} alt="" />
        <img className ='play-icon' src={play_icon} alt="" onClick={()=>{setPlayState(true)}} />
    </div>
    <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nurturing Tomorrow's Leaders Today</h2>
      <p>Embark on a transformative eductional journey with our university's comprehensive eduction programs.Our curring-edge curriculum is designed to enpower students with the knowledge,skills and experiences needed to excel in the dynamic field of eduction.</p>
      <p>with a focus on innovation, hands-on learning, and personalized mentorship,our programs prepare aspiring educator to make a meaningful impact in classrooms,schools, and communication</p>
      <p>Wheater you aspire to become a teacher, administrator, counselor ,or eductional leader,our diverse range of programs offers the perfect pathway to achive your goals and unlocks your full potential       shaping the future of eduction.</p>
    </div>

   </div>
  )
}
