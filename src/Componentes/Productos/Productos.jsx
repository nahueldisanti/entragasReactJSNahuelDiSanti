import React from 'react';
import {Link} from 'react-router-dom';

const Productos = ({producto}) => {
    return (
        <div>
            <div className="card border-info mb-3" style={{maxWidth: '20rem'}}>
                <div className="card-header">{producto.category}</div>
                <div className="card-body">
                    <h4 className="card-title">{producto.name}</h4>
                    <img src= {producto.img} alt={producto.name}/>
                    <p className="card-text">{producto.descrption}</p>
                    <p>Precio:{producto.price}</p>
                </div>
                <Link to={`/detalles/${producto.id}`}>
                <button className='button button-detail'>Ver Mas Info</button>
                </Link>
            </div>
        </div>
    );
}

export default Productos;
