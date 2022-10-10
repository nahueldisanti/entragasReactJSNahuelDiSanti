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
                    <div className='texto'>
                        <h2>{selectedItem.description}</h2>
                        <p>${selectedItem.price}</p>
                    </div>
                    <div className='contador'>
                        <Contador producto={selectedItem}/>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
