import React from 'react';
import {Link} from 'react-router-dom';

const Productos = ({producto}) => {
    return (
    <div>
        <div className="card border-info mb-3 mt-3 cardStyle " style={{maxWidth: '20rem'}}>
            <div className="card-header">{producto.category}</div>
            <div className="card-body">
                <h4 className="card-title">{producto.name}</h4>
                <img src= {producto.img} alt={producto.name} className='card-img-top'/>
                <p className="card-text">{producto.descrption}</p>
                <p>${producto.price}</p>
            </div>
            <div className="modal-footer">
                <Link to={`/detalles/${producto.id}`}>
                <button className='btn btn-info'>Ver Mas Info</button>
                </Link>
            </div>
        </div>
    </div>
    );
}

export default Productos;



