import { useState } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom"

import Home from "../Views/Home"
import Dashboard from "../Views/Dashboard"
import Signin from "../Views/Signin"
import Detail from "../Views/Detail"
// import { postRestaurants } from "./firebase"
import { useSelector } from 'react-redux'
import Theme from '../Components/Theme'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/signin",
                element: <Signin />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/restro/:restro_id",
                element: <Detail />
            },

        ]
    }
])
function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    const navigate = useNavigate()

    const [showCart, setShowCart] = useState(false)

    // function restaurants() {
    //     postRestaurants()
    //     navigate('/dashboard')
    // }

    function logout(){
        navigate('/')
    }

    const theme = useSelector(state => state.themeReducer.theme)
    const cart = useSelector(state => state.cartReducer.cart)

    let totalPrice = 0
    cart.map(item => {
        totalPrice += item.price
    })

    return (

        <div className={theme}>
            <header className="foodpanda-header">
                <div className="logo">
                    <img width={190} src="https://download.logo.wine/logo/Foodpanda/Foodpanda-Logo.wine.png" alt="Foodpanda Logo" />
                </div>

                <div>
                    <Theme />
                    <button onClick={() => navigate('/signin')} className="btn">Signup</button>
                    <button onClick={logout} className="btnn">Logout</button>
                </div>

                <div>
                    <sapn> <img className="icon" width={27} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/1200px-Globe_icon.svg.png" alt="" />
                        <p className="icon-en"> EN </p> </sapn>
                    <img className="cart-img" onClick={() => setShowCart(!showCart)} width={68} src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Bag-icon-by-rudezstudio-2.jpg" />
                    <p style={{ color: 'deeppink', position: 'absolute', top: 12, right: 18 }}> {cart.length} </p>
                </div>

            </header>
            <div />

            {showCart && <div style={{ position: 'absolute', top: 100, right: 10, backgroundColor: 'white', width: '300px', color: 'black' }}>
                {cart.map(item => {
                    return <div>
                        {item.item} - Rs. {item.price}
                    </div>
                })}
                <p><b>Total Price: Rs. {totalPrice}</b></p>
            </div>}


            <Outlet />

            <div>
                <footer className="olx-footer">
                    <div className="olx-footer-content">

                        <div className="footer-section">
                            &copy; {new Date().getFullYear()} foodpanda
                        </div>

                        <div className="footer-section">
                            <ul>
                                <li><a href="#">Press Help Center</a></li>
                                <li><a href="#">Refund with pandapay</a></li>
                                <li><a href="#">Pandapay User Account Terms and</a></li>
                                <li><a href="#">Conditions</a></li>
                                <li><a href="#">Terms and conditions Privacy policy</a></li>
                                <li><a href="#">Security Download foodpanda Apps</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <ul>
                                <li><a href="#">Careers Suggest a restaurant</a></li>
                                <li><a href="#">Corporate Customer</a></li>
                                <li><a href="#">Cashback Terms and Conditions</a></li>
                                <li><a href="#">All cusiners foodpanda Magazine</a></li>
                                <li><a href="#">Partner with us pandago - Request a rider</a></li>
                                <li><a href="#">foodpanda Voucher&Promo</a></li>

                            </ul>
                        </div>

                        <div className="footer-section">
                            <ul>
                                <li><a href="#">All cities Update on COVID-19 in Pakistan</a></li>
                                <li><a href="#">Pandamart Grocery Delivery</a></li>
                                <li><a href="#">Pandapro - monthly subscription</a></li>
                                <li><a href="#">programme</a></li>
                                <li><a href="#">foodpanda home chef Become an affiliate</a></li>
                                <li><a href="#">Ramzan deals</a></li>
                            </ul>
                        </div>
                    </div>

                </footer>
            </div>
        </div>


    )
}

export default Router