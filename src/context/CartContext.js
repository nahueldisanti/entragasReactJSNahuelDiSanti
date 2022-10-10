import React, {createContext, useContext, useState} from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([]);

    const agregarItem = (itemAgregar) => {

        const itemEncontrado = carrito.find(
            (item) => item.id === itemAgregar.id
        )
        if (itemEncontrado) {
                itemEncontrado.cantidad += itemAgregar.cantidad
                setCarrito([...carrito]);
        }else {
            setCarrito([...carrito, itemAgregar]);

        }
    }

    const resetearCarrito = () => {
        setCarrito([]);
    };

    const borrarItem = (id) => {
        setCarrito( carrito.filter((item) => item.id !== id));
    };

    const cantidadItems = () => {
        let cantidad = 0
        carrito.forEach((item) => cantidad += item.cantidad)
        return cantidad
    }

    const precioTotal= () => {
        let precio = 0
        carrito.forEach((item) => precio += (item.price * item.cantidad) )
        return precio
    }


    return (

        <>
            <CartContext.Provider value={{carrito, resetearCarrito, agregarItem, borrarItem, cantidadItems, precioTotal}}>{children}</CartContext.Provider>
        </>
    );
}


