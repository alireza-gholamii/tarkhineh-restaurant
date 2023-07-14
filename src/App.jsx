import React from 'react';
import { Route , Routes } from 'react-router-dom';

import Homepage from './components/Homepage';
import Branch from "./components/branch/Branch.jsx"

// styles
import "./styles/fonts.css"
import Layout from './Layout';
import FoodContextProvider from './components/contexts/FoodContextProvider';
import CartContextProvider from './components/contexts/CartContextProvider';


const App = () => {
  return (
    <div>
      <FoodContextProvider>
        <CartContextProvider>
          <Routes >
            <Route path='/' element={<Layout />}>
              <Route index element={<Homepage />}/>
            </Route>
              <Route path='/branch/:name' element={<Layout />}>
                <Route index element={<Branch />}/>
              </Route>
          </Routes>
        </CartContextProvider>
      </FoodContextProvider>
    </div>
  );
};

export default App;