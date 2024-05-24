import React from 'react'
import hero from '../assets/Landing.jpg'
import vedio from '../assets/Vedio.mp4'
const HeroSection = () => {
    return (
        <>
            <div className="hero-section">
                {/* <img src={hero} alt="Hero" className="hero-image" /> */}
                <video src={vedio} type='video/mp4' autoPlay playsInline loop muted style={{ width: '100%', height: 'auto' }}>
                    Your brwoser does not support the video tag
                </video>


            </div>

        </>
    )
}

export default HeroSection
