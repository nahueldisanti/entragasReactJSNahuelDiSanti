import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext.js';
import CartItem from '../CartItems/CartItem.jsx'
import {Link} from 'react-router-dom'

const CartView = () => {

    const{carrito, resetearCarrito} = useContext(CartContext);

    return (
        <div>
            <h1>Carrito</h1>
            <hr/>
            { carrito.length !==0 ? (
                    <div>
                        <div>
                            {carrito.map((producto) => <CartItem key={producto.id} item={producto}/>)}
                        </div>
                        <button className="btn btn-danger" onClick={resetearCarrito}>Vaciar Carrito</button>
                    </div>
                ) : (
                    <div>
                        <h1>No hay nada en tu carrito !</h1>
                        <Link to = '/'>Tienda</Link>
                    </div>)}
        </div>
    );
}

export default CartView;
