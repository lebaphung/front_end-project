import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Error from "../components/Error";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import VeChungToi from "../components/static_pages/VeChungToi";
import Checkout from "../components/checkout/Checkout";
import DichVu from "../components/static_pages/DichVu";
import LoginCG from "../components/login/LoginCG";
import Register from "../components/login/Register";

import ProductDetail from "../components/ProductDetal/ProductDetail";

import KTNN from "../components/static_pages/KTNN";
import ProductMenu from "../components/ProductDetal/ProductMenu";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [{
             path: '/',
             element: <Home/>
            },
            {
                path: 'list-product',
                element: <ProductList/>
            },
            {
                element: <ProductDetail/>,
                path: 'product/:id',
                }
                ,


            ,{
                path: 'vct',
                element: <VeChungToi/>
            },
            {
                path: 'Checkout',
                element: <Checkout/>
            },
            {
                path: 'DichVu',
                element: <DichVu/>
            },
            {
                path: 'KTNN',
                element: <KTNN/>
            },
            {
                path: 'login',
                element: <LoginCG/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
])