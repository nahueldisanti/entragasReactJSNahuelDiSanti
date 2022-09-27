import React from 'react';
import Contador from '../Contador/Contador.jsx'; 
import './itemDetail.css'

const ItemDetail = ({selectedItem}) => {
    return (
        <div >
            <h1>{selectedItem.name}</h1>
            <div className="card-detail">
                <div className = "card-detail-left">
                    <img src= {selectedItem.img} alt={selectedItem.name}/>
                </div>
                <div className="card-detail-right">
                    <p>{selectedItem.description}</p>
                    <p>${selectedItem.price}</p>
                    <Contador producto={selectedItem}/>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
