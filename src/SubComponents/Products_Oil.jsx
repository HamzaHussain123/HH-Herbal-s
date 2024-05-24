import React from 'react';
import { Link } from 'react-router-dom';
import oil from '../assets/oil.jpg';
// import './Products_Oil.css'; // Import CSS file for styling

const Products_Oil = () => {
    const handleBuyNowClick = () => {
        window.open('https://api.whatsapp.com/send?phone=923343973755', '_blank');
    };
    return (
        <Link to="/product/oil" className="product-link"> {/* Added className for styling */}
            <div className='Products_Oil py-5'>
                <div className="oil_image">
                    <img src={oil} alt="oil1" />
                </div>
                <div className="container oil_content">
                    <h2>HH HERBAL HAIR OIL<span> 120 ml</span>
                    </h2>
                    <h4> RS. 1250/= <span>delivery charges included</span></h4>
                    <h3>DESCRIPTION:</h3>
                    <p>Experience the power of nature with HH Herbal Hair Growth Oil, carefully crafted with a unique blend of 7 pure oils and 13 natural ingredients. This exquisite formula has been meticulously designed to rejuvenate and revitalize your hair, providing the ultimate care and nourishment it deserves.</p>
                    <h3>INGREDIENTS:</h3>
                    <p>1. Coconut Oil
                        2. Mustard Oil
                        3. Rosemary Oil
                        4. Castor Oil
                        5. Jasmine Oil
                        6. Sesame Oil
                        7. Vitamin E Oil
                        Natural Ingredients:
                        1. Aloe Vera
                        2. Bhringraj
                        3. Amla
                        4. Shikakai
                        5. Fenugreek Seeds
                        6. Black Seeds
                        7. Flaxseeds
                        8. Onion
                        9. Garlic
                        10. Cloves
                        11. Ginger
                        12. Curry Leaves
                        13. Mint Leaves
                    </p>






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


                    <h3>USAGE:</h3>
                    <p>
                        Gently massage the oil into
                        your scalp using your fingertips,
                        ensuring even distribution(apply
                        it warm). Leave the oil in for at
                        least 2 to 3 Hours, preferably
                        overnight for deep nourishment.
                        Wash your hair with shampoo
                        and conditioner as usual to
                        rinse out the oil. For optimal
                        results, use 2-3 times a week.
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

export default Products_Oil;
