import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar.jsx';
import ProductosListContainer from './Productos/ProductosListContainer.jsx';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer.jsx'
import Cart from './Routing/Cart.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
    return (
        <div>
            <h1>ALTA LLAMA</h1>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ProductosListContainer/>}></Route>
                    <Route path="/detalles/:id" element={<ItemDetailContainer/>}></Route>
                    <Route path='/categoria/:categoria' element={<ProductosListContainer/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path="*" element={<h1>Error 404</h1>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
