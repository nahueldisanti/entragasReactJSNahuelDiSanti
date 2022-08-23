import React from 'react';
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            <i className="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    );
}

export default CartWidget;
