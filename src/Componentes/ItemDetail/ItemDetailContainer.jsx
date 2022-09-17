import {React, useState, useEffect} from 'react';
import produdata from '../../data/productosdata.js';
import ItemDetail from './ItemDetail.jsx';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState({})

    const getDetail = () => new Promise ((res, rej) => {
        setTimeout(() => res(produdata.find(producto => producto.id === Number(id))), 2000)
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
