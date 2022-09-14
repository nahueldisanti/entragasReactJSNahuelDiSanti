import React from 'react';
import Contador from './Contador.jsx'; 

const ItemDetail = ({item}) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <img src= {item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <Contador initial={1} stock ={10}/>
        </div>
    );
}

export default ItemDetail;
