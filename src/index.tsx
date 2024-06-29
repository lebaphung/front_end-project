import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import store from "./redux/Store";
import {BrowserRouter, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
            <Provider store={store}>
                    <BrowserRouter>
                            <App />
                    </BrowserRouter>
            </Provider>
    </React.StrictMode>
);
reportWebVitals();
