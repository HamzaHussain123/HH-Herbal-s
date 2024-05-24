import React from 'react';
import { Link } from 'react-router-dom';

import oil from '../assets/oil.jpg';
import oil2 from '../assets/oil2.jpg';
import serum from '../assets/serum2.jpg';
import roller from '../assets/roller.jpg';
import gel from '../assets/gel.jpg';
import combo1 from '../assets/combo1.jpg';
import combo2 from '../assets/combo2.jpg';

const AllProducts = () => {
    return (
        <div className="Full_Products">

            <div className="All_products">
                <div className="product_text text-center">
                    <h1>All Products</h1>
                </div>
                <div className='All_images'>
                    <div className="product_info" data-aos="fade-down" data-aos-duration="1300"
                        data-aos-easing="ease-in-out">
                        <Link to="/product/oil">
                            <img src={oil} alt="oil" />
                        </Link>
                        <h4>HH HERBAL OIL ( 120 ml)</h4>

                    </div>

                    <div className="product_info" data-aos="fade-down" data-aos-duration="1300"
                        data-aos-easing="ease-in-out">
                        <Link to="/product/serum">
                            <img src={serum} alt="serum" />
                        </Link>
                        <h4>HH HERBAL SERUM</h4>


                    </div>
                    <div className="product_info" data-aos="fade-down" data-aos-duration="1300"
                        data-aos-easing="ease-in-out">

                        <Link to="/product/oil2">

                            <img src={oil2} alt="2" />
                        </Link>
                        <h4>HH HERBAL  OIL (240 ml)</h4>

                    </div>



                    <div className="product_info" data-aos="fade-down" data-aos-duration="1300"
                        data-aos-easing="ease-in-out">
                        <Link to='/product/combo1'>

                            <img src={combo1} alt="se" />


                        </Link>
                        <h4>HH HERBAL OIL <span>(240 ml)</span> & SERUM COMBO</h4>
                    </div>


                    <div className="product_info" data-aos="fade-down" data-aos-duration="1300"
                        data-aos-easing="ease-in-out">
                        <Link to='/product/C2'>

                            <img src={combo2} alt="se" />


                        </Link>
                        <h4>HH HERBAL OIL <span>(120 ml)</span> & SERUM COMBO</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllProducts;
