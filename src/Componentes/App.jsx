import React from 'react';
import './App.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ProductosListContainer from './ProductosListContainer';

const App = () => {
    return (
        <div>
            <h1>ALTA LLAMA</h1>
            <NavBar/>
            <ItemListContainer titulo="Todo lo que necesitas en tu cocina, en una sola pagina."/> 
            <ProductosListContainer/>
        </div>
    );
}

export default App;
