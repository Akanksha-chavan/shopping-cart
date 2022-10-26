import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {UserProvider} from './context/user.context';
import {ProductsProvider} from './context/product.context';
import {CartDropDownProvider} from './context/cart-dropdown.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartDropDownProvider>
            <App />
          </CartDropDownProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

