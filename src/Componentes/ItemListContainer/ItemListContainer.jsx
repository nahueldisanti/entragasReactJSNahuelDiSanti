import React from 'react';
import './ItemListContainer.css'
import Contador from './Contador.jsx.js'



const ItemListContainer = ({titulo}) => {


    function onAdd(count){
        console.log(`Han sido aniadidos ${count} elementos al carrito`);
        alert(`Han sido aniadidos ${count} elementos al carrito`);
    } 

    return (
        <div>
            <h1>{titulo}</h1>
        </div>
    );
}

export default ItemListContainer;
