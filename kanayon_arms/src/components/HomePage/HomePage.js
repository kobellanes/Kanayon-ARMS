import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './HomePage.css';
import customers3 from '../../assets/customers3.jpg';
import customers2 from '../../assets/customers2.jpg';
import customers1 from '../../assets/customers1.jpg';
import Customers4 from '../../assets/customers4.jpg';
import slide1 from '../../assets/homeslide.jpg';

function HomePage() {
    return (
        <>
            <Header>

            </Header>

            <section id="home" className="austriak-bg d-flex align-items-center">
                <div className="py-11 bg-light-gradient border-bottom border-white border-5"></div>
                <div className="bg-holder overlay overlay-light"> </div>

                <img src={slide1}></img>

                <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>WELCOME TO <span>KANAYON INASAL</span></h1>
                            <h2>Good food choices are good investments.</h2>

                            <div className="HomePage__btn">
                                <a href="about" className="btn btn-about">ABOUT US</a>

                            </div>
                        </div>


                    </div>

                </div>
            </section >

            <section></section>
            
            <section>

                <div className="austria-container">

                    <div className="row h-100 g-0">

                        <div className="col-md-6">

                            <div className="bg-300 p-4 h-100 d-flex flex-column justify-content-center">

                                <h4 className="text-800 text-white">Unli rice na binabalik balikan, Halina dine Kanayon!</h4>

                                <h1 className="fw-bold lh-sm fs-4 fs-lg-5 fs-xl-6">Delicious Food To fit your lifestyle.</h1>

                                <p className="mb-5 fs-1 text-white">One of the reasons that people enjoy coming to a great restaurant is that when an extraordinary meal is placed in front of them, they feel honored, respected, and even a little bit loved.</p>
                            </div>

                        </div>
                        <div className="col-md-6">

                            <div className="card card-span h-100 text-white">
                                <img className="card-img h-100" src={customers1}
                                    alt="Customers" />

                                <div className="card-img-overlay bg-dark-gradient">


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row h-100 g-2 py-1">
                        <div className="col-md-4">
                            <div className="card card-span h-100 text-white"><img className="card-img h-100"
                                src={Customers4} alt="Customers" />
                                <div className="card-img-overlay bg-dark-gradient">
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-span h-100 text-white"><img className="card-img h-100" src={customers3}
                                alt="Customers" />
                                <div className="card-img-overlay bg-dark-gradient">

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-span h-100 text-white"><img className="card-img h-100"
                                src={customers2} alt="Customers" />
                                <div className="card-img-overlay bg-dark-gradient">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <Footer></Footer>
        </>
    );
}


export default HomePage;