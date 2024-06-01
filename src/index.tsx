import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/Store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/web';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Header from './component/Header';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
                <Header />
                <RouterProvider router={router} />
                <Footer />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
