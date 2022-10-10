import React, {useContext} from 'react';
import './CartWidget.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import carritoLogo from '../../assets/carro-de-la-carretilla.png'


const CartWidget = () => {

    const {cantidadItems} = useContext(CartContext)
    
    return (
        <>
            <Link to='/cart' style={{border: 'none', marginLeft: 16, marginRight: 24 }}>
            <img src={carritoLogo} alt="cart" width={32} height={32} />
                {
                    cantidadItems()>0&&<button className="btn btn-primary btn-sm">{cantidadItems()}</button>
                }
            </Link>
        </>
    );
}

export default CartWidget;
