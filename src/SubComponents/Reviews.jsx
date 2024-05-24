import React from 'react';

import rev1 from '../assets/review1.jpg';
import rev2 from '../assets/review2.jpg';
import rev3 from '../assets/review3.jpg';
import rev4 from '../assets/review4.jpg';
import rev5 from '../assets/review5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const Reviews = () => {
    return (
        <>
            <div className="container-fluid Reviews py-3">
                <div className="container text-center">
                    {/* <h1 className="main-heading text-center pb-5 pb-lg-0">
                        <span>Client  </span>  Reviews
                    </h1> */}
                    <div className="container py-md-5  Testimonial1">
                        <Swiper
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                            spaceBetween={10}
                            slidesPerView={3} // Display only one review at a time
                            freeMode={true}
                            pagination={{ clickable: true }}
                            navigation
                        >
                            <SwiperSlide>
                                <div
                                    className="row"

                                >
                                    <div className="col-md-12">
                                        <div className="rev_image" data-aos="fade-right" data-aos-duration="1500"
                                            data-aos-easing="ease-in-out">
                                            <img src={rev1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="row"

                                >
                                    <div className="col-md-12">
                                        <div className="rev_image" data-aos="fade-right" data-aos-duration="1500"
                                            data-aos-easing="ease-in-out">
                                            <img src={rev4} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="row"

                                >
                                    <div className="col-md-12">
                                        <div className="rev_image" data-aos="fade-right" data-aos-duration="1500"
                                            data-aos-easing="ease-in-out">
                                            <img src={rev5} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="row"

                                >
                                    <div className="col-md-12">
                                        <div className="rev_image" data-aos="fade-right" data-aos-duration="1500"
                                            data-aos-easing="ease-in-out">
                                            <img src={rev2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="row"

                                >
                                    <div className="col-md-12">
                                        <div className="rev_image" data-aos="fade-right" data-aos-duration="1500"
                                            data-aos-easing="ease-in-out">
                                            <img src={rev3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Add more SwiperSlides for additional reviews */}
                        </Swiper>
                    </div>

                    {/* ********************************** RESPONSIVENESS ******************************/}


                    <div className="container py-md-5  Testimonial2">
                        <Swiper
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                            spaceBetween={10}
                            slidesPerView={1} // Display only one review at a time
                            freeMode={true}
                            pagination={{ clickable: true }}
                            navigation
                        >
                            <SwiperSlide>
                                <div
                                    className="row"

                                >
                                    <div className="col-md-12">
                                        <div className="rev_image" data-aos="fade-right" data-aos-duration="1500"
                                            data-aos-easing="ease-in-out">
                                            <img src={rev1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="row"

                                >
                                    <div className="col-md-12">
                                        <div className="rev_image" data-aos="fade-right" data-aos-duration="1500"
                                            data-aos-easing="ease-in-out">
                                            <img src={rev4} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="row"

                                >
                                    <div className="col-md-12">
                                        <div className="rev_image" data-aos="fade-right" data-aos-duration="1500"
                                            data-aos-easing="ease-in-out">
                                            <img src={rev5} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="row"

                                >
                                    <div className="col-md-12">
                                        <div className="rev_image" data-aos="fade-right" data-aos-duration="1500"
                                            data-aos-easing="ease-in-out">
                                            <img src={rev2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="row"

                                >
                                    <div className="col-md-12">
                                        <div className="rev_image" data-aos="fade-right" data-aos-duration="1500"
                                            data-aos-easing="ease-in-out">
                                            <img src={rev3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Add more SwiperSlides for additional reviews */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;
