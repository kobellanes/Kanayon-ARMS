import React from 'react';
import "./OrderNow.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function OrderNow() {
    return (
        <>
            <Header>

            </Header>

            <section className="llanesk-ordernow m-5 px-5 pb-4">

                <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center pt-2">
                    <h1 className="llanesk-ordernow-title fw-light pb-2 text-light">KANAYON INASAL MENU</h1>
                    <div className="llanesk-ordernow-border mb-3 text-center"></div>

                    <div className="d-flex flex-row mt-4 col-8 justify-content-center">
                        <a href="#" className="llanesk-ordernow-orderpage btn col-4 fw-light mx-xl-4 mx-3 fw-bold p-4" tabindex="-1" role="button" aria-disabled="true"><i class=""></i>ORDER HERE</a>
                        <a href="#" className="llanesk-ordernow-orderlist btn col-4 fw-light mx-xl-4 mx-3 fw-light p-4" tabindex="-1" role="button" aria-disabled="true"><i class=""></i>VIEW ORDER LIST</a>
                    </div>

                </div>

                <div className="mx-xl-5 px-xl-5 mt-4">
                    <div className="container-fluid d-flex mx-xl-5 px-xl-5">
                        <div className="container-fluid mx-xl-4 text-center text-xl-start">
                            <h4 className="llanesk-ordernow-featured fw-light text-light mt-4">Featured Items</h4>
                        </div>
                    </div>
                </div>

                <div className="mx-xl-5 px-xl-5">
                    <div className="mx-xl-5">
                        <div className="row g-4 mt-3 px-xl-5 mx-xl-5">
                            <div className="col-12 col-lg-6 col-xl-3">

                                <div className="">
                                    <img className="llanesk-ordernow-featuredpic card-img h-100 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/paa.jpg')} alt="Paa Inasal"></img>
                                    <h4 className="llanesk-ordernow-featuredlabel mt-2 text-light fw-light text-center">Paa Inasal</h4>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="">
                                    <img className="llanesk-ordernow-featuredpic card-img h-100 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/liempo.jpg')} alt="Liempo"></img>
                                    <h4 className="llanesk-ordernow-featuredlabel mt-2 text-light fw-light text-center">Liempo</h4>
                                </div>

                            </div>

                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="">
                                    <img className="llanesk-ordernow-featuredpic card-img h-100 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/barbeque.jpg')} alt="Pork Barbecue"></img>
                                    <h4 className="llanesk-ordernow-featuredlabel mt-2 text-light fw-light text-center">Pork Barbecue</h4>
                                </div>

                            </div>

                            <div className="col-12 col-lg-6 col-xl-3">
                                <div className="">
                                    <img className="llanesk-ordernow-featuredpic card-img h-100 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/halohalo.jpg')} alt="Halo-Halo"></img>
                                    <h4 className="llanesk-ordernow-featuredlabel mt-2 text-light fw-light text-center">Halo-Halo</h4>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>



                {/* <div className="mx-5 px-5 mt-4">
                    <div className="container-fluid px-5 mx-5">
                        <div className="mx-5 pe-5">

                            <div className="container-fluid d-flex flex-row pe-5 col-12 justify-content-between">
                                <div className="d-flex flex-column col-lg-6">
                                    <a href="#">
                                        <img className="img-fluid llanesk-ordernow-featuredpic col-xl-11 col-lg-12 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/paa.jpg')} alt="Paa Inasal"></img>
                                    </a>

                                    <h4 className="llanesk-ordernow-featuredlabel col-xl-11 col-lg-12 mt-2 text-light fw-light text-center">Paa Inasal</h4>
                                </div>

                                <div className="d-flex flex-column col-lg-6">
                                    <a href="#">
                                        <img className="img-fluid llanesk-ordernow-featuredpic col-xl-11 col-lg-12 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/liempo.jpg')} alt="Liempo"></img>
                                    </a>

                                    <h4 className="llanesk-ordernow-featuredlabel col-xl-11 col-lg-12 mt-2 text-light fw-light text-center">Liempo</h4>
                                </div>

                                <div className="d-flex flex-column col-lg-6">
                                    <a href="#">
                                        <img className="img-fluid llanesk-ordernow-featuredpic col-xl-11 col-lg-6 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/barbeque.jpg')} alt="Pork Barbecue"></img>
                                    </a>

                                    <h4 className="llanesk-ordernow-featuredlabel col-xl-11 col-lg-6 mt-2 text-light fw-light text-center">Pork Barbecue</h4>
                                </div>

                                <div className="d-flex flex-column col-lg-6">
                                    <a href="#">
                                        <img className="img-fluid llanesk-ordernow-featuredpic col-xl-11 col-lg-6 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/pecho.jpg')} alt="Pecho"></img>
                                    </a>

                                    <h4 className="llanesk-ordernow-featuredlabel col-xl-11 col-lg-6 mt-2 text-light fw-light text-center">Pecho Inasal</h4>
                                </div>

                                <div className="d-flex flex-column ">
                                    <a href="#">
                                        <img className=" img-fluid llanesk-ordernow-featuredpic col-xl-11 col-lg-6 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/halohalo.jpg')} alt="Halo-Halo"></img>
                                    </a>

                                    <h4 className="llanesk-ordernow-featuredlabel col-xl-11 col-lg-6 mt-2 text-light fw-light text-center">Halo-Halo</h4>
                                </div>

                            </div>

                        </div>
                    </div>
                </div> */}


                {/* <div className="col-12">
                    <nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-menu" role="tabpanel" aria-labelledby="nav-menu-tab">
                                <ul className="nav nav-pills justify-content-center mb-5" id="pills-tab-menu" role="tablist">

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-kchicken-tab" data-bs-toggle="pill" data-bs-target="#pills-kchicken" type="button" role="tab" aria-controls="pills-kchicken" aria-selected="true">Chicken Inasal</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-kliempo-tab" data-bs-toggle="pill" data-bs-target="#pills-kliempo" type="button" role="tab" aria-controls="pills-kliempo" aria-selected="false">Liempo</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-kBBQ-tab" data-bs-toggle="pill" data-bs-target="#pills-kBBQ" type="button" role="tab" aria-controls="pills-kBBQ" aria-selected="false">Pork BBQ</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-ksisig-tab" data-bs-toggle="pill" data-bs-target="#pills-ksisig" type="button" role="tab" aria-controls="pills-ksisig" aria-selected="false">Sisig</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-ktalong-tab" data-bs-toggle="pill" data-bs-target="#pills-ktalong" type="button" role="tab" aria-controls="pills-ktalong" aria-selected="false">Kanayon Pampagana</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-khalohalo-tab" data-bs-toggle="pill" data-bs-target="#pills-khalohalo" type="button" role="tab" aria-controls="pills-khalohalo" aria-selected="false">Halo-Halo</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-kdrinks-tab" data-bs-toggle="pill" data-bs-target="#pills-kdrinks" type="button" role="tab" aria-controls="pills-kdrinks" aria-selected="false">Kanayon Drinks</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div> */}

                {/* 
                <div className="tab-content" id="pills-tabContentmenu">
                    <div className="tab-pane fade" id="pills-kliempo" role="tabpanel" aria-labelledby="pills-kliempo-tab">
                        <div className="carousel slide" id="carouselCategorykliempo" data-bs-touch="false" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <div className="row h-100 align-items-center g-2">
                                        <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                            <div className="card card-span h-100 text-white"><img src={require('../../../assets/liempo.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                                <div className="card-img-overlay ps-0"> </div>
                                                <div className="card-body ps-0 bg-200">
                                                    <h5 className="fw-bold text-1000 text-truncate">LIEMPO</h5>
                                                    <p class="card-text">Grilled marinated pork belly, salty and sour with right blend of spices</p>
                                                    <div class="dropdown mb-2">
                                                        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Variation
                                                        </button>
                                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <li><a class="dropdown-item btn-dark" href="#">Solo ₱ 89</a></li>
                                                            <li><a class="dropdown-item" href="#">Single Rice ₱ 99</a></li>
                                                            <li><a class="dropdown-item" href="#">Unli Rice ₱ 119</a></li>
                                                        </ul>
                                                    </div>
                                                    <button type="button" className="btn btn-dark btn-end">Add Item</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View Order List </a></div>
                    </div>


                    <div className="tab-pane fade show active" id="pills-kchicken" role="tabpanel" aria-labelledby="pills-kchicken-tab">
                        <div className="row h-100 align-items-center g-2">
                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                <div className="card card-span h-100 text-white"><img src={require('../../../assets/paa.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                        <h5 className="fw-bold text-1000 text-center">PAA INASAL</h5>
                                        <p class="card-text">Ihaw-sarap marinated chicken quarters. Expertly grilled the Kanayon Inasal way</p>
                                        <div class="dropdown mb-2">
                                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                Variation
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a class="dropdown-item btn-dark" href="#">Solo ₱ 89</a></li>
                                                <li><a class="dropdown-item" href="#">Single Rice ₱ 99</a></li>
                                                <li><a class="dropdown-item" href="#">Unli Rice ₱ 119</a></li>
                                            </ul>
                                        </div>
                                        <button type="button" className="btn btn-dark btn-end">Add Item</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                <div className="card card-span h-100 text-white"><img src={require('../../../assets/pecho.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                        <h5 className="fw-bold text-1000 text-truncate">PECHO INASAL</h5>
                                        <p class="card-text">Ihaw-sarap marinated chicken quarters. Expertly grilled the Kanayon Inasal way</p>
                                        <div class="dropdown mb-2">
                                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                Variation
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a class="dropdown-item btn-dark" href="#">Solo ₱ 92</a></li>
                                                <li><a class="dropdown-item" href="#">Single Rice ₱ 102</a></li>
                                                <li><a class="dropdown-item" href="#">Unli Rice ₱ 122</a></li>
                                            </ul>
                                        </div>
                                        <button type="button" className="btn btn-dark btn-end">Add Item</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View Order List </a></div>
                    </div>


                    <div className="tab-pane fade" id="pills-kBBQ" role="tabpanel" aria-labelledby="pills-kBBQ-tab">
                        <div className="carousel slide" id="carouselCategorykBBQ" data-bs-touch="false" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <div className="row h-100 align-items-center g-2">
                                        <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                            <div className="card card-span h-100 text-white"><img src={require('../../../assets/barbeque.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                                <div className="card-img-overlay ps-0"> </div>
                                                <div className="card-body ps-0 bg-200">
                                                    <h5 className="fw-bold text-1000 text-truncate">PORK BARBEQUE</h5>
                                                    <p class="card-text">Tender-grilled Pork BBQ served with one or two stick of Barbeque.</p>
                                                    <div class="dropdown mb-2">
                                                        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Variation
                                                        </button>
                                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <li><a class="dropdown-item btn-dark" href="#">Solo (1pc) ₱ 25</a></li>
                                                            <li><a class="dropdown-item" href="#">Single Rice (2pc) ₱ 59</a></li>
                                                            <li><a class="dropdown-item" href="#">Unli Rice (2pc) ₱ 79</a></li>
                                                        </ul>
                                                    </div>
                                                    <button type="button" className="btn btn-dark btn-end">Add Item</button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View Order List </a></div>
                    </div>


                    <div className="tab-pane fade" id="pills-ksisig" role="tabpanel" aria-labelledby="pills-ksisig-tab">
                        <div className="carousel slide" id="carouselCategoryksisig" data-bs-touch="false" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <div className="row h-100 align-items-center g-2">
                                        <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                            <div className="card card-span h-100 text-white"><img src={require('../../../assets/sisig.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                                <div className="card-img-overlay ps-0"> </div>
                                                <div className="card-body ps-0 bg-200">
                                                    <h5 className="fw-bold text-1000 text-truncate">SISIG</h5>
                                                    <p class="card-text">A mouth-watering grilled & sautéed meaty dish with slight hotty.</p>
                                                    <div class="dropdown mb-2">
                                                        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Variation
                                                        </button>
                                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <li><a class="dropdown-item btn-dark" href="#">Solo ₱ 80</a></li>
                                                            <li><a class="dropdown-item" href="#">Single Rice ₱ 95</a></li>
                                                            <li><a class="dropdown-item" href="#">Unli Rice ₱ 119</a></li>
                                                        </ul>
                                                    </div>
                                                    <button type="button" className="btn btn-dark btn-end">Add Item</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View Order List </a></div>
                    </div>


                    <div className="tab-pane fade" id="pills-ktalong" role="tabpanel" aria-labelledby="pills-ktalong-tab">
                        <div className="carousel slide" id="carouselCategoryktalong" data-bs-touch="false" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <div className="row h-100 align-items-center g-2">
                                        <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                            <div className="card card-span h-100 text-white"><img src={require('../../../assets/talong.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                                <div className="card-img-overlay ps-0"> </div>
                                                <div className="card-body ps-0 bg-200">
                                                    <h5 className="fw-bold text-1000 text-truncate">ENSALADANG TALONG</h5>
                                                    <p class="card-text">Ang talong na babalikbalikan ng taong bayan pamihadong gaganahan.</p>
                                                    <h5 className="text-start fw-bold text-1000 text-truncate">₱ 55</h5>
                                                    <button type="button" className="btn btn-dark btn-end">Add Item</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View Order List </a></div>
                    </div>


                    <div className="tab-pane fade" id="pills-khalohalo" role="tabpanel" aria-labelledby="pills-khalohalo-tab">
                        <div className="carousel slide" id="carouselCategorykhalohalo" data-bs-touch="false" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <div className="row h-100 align-items-center g-2">
                                        <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                            <div className="card card-span h-100 text-white"> <img src={require('../../../assets/halohalo.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                                <div className="card-img-overlay ps-0"> </div>
                                                <div className="card-body ps-0 bg-200">
                                                    <h5 className="fw-bold text-1000 text-truncate">HALO-HALO</h5>
                                                    <p class="card-text">Halo-Halo pampalamig sa ulo mong nag iinit.</p>
                                                    <h5 className="text-start fw-bold text-1000 text-truncate">₱ 45</h5>
                                                    <button type="button" className="btn btn-dark btn-end">Add Item</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View Order List</a></div>
                    </div>


                    <div className="tab-pane fade" id="pills-kdrinks" role="tabpanel" aria-labelledby="pills-kdrinks-tab">
                        <div className="carousel slide" id="carouselCategorykdrinks" data-bs-touch="false" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <div className="row h-100 align-items-center g-2">
                                        <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                            <div className="card card-span h-100 text-white"> <img src={require('../../../assets/icetea.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                                <div className="card-img-overlay ps-0"> </div>
                                                <div className="card-body ps-0 bg-200">
                                                    <h5 className="fw-bold text-1000 text-truncate">ICE TEA</h5>
                                                    <p class="card-text">Sige inom</p>
                                                    <h5 className="text-start fw-bold text-1000 text-truncate">₱ 15</h5>
                                                    <button type="button" className="btn btn-dark btn-end">Add Item</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                            <div className="card card-span h-100 text-white"> <img src={require('../../../assets/softdrinks.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                                <div className="card-img-overlay ps-0"> </div>
                                                <div className="card-body ps-0 bg-200">
                                                    <h5 className="fw-bold text-1000 text-truncate">SOFTDRINKS</h5>
                                                    <p class="card-text">Sige inom</p>
                                                    <h5 className="text-start fw-bold text-1000 text-truncate">₱ 20</h5>
                                                    <button type="button" className="btn btn-dark btn-end">Add Item</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View Order List</a></div>
                    </div>

                </div> */}




            </section >


            <Footer></Footer>
        </>
    );
}


export default OrderNow;