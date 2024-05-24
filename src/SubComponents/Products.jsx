// 



import React from 'react';
import { Link } from 'react-router-dom';
import oil from '../assets/oil.jpg';
import oil2 from '../assets/oil2.jpg';
import serum from '../assets/serum2.jpg';

const Products = () => {
    return (
        <>
            <div className='Products'>
                <div className="product_text text-center">
                    <h1><strong>Our Products</strong></h1>
                </div>
                <div className='product_img'>
                    <div className="product_item" data-aos="fade-right" data-aos-duration="1200"
                        data-aos-easing="ease-in-out">
                        <Link to="/product/oil">
                            <img src={oil} alt="oil" />
                        </Link>
                        <h4>HH HERBAL OIL (80 ml)</h4>
                    </div>
                    <div className="product_item" data-aos="fade-up" data-aos-duration="1400"
                        data-aos-easing="ease-in-out">
                        <Link to="/product/serum">
                            <img src={serum} alt="serum" />
                        </Link>
                        <h4>HH HERBAL SERUM</h4>
                    </div>
                    <div className="product_item" data-aos="fade-left" data-aos-duration="1700"
                        data-aos-easing="ease-in-out" >
                        <Link to="/product/oil2">
                            <img src={oil2} alt="oil2" />
                        </Link>
                        <h4>HH HERBAL OIL (250 ml)</h4>
                    </div>
                </div>
                <div className="product_btn text-center">
                    <Link to="/products">
                        <button className="cssbuttons-io-button">
                            <span>View All Products</span>
                            <div className="icon">
                                <svg
                                    height="24"
                                    width="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Products;
