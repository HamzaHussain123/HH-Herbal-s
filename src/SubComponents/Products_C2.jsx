import combo2 from '../assets/combo2.jpg';
import { Link } from 'react-router-dom';

import React from 'react';

const Products_C2 = () => {
    const handleBuyNowClick = () => {
        window.open('https://api.whatsapp.com/send?phone=923343973755', '_blank');
    };
    return (
        <Link to="/product/C2" className="product-link"> {/* Added className for styling */}
            <div className='Products_Oil py-5'>
                <div className="oil_image Combo_img">
                    <img src={combo2} alt="SE" />
                </div>
                <div className="container oil_content Combo_content">
                    <h2>HH HERBAL OIL <span>(120 ml)</span> & SERUM COMBO
                    </h2>
                    <h4> RS. 1750/= <span>delivery charges included</span></h4>
                    <h3>DESCRIPTION:</h3>
                    <p>Experience the combined power of nature with HH Herbal Hair Growth Oil and HH Herbal Serum. The Hair Growth Oil is meticulously crafted with a unique blend of 7 pure oils and 13 natural ingredients, designed to rejuvenate and revitalize your hair, providing the ultimate care and nourishment it deserves. Complementing this is the HH Herbal Serum, expertly formulated with 5 pure ingredients to enhance and maintain your hair's health and vitality. Together, these exceptional products offer a holistic approach to hair care, ensuring your hair receives the comprehensive treatment it needs for strength, shine, and growth</p>

                    <h3>Usage of Oil:</h3>
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

                    <h3>Usage of Serum:</h3>
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

                    <button className="btn-donate " onClick={handleBuyNowClick}>
                        Buy now
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default Products_C2
