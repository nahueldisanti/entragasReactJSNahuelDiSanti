import {React, useState, useEffect} from 'react';
import produdata from '../data/productosdata';
import ItemDetail from './ItemDetail.jsx';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const getDetail = () => new Promise ((res, rej) => {
        setTimeout(() => res(produdata.find(producto => producto.id === 1)), 2000)
    })

    useEffect(() => {
        getDetail()
        .then(respuesta => setItem(respuesta))
    }, [])

    return (
        <>
            <ItemDetail item={item}/>
        </>
    );
}

export default ItemDetailContainer;
