import React from 'react';
import { Route , Routes } from 'react-router-dom';

import Homepage from './components/Homepage';
import Branch from "./components/branch/Branch.jsx"

// styles
import "./styles/fonts.css"
import Layout from './Layout';
import FoodContextProvider from './components/contexts/FoodContextProvider';
import CartContextProvider from './components/contexts/CartContextProvider';
import MenuMianPage from './components/menu-page/MenuMianPage';
import Cart from './components/cart/Cart';
import ConfrimData from './components/cart/ConfrimData';
import Paymant from './components/cart/Paymant';


const App = () => {
  return (
    <div className='w-full m-[0_auto]'>
      <FoodContextProvider>
        <CartContextProvider>
          <Routes >
            <Route path='/' element={<Layout />}>
              <Route index element={<Homepage />}/>
            </Route>
              <Route path='/branch/:name' element={<Layout />}>
                <Route index element={<Branch />}/>
              </Route>
              <Route path='/menu/:category' element={<Layout />}>
                <Route index element={<MenuMianPage />} />
              </Route>
              <Route path='/cart' element={<Layout />}>
                <Route index element={<Cart />}/>
              </Route>
              <Route path='/cart/confrimData' element={<Layout />}>
                <Route index element={<ConfrimData />} />
              </Route>
              <Route path='/cart/payment' element={<Layout />}>
                <Route index element={<Paymant />} />
              </Route>
          </Routes>
        </CartContextProvider>
      </FoodContextProvider>
    </div>
  );
};

export default App;