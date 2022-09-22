import React, {createContext, useContext, useState} from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([]);

    const agregarItem = (itemAgregar) => {

        let itemCantidad = {itemAgregar, cantidad: itemAgregar.cantidad};

        const itemEncontrado = carrito.find(
            (item) => item.id === itemAgregar.id
        )
        console.log(itemEncontrado)
        if (itemEncontrado) {
            itemCantidad = {itemAgregar, cantidad:itemEncontrado.cantidad + itemAgregar.cantidad};
            setCarrito(...carrito, itemCantidad)
        
        }else {
            setCarrito([...carrito], itemCantidad);
        }

    }
    
    const resetearCarrito = () => {
        setCarrito([]);
    };

    const borrarItem = (id) => {
        setCarrito( carrito.filter((item) => item.id !== id));
    };


    return (

        <>
            <CartContext.Provider value={{carrito, resetearCarrito, agregarItem, borrarItem}}>{children}</CartContext.Provider>
        </>
    );
}


