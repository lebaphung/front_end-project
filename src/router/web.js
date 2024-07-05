import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Error from "../components/Error";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import VeChungToi from "../components/VeChungToi";
import Checkout from "../components/Checkout/Checkout";
import DichVu from "../components/DichVu";
import LoginCG from "../components/login/LoginCG";

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
            }, {
                path: 'product/:id',
                // element: <ProductDetail/>,
                // loader: loadProduct,
            },{
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
            }
        ]
    }
])