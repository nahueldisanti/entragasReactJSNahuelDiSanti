import React from 'react';
import Productos from './Productos';

const ProductosList = ({list}) => {
    return (
        <ul>
            {list.map( (producto) => <li key={producto.id}><Productos producto={producto}/></li>)}
        </ul>
    );
}

export default ProductosList;
