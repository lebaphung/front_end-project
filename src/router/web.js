import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Error from "../components/Error";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import VeChungToi from "../components/VeChungToi";

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
            }
        ]
    }
])