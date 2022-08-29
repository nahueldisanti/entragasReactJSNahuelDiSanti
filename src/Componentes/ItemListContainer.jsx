import React from 'react';
import './ItemListContainer.css'
import Contador from './Contador.jsx'

const ItemListContainer = ({titulo}) => {

    function onAdd(count){
        console.log(`Han sido aniadidos ${count} elementos al carrito`);
        alert(`Han sido aniadidos ${count} elementos al carrito`);
    } 
    return (
        <div>
            <h1>{titulo}</h1>
            <Contador stock ={10} onAdd={onAdd} />
        </div>
    );
}

export default ItemListContainer;
