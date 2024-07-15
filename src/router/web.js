import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Error from "../components/Error";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import VeChungToi from "../components/VeChungToi";
import Checkout from "../components/Checkout/Checkout";
import DichVu from "../components/DichVu";
import LoginCG from "../components/login/LoginCG";
import Register from "../components/login/Register";
import KTNN from "../components/KTNN";
import ProductDetail, {loadProduct} from "../components/ProductDetal/ProductDetail";

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