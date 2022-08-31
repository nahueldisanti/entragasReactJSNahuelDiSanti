import React from 'react';
import Productos from './Productos';

const ProductosList = ({list}) => {
    return (
        <ul>
            {list.map( (producto) => <li><Productos producto={producto}/></li>)}
        </ul>
    );
}

export default ProductosList;
