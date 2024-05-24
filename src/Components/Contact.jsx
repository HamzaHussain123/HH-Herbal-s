import React from 'react';
import Contacts from "../assets/Contact.jpg";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";





const Contact = () => {
    return (
        <div className="Contact py-5">
            {/* <img src={Contacts} alt="Contact" className='contact_image' /> */}
            <div className="container contact_content text-center" data-aos="fade-left" data-aos-duration="1300"
                data-aos-easing="ease-in-out">
                <h1>CONTACT US</h1>
                <p >Do you have any questions or need assistance? We're here to help! Feel free to reach out to us for inquiries regarding our herbal products, assistance with orders, or any special requests you may have. Our dedicated team is committed to ensuring your experience with HH HERBAL is smooth and enjoyable. Contact us today, and let us help you bring the benefits of nature into your life!


                </p>
                <div className="contact-icons">
                    <a href="https://www.facebook.com/people/HH-Herbal-Oil/100094415846758/?mibextid=qi2Omg&rdid=md15oMRSjrm59mmU" target="_blank" className='fb_contact'>
                        <FaFacebook /><span>H.H HERBALS    </span>
                    </a>
                    <a href="tel:+923323188195" className='wh_contact' target="_blank">
                        <FaWhatsapp />
                        <span>+92 3343973755</span>
                    </a>
                    <a href="mailto:hamza.hussain0504@gmail.com" className='mail_contact' target="_blank">
                        <IoMdMail />
                        <span>HHherbal@gmail.com</span>
                    </a>
                    <a href="https://www.instagram.com/hhherbalhairoil/?igsh=MW1pd3BxeGxpaWxtaQ%3D%3D" target="_blank" className='insta_contact'>
                        <FiInstagram />
                        <span>  H.H HERBALS </span>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Contact;





