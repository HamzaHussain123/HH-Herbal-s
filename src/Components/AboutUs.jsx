import React from 'react'
import about from "../assets/About_logo.png"

const AboutUs = () => {
    return (
        <div className="About py-5">
            <img src={about} alt="about" className='About_image' data-aos="fade-right" data-aos-duration="1500"
                data-aos-easing="ease-in-out" />
            <div className="container About_content" data-aos="fade-left" data-aos-duration="1300"
                data-aos-easing="ease-in-out">
                <h3>Your peace of mind, Our Priority</h3>
                <p>Welcome to "HH Herbal's", where nature meets beauty and wellness.

                    At HH Herbal's, we believe in harnessing the power of nature to bring you high-quality herbal products that nurture your hair and skin. Our journey began with a simple yet profound vision: to provide natural alternatives that promote health, beauty, and confidence.

                    With a passion for herbal remedies and a dedication to holistic wellness, we have carefully curated a range of products that embody the essence of nature's goodness. From our nourishing herbal hair oil and revitalizing hair serum to our refreshing Aloe Vera gel and innovative derma rollers, each product is crafted with the finest botanical ingredients, sourced ethically and sustainably.

                    But our commitment goes beyond just creating exceptional products. We are driven by a desire to empower individuals to embrace their natural beauty and embark on a journey of self-care and self-love. That's why transparency, integrity, and authenticity are at the core of everything we do.

                    When you choose "HH Herbal's", you're not just purchasing products; you're joining a community of like-minded individuals who prioritize wellness, sustainability, and mindful living. Together, let's embrace the beauty of nature and unlock the secrets to radiant hair and glowing skin.

                    Join us on this beautiful journey, and let nature inspire your beauty!
                </p>

            </div>
        </div>

    );
}

export default AboutUs
