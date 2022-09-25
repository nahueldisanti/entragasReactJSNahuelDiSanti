import React, {useContext} from 'react';
import './CartWidget.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {

    const {cantidadItems} = useContext(CartContext)
    
    return (
        <>
            <Link to='/cart'>
                {
                    cantidadItems()>0&&<button>{cantidadItems()}</button>
                }
            </Link>
        </>
    );
}

export default CartWidget;
