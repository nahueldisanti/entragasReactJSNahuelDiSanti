import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Item1stContainer from './Item1stContainer';

const App = () => {
    return (
        <div>
            <h1>ALTA LLAMA</h1>
            <NavBar/>
            <Item1stContainer titulo="Todo lo que necesitas en tu cocina, en una sola pagina."/> 
        </div>
    );
}

export default App;
