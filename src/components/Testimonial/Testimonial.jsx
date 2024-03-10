import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
export const Testimonial = () => {

    const slider =useRef();
    let tx=0;
    const slideForward=()=>{
     if(tx>-50){
        tx-=25
     }
     slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx<0){
            tx+=25
         }
         slider.current.style.transform=`translateX(${tx}%)`
    }
  return ( 
<div className="testimonial">
    <img src={next_icon} onClick={slideForward} alt="" className='next-btn' />
    <img src={back_icon}onClick={slideBackward} alt="" className='back-btn' />
    <div className="slider">
     <ul ref={slider}>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_1} alt="" />
                    <div><h3>William Jackson 1</h3>
                    <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Choosing to puruse my degree at Edusity was one of the best decisions I've ever made. The Supportive community ,stat-of-the-art facilities, and commitment to academic excellence have exceeded my expectations.</p>
            </div>
        </li>
        <li><div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="" />
                    <div><h3>William Jackson 2</h3>
                    <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Choosing to puruse my degree at Edusity was one of the best decisions I've ever made. The Supportive community ,stat-of-the-art facilities, and commitment to academic excellence have exceeded my expectations.</p>
            </div></li>
        <li><div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="" />
                    <div><h3>William Jackson 3</h3>
                    <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Choosing to puruse my degree at Edusity was one of the best decisions I've ever made. The Supportive community ,stat-of-the-art facilities, and commitment to academic excellence have exceeded my expectations.</p>
            </div></li>
        <li><div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="" />
                    <div><h3>William Jackson 4</h3>
                    <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Choosing to puruse my degree at Edusity was one of the best decisions I've ever made. The Supportive community ,stat-of-the-art facilities, and commitment to academic excellence have exceeded my expectations.</p>
            </div></li>
     </ul>
    </div>
</div>
  )
}
