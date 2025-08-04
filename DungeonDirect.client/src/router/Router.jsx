import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductDetails from '../features/catalogue/ProductDetails';
import NotFound from '../features/errors/NotFound';
import Home from '../features/home/HomePage';
import Catalogue from '../features/catalogue/Catalogue';
import AboutUs from '../features/about/AboutUs';
import ContactUs from '../features/contact/ContactUs';
import Cart from '../features/cart/Cart';
import Checkout from '../features/checkout/Checkout';
import OrderSuccess from '../features/checkout/OrderSuccess';
import Account from '../features/account/Account';
import Login from '../features/account/Login';
import Register from '../features/account/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {path: '', element: <Home />},
            {path: 'catalogue', element: <Catalogue />},
            {path: 'about', element: <AboutUs />},
            {path: 'contact', element: <ContactUs />},
            {path: 'cart', element: <Cart />},
            {path: 'checkout', element: <Checkout />},
            {path: 'order-success', element: <OrderSuccess />},
            {path: 'account', element: <Account />},
            {path: 'login', element: <Login />},
            {path: 'register', element: <Register />},
            {path: 'products/:id', element: <ProductDetails />},
        ]
    }
]);