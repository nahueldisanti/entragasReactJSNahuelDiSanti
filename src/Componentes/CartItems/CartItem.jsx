import React, {useContext} from 'react';
import {CartContext} from '../../context/CartContext.js'

const CartItem = ({item}) => {
    
    const {borrarItem} = useContext(CartContext);
    
    return (

        <>
            <div className="card border-info mb-3" style={{maxWidth: '440px'}}>
                <div className='card-header'>
                    <div className='card-body'>
                        <img src={item.img} className='img-fluid rounded-start' alt={item.name}/>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            <p className='card-text'>Cantidad agregada al carrito: {item.cantidad}</p>
                            <p className='card-text'>Precio: {item.price}</p>
                            <button className='btn btn-warning' onClick={()=>borrarItem(item.id)}>Eliminar Producto</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;
