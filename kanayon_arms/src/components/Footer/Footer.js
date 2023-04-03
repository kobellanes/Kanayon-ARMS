import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/*Column1 */}
                        <div className="col">
                            <h4>Kanayon Inasal</h4>
                            <ul className="list-unstyled">
                                <li>Kanayon Inasal is a semi-casual </li>
                                <li>reataurant typewhich serves </li>
                                <li>Chicken Inasal, Pork BBQ, and Pork Liempo</li>
                            </ul>
                        </div>
                        {/* Column2 */}
                        <div className="col">

                            <h4>ORDER</h4>
                            <ul className="list-unstyled">
                                <li>SOLO</li>
                                <li>SINGLE RICE</li>
                                <li>UNLI RICE</li>


                            </ul>
                        </div>

                        {/*Column3 */}
                        <div className="col">

                            <h4>CONTACT</h4>
                            <ul className="list-unstyled">
                                <li>0939 490 3638</li>
                                <li>Brgy. Pagaspas</li>
                                <li>Tanauan, 4232 Batangas</li>

                            </ul>
                        </div>


                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} KANAYON INASAL | All right reserved | Terms Of Service | Privacy
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Footer;