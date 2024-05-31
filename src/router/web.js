import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Error from "../component/Error";
import ProductList from "../component/ProductList";
import {ProductDetail} from "../component/ProductDetail";
import {loadProduct} from "../store/Action";
import Home from "../component/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error/>,
        children: [{
            path: '/home',
            element: <Home/>
            },
            {
                path: 'list-product',
                element: <ProductList/>
            }, {
                path: 'product/:id',
                element: <ProductDetail/>,
                loader: loadProduct,
            }
        ]
    }
])