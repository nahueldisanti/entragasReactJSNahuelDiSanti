import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/CartContext.js';

const Contador = ({producto}) => {

    const [count, setCount] = useState(0);
    const { agregarItem } = useCartContext()

    function sumar(){
        if (count < producto.stock){
        setCount(count + 1);}
    }

    function restar(){
        if (count > 1){
        setCount(count - 1);
        }}

    function agregarAlCarrito(producto) {
        const productoCarrito = {...producto, cantidad: count};
        agregarItem(productoCarrito)
    }


    return (

        <div className="card border-secondary mb-3" style={{maxWidth: '20rem'}}>
            <div className="card-header">Agregar al carrito</div>
                <div className="card-body">
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
                    {count>0&& <Link to="/cart" className='btn btn_item_count'>Finalizar Compra</Link>}

                </div>
            </div>
    );
}

export default Contador;
