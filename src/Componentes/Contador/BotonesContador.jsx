import {React, useState} from 'react';
import {Link} from 'react-router-dom';


const BotonesContador = (producto) => {

    const [count, setCount] = useState(1);

    function sumar(){
        if (count < producto.stock){
        setCount(count + 1);}
    }

    function restar(){
        if (count > 1){
        setCount(count - 1);
        }}


    function agregarAlCarrito(producto) {
        const productoCarrito = {id: producto.id, cantidad: count};
        console.log(productoCarrito);
    }

    return (
    <>
        <div className = "counter-box">
            <p>Cantidad: {count}</p>
        </div>
        <div>
            <button className="btn btn-primary" onClick ={restar}> - </button>
            <button className="btn btn-success" onClick ={sumar}>+</button>
        </div>
        <div>
            <Link to='/cart'>
                <button disabled={count===0} className="btn btn-warning" onClick={() => agregarAlCarrito(producto)}>Agergar al carrito</button>
            </Link>
        </div>
    </>
)}

export default BotonesContador;
