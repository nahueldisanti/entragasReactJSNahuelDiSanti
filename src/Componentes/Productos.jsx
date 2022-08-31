import React from 'react';

const Productos = ({producto}) => {
    return (
        <div>
            <div className="card border-info mb-3" style={{maxWidth: '20rem'}}>
                <div className="card-header">{producto.category}</div>
                <div className="card-body">
                    <h4 className="card-title">{producto.name}</h4>
                    <img width src= {producto.img} alt={producto.name}/>
                    <p className="card-text">{producto.descrption}</p>
                    <p>Precio:{producto.price}</p>
                </div>
            </div>
        </div>
    );
}

export default Productos;
