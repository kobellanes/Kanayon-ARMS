import React, { useState, useEffect } from 'react';
import './OrderFunction.css';
import { setOrders, setMenus, getMenu } from '../../../redux/actions/actions';
import http from '../../../http';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';

function OrderFunction() {
    const orders = useSelector((state) => state.allOrders.orders);
    const singleMenu = useSelector((state) => state.getMenu);

    const [confPrompt, setConfPrompt] = useState('');
    const [confOrig, setConfOrig] = useState('');

    const [getId, setGetId] = useState('');

    const [menu_name, setMenu_name] = useState('');
    const [menu_quantity, setMenu_quantity] = useState('');
    const [menu_isSold, setMenu_isSold] = useState('');

    const dispatch = useDispatch();

    const fetchOrders = async () => {
        http.get('orders').then(result => {
            dispatch(setOrders(result.data));

        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchOrders();
    }, []);

    const orderPrompt = (index) => {
        const newOrder = [...orders];
        const confOrder = newOrder.at(index);

        setConfOrig(confOrder);

        setConfPrompt(confOrder.user_isGcash);

    }

    const updateOrderStatus = () => {
        const newOrder = [...orders];

        let idn = newOrder.findIndex((order) => order.id == confOrig.id);

        if (idn != -1) {
            const data_update = {
                isStatus: "RECEIVED PAYMENT",
            }

            const updateOrder = newOrder.at(idn);

            http.put(`orders/${updateOrder.id}`, data_update).then(result => {
                if (result.data.status == 1) {
                    notifySuccess(result.data.message);

                    updateOrder.isStatus = "RECEIVED PAYMENT";

                    newOrder.splice(idn, 1, updateOrder);
                    dispatch(setOrders(newOrder));
                }
            }).catch(err => console.log(err.message));

        }

    }

    const menus = useSelector((state) => state.allMenus.menus);

    const fetchMenus = async () => {
        http.get('menus').then(result => {
            dispatch(setMenus(result.data));

        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchMenus();
    }, []);

    const editMeal = () => {
        const newMenu = [...menus];

        let idn = newMenu.findIndex((menu) => menu.menu_name == getId);

        if (idn != -1) {
            const updateMenu = newMenu.at(idn);
            updateMenu.menu_isEdit = 0;
            newMenu.splice(idn, 1, updateMenu);
            const menu = newMenu.at(idn);

            setMenu_name(menu.menu_name);
            setMenu_quantity(menu.menu_quantity);
            setMenu_isSold(menu.menu_isSold);

        } else {
            setMenu_name('');
            setMenu_quantity('');
            setMenu_isSold('');

        }

    }

    const handleChange = event => {
        setGetId(event.target.value);
    };

    const updateMeal = (e) => {
        e.preventDefault();

        const newMenu = [...menus];
        let idn = newMenu.findIndex((menu) => menu.menu_name == getId);

        const noEditMenu = newMenu.at(idn);

        if (idn != -1) {
            const data_update = {
                menu_name: noEditMenu.menu_name,
                menu_description: noEditMenu.menu_description,
                menu_price: noEditMenu.menu_price,
                menu_quantity: menu_quantity,
                menu_isSold: menu_isSold,
            }
            const updateMenu = newMenu.at(idn);

            http.put(`menus/${updateMenu.id}`, data_update).then(result => {
                if (result.data.status == 1) {
                    newMenu.splice(idn, 1, updateMenu);
                    dispatch(setMenus(newMenu));
                    notifySuccess(result.data.message);
                    updateMenu.menu_isEdit = 0;

                    const singleMen = {
                        id: -2,
                        menu_name: null,
                        menu_description: null,
                        menu_price: null,
                        menu_quantity: null,
                        menu_isEdit: 0,
                        menu_isSold: 0,
                    };

                    dispatch(getMenu(singleMen));

                    setGetId('');
                    setMenu_name('');
                    setMenu_quantity('');
                    setMenu_isSold('');

                }

            }).catch(err => console.log(err.message));
        }
    }

    useEffect(() => {

        if (singleMenu.menu_name != null) {
            setMenu_name(singleMenu.menu_name);
            setMenu_quantity(singleMenu.menu_quantity);
            setMenu_isSold(singleMenu.menu_isSold);
        }

    }, [singleMenu]);

    const notifySuccess = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }

    const notifyError = () => {
        toast.error("You cancelled an order!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }

    const [datech, setDatech] = useState('');

    const fetchDate = async () => {
        const date = new Date();

        let day = date.getDate();

        if (day <= 9) {
            day = '0' + day;
        } else {
            day = date.getDate();
        }

        let month = date.getMonth() + 1;

        if (month <= 9) {
            month = '0' + month;
        } else {
            month = date.getMonth() + 1;
        }

        let year = date.getFullYear();

        let fullDate = `${year}-${month}-${day}`

        setDatech(fullDate);
    }
    useEffect(() => {
        fetchDate();
    }, []);

    const cancelOrder = () => {
        const newOrder = [...orders];

        let idn = newOrder.findIndex((order) => order.id == confOrig.id);

        if (idn != -1) {
            const data_update = {
                isStatus: "ORDER CANCELLED",
            }

            const updateOrder = newOrder.at(idn);

            http.put(`orders/${updateOrder.id}`, data_update).then(result => {
                if (result.data.status == 1) {
                    notifyError();

                    updateOrder.isStatus = "ORDER CANCELLED";

                    newOrder.splice(idn, 1, updateOrder);
                    dispatch(setOrders(newOrder));
                }
            }).catch(err => console.log(err.message));

        }

    }

    return (
        <>
            <table className="table table-striped table-bordered table-hover mt-1">

                <thead className="dese_thead">

                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>EMAIL ADDRESS</th>
                        <th>GCASH NUMBER</th>
                        <th>ORDERS</th>
                        <th>PRICE</th>
                        <th>MODE</th>
                        <th>STATUS</th>
                        <th className="text-center">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.length > 0 ?
                            orders.map((orders, index) => {
                                return (
                                    <tr>
                                        {
                                            orders.isStatus == "PENDING ORDER" && orders.date == datech ?
                                                <>
                                                    <td className="py-3">
                                                        <h3 className="m-0 text-start fs-6 fw-light">{orders.id}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="m-0 text-start fs-6 fw-light">{orders.user_isName}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="m-0 text-start fs-6 fw-light">{orders.user_isAddress}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="m-0 text-start fs-6 fw-light">{orders.user_isEmail}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="m-0 text-start fs-6 fw-light">{orders.user_isGcash}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="m-0 text-start fs-6 fw-light">{orders.order_isList}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="m-0 text-start fs-6 fw-light">₱{orders.order_isPrice}.00</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="m-0 text-start fs-6 fw-light">{orders.order_isMethod}</h3>
                                                    </td>

                                                    <td className="py-3">
                                                        <h3 className="m-0 text-start fs-6 fw-bold text-danger">{orders.isStatus}</h3>
                                                    </td>

                                                    <td className="text-center align-items-center py-4 d-flex flex-row">
                                                        <button onClick={() => orderPrompt(index)} data-bs-toggle="offcanvas" data-bs-target="#offcanvas12" aria-controls="offcanvas12" type="button" className="btn btn-danger me-2">
                                                            <i className="fa-regular fa-circle-xmark"></i>
                                                        </button>

                                                        <button onClick={() => orderPrompt(index)} data-bs-toggle="offcanvas" data-bs-target="#offcanvas11" aria-controls="offcanvas11" type="button" className="btn btn-success ms-2">
                                                            <i className="fa-solid fa-coins"></i>
                                                        </button>
                                                    </td>


                                                </>
                                                :
                                                ""
                                        }


                                    </tr>
                                )
                            })
                            :
                            <div className="mt-3 container-fluid spinner-border text-center justify-content-center" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    }

                </tbody>

            </table >

            <div className="llanesk-orderlistfunction-user-ban-offcanva offcanvas text-bg-light" id="offcanvas12" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header mb-1 py-0 mt-3">
                    <h3 className="offcanvas-title fw-bolder text-dark px-2">Confirm the action</h3>

                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body p-0 mt-1">

                    <div className="px-4 text-start border-bottom text-secondary fw-light pb-1 mb-4"></div>

                    <div className="container ">

                        <div className="container">

                            <div className="llanesk-activeuserfunction-container-start container p-3 rounded-2">
                                <p className="text-start m-0">Are you sure you want to did not receive the payment from "{confPrompt}"?</p>

                            </div>

                            <h6 className="text-start mt-3 ms-2 text-secondary fw-light">Note: This action cannot be undone. Are you sure you want to cancel this order?</h6>

                        </div>
                    </div>

                    <div className="px-4 text-start border-bottom text-secondary fw-light mt-4"></div>

                    <div className="d-flex flex-row py-3 align-items-end justify-content-end mx-4">
                        <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="llanesk-activeuserfunction-banbutt btn btn-light mx-2">Cancel</button>

                        <button onClick={cancelOrder} type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="btn btn-danger rounded-1 llanesk-activeuserfunction-banbutt fw-normal">Cancel Order</button>


                    </div>
                </div>

            </div>


            <div className="llanesk-orderfunction-offcanvas offcanvas text-bg-light" id="offcanvas11" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header mb-1 py-0 mt-3">
                    <h3 className="offcanvas-title fw-bolder text-dark px-2">Confirm the action</h3>
                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body p-0">

                    <h6 className="px-4 text-start border-bottom text-secondary fw-light pb-3 mb-3">Do not forget to add the orders to your Meal Report. Let's keep you on track Kanayon! </h6>

                    <div className="container px-4">

                        <div className="llanesk-orderfunction-container-start container p-3 rounded-2">

                            <p className="fw-bold m-0">Order/s: </p>
                            <p className="m-0 p-0 fw-normal">{confOrig.order_isList}</p>

                            <p className="my-2 p-0 fw-bold text-center fs-4">Meal Report</p>

                            <form onSubmit={updateMeal} className="col-12">

                                <select onClick={editMeal} className="w-100 form-select" onChange={handleChange} required>

                                    <option value="">Select Menu</option>
                                    {
                                        menus.length > 0 ?
                                            menus.map((menus, index) => {
                                                return (
                                                    <>
                                                        <option>
                                                            {menus.menu_name}
                                                        </option>

                                                    </>
                                                )

                                            })
                                            :
                                            ""
                                    }

                                </select>

                                <div className="form-group">

                                    <div className="d-flex align-items-center col-12 mt-3">

                                        <p className="ms-2 text-start col-3 m-0 fw-bold">{menu_name}</p>

                                        <input
                                            type="number"
                                            className="form-control"
                                            value={menu_quantity}
                                            onChange={(e) => setMenu_quantity(e.target.value)}
                                            placeholder='Meal Stocks'
                                            required
                                        />

                                        <input
                                            type="number"
                                            className="form-control ms-2"
                                            value={menu_isSold}
                                            onChange={(e) => setMenu_isSold(e.target.value)}
                                            placeholder='Meal Total Sold'
                                            required
                                        />

                                    </div>

                                </div>

                                <div className="mt-3 col-12 d-flex justify-content-end">

                                    {/* <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="rounded-pill btn btn-light mx-2">Cancel</button> */}

                                    <input className="btn btn-success text-center rounded-pill" type="submit" value="Add to Inventory" />

                                </div>

                            </form>




                        </div>

                    </div>

                    <h6 className="border-bottom text-secondary fw-light mt-3"></h6>

                    <div className="mt-3 px-4 mb-3">
                        <div className="llanesk-orderfunction-container-start container p-3 rounded-2">
                            <p className="text-center m-0">Are you sure you recieve the payment from "{confOrig.user_isGcash}"?</p>
                            {/* <p className="text-center m-0">Are you sure you recieve the payment from "{confOrig.user_isGcash}"?</p>
                            <p className="text-center m-0">Are you sure you recieve the payment from "{confOrig.user_isGcash}"?</p>
                            <p className="text-center m-0">Are you sure you recieve the payment from "{confOrig.user_isGcash}"?</p> */}

                            <div className="mt-3 col-12 d-flex justify-content-end">

                                <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="rounded-pill btn btn-light mx-2">Cancel</button>

                                <button data-bs-dismiss="offcanvas" aria-label="Close" onClick={updateOrderStatus} className="btn btn-success text-end rounded-pill" type="button">Received Payment</button>

                            </div>
                        </div>
                    </div>





                </div>




            </div >



        </>
    );
}

export default OrderFunction;