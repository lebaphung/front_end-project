import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Error from "../component/Error";
import {ProductDetail} from "../component/ProductDetail";
import {loadProduct} from "../store/Action";
import Home from "../component/Home";

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
                // element: <ProductList/>
            }, {
                path: 'product/:id',
                element: <ProductDetail/>,
                loader: loadProduct,
            }
        ]
    }
])