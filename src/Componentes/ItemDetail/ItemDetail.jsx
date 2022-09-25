import React from 'react';
import Contador from '../Contador/Contador.jsx'; 
import './itemDetail.css'

const ItemDetail = ({item}) => {
    return (
        <div >
            <h1>{item.name}</h1>
            <div className="card-detail">
                <div className = "card-detail-left">
                    <img src= {item.img} alt={item.name}/>
                </div>
                <div className="card-detail-right">
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                    <Contador producto={item}/>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
