import serum from '../assets/serum2.jpg';
import { Link } from 'react-router-dom';

import React from 'react';

const Products_Oil2 = () => {
    const handleBuyNowClick = () => {
        window.open('https://api.whatsapp.com/send?phone=923343973755', '_blank');
    };
    return (
        <Link to="/product/serum" className="product-link"> {/* Added className for styling */}
            <div className='Products_Oil py-5'>
                <div className="oil_image">
                    <img src={serum} alt="SE" />
                </div>
                <div className="container oil_content">
                    <h2>HH HERBAL SERUM</h2>
                    <h4> RS. 750/= <span> delivery charges included</span></h4>
                    <h3>DESCRIPTION:</h3>
                    <p>Discover the transformative power of nature with HH Herbal Serum. Expertly crafted with a unique blend of 5 pure ingredients, this exceptional formula is designed to rejuvenate and revitalize your hair, offering the ultimate care and nourishment it deserves.</p>
                    <h3>INGREDIENTS:</h3>

                    <ul>
                        <li>  Fresh Aelovera</li>
                        <li>  Rice Water</li>
                        <li>  Rose water</li>
                        <li>  Rosemary Oil</li>
                        <li>  Vitamin E Oil</li>

                    </ul>








                    <h3>BENEFITS:</h3>


                    <ul>
                        <li>Nourishes scalp and hair
                            follicles</li>
                        <li> Stimulates hair growth
                        </li>
                        <li> Strengthens hair strands
                        </li>
                        <li>Reduces hair breakage and
                            split ends</li>
                        <li>Adds shine and volume to
                            hair</li>
                        <li> Prevents premature graying
                        </li>
                        <li>Improves scalp health and
                            circulation</li>
                        <li>Controls dandruff and scalp
                            infections</li>
                        <li> Enhances hair elasticity
                        </li>
                        <li>Promotes healthier, thicker
                            hair</li>
                    </ul>


                    <h3>HOW TO USE:</h3>
                    <p>
                        Apply the 10 drops of hair
                        serum twice a day, preferably
                        in the morning and Night on Dry
                        hairs. Rub your palms together
                        to distribute the serum evenly.
                        Gently massage the serum into
                        your hair, focusing on the mid
                        lengths to ends. Avoid applying
                        too much serum to the roots to
                        prevent weighing down your
                        hair.
                    </p>
                </div>
                <div className="Oil_btn">

                    <button className="btn-donate" onClick={handleBuyNowClick}>
                        Buy now
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default Products_Oil2
