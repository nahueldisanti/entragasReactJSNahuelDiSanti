import {React, useState} from 'react';

const Contador = ({stock, onAdd, initial}) => {
        const [count, setCount] = useState(initial);

        function sumar(){
            if (count < stock){
            setCount(count + 1);}
        }

        function restar(){
            if (count > initial){
            setCount(count - 1);
            }}

        function resetear(){
            setCount(initial);
        }

    return (
        <div className="card border-secondary mb-3" style={{maxWidth: '20rem'}}>
            <div className="card-header">Aniadir al carrito</div>
            <div className="card-body">
                <div className = "counter-box">
                    <p>Stock: {stock}</p><p>Cantidad: {count}</p>
                </div>

                <div>
                    <button className="btn btn-primary" onClick ={restar}> - </button>
                    <button className="btn btn-success" onClick ={sumar}>+</button>
                    <button className="btn btn-info" onClick ={resetear}>Resetear</button>
                </div>

                <div>
                    <button disabled={count===0} className="btn btn-warning" onClick={() => onAdd(count)}>Aniadir al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Contador;
