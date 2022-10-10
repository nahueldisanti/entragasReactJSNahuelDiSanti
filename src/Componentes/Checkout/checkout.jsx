import React, {useState, useContext} from 'react';
import {collection, addDoc, updateDoc, doc, increment} from 'firebase/firestore'
import {Link} from 'react-router-dom'
import db from '../../Servicios/Firebase.js'
import {CartContext} from '../../context/CartContext.js'


//Esta es la funcion mas compleja que tengo. Se que deberia modularizarla, pero esta dificil a esta altura.

const Checkout = () => { 

    const {carrito, resetearCarrito, precioTotal} = useContext(CartContext)

    const [orderId, setOrderId] = useState()

    const [comprador, setComprador] = useState({
        Nombre:'',
        Email:'',
        Telefono:''
    })

    const {Nombre, Email, Telefono}= comprador

    const generacionOrden = async(data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
            resetearCarrito()

        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (elemento) => {
        setComprador(({
            ...comprador, 
            [elemento.target.name]: elemento.target.value
        }))
    }

    const handleSubmit = (elemento) => {
        elemento.preventDefault()
        const items = carrito.map(elemento => {return {id:elemento.id, title:elemento.name, price:elemento.price, amount: elemento.cantidad}})
        const date = new Date()
        const total = precioTotal()
        const data = {comprador, items, date, total}
        generacionOrden(data)
        items.forEach(elemento => {
            actualizarStock(elemento)
        });
        
    }

    const actualizarStock = async (elemento) => {
        try {
            const items = doc(db, "productos", elemento.id);
            await updateDoc (items, {
                stock: increment(-elemento.amount)
            })} 
            catch(error) {
                console.log(error)
            }
        }


    return (
        <>
            {!orderId?
                (<div>
                    <h1>Finalizar Compra</h1>
                    <form onSubmit = {handleSubmit}>
                            <legend>Por favor, completar los siguientes datos</legend>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Nombre</label>
                                <input type='text' className="form-control"  placeholder='Nombre' name = "Nombre" value={Nombre} onChange={handleInputChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
                                <input type="email" className="form-control" id="ingresoCorreo"  placeholder="Correo" name ="Email" value={Email} onChange={handleInputChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Telefono</label>
                                <input type="tel" className="form-control" id="ingresoTelefono" placeholder="Telefono" name="Telefono" value={Telefono} onChange={handleInputChange} required/>
                            </div>
                        <button type="submit" className="btn btn-primary">Realizar Compra</button>
                    </form>
                </div>)
            :
            (<div>
                <h4>{`Su código de compra es: ${orderId}`}</h4>
                <Link to="/"><h5>Realizar otra compra</h5></Link>
            </div>)}
        </>
    );
}

export default Checkout;
