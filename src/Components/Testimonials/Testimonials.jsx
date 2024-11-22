import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`        
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} /> 

        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Emily Williams</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Deciding to enroll in Edusity for my degree was undoubtedly one of the finest choices I've ever made. The encouraging environment, modern facilities, and dedication to academic standards have surpassed what I initially anticipated.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Reehana</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Opting to pursue my degree at Edusity stands out as one of the most rewarding choices I've made. The nurturing community, cutting-edge facilities, and dedication to academic excellence have gone above and beyond what I had imagined.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Jack Deniels</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Deciding to pursue my degree at Edusity has proven to be an exceptionally fulfilling decision. The supportive community, advanced facilities, and commitment to academic excellence have exceeded my expectations by far.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
