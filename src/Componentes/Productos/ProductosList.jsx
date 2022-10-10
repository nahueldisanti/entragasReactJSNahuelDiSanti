import React from 'react';
import Productos from './Productos';

const ProductosList = ({list}) => {
    return (
        <div className='row'>
            <div className=' justify-content-evenly'>
                {list.map( (producto) => <Productos key={producto.id} producto={producto}/>)}
            </div>
        </div>
    );
}

export default ProductosList;
