import {React, useState, useEffect} from 'react';
import produdata from '../data/productosdata';
import ProductosList from './ProductosList';

const ProductosListContainer = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {

        const getProductosData = new Promise((res, rej) =>{
            setTimeout(() => {
            res(produdata)
            }, 2000);
        });

        getProductosData.then((res) => setProductos(res));

    }, []);

    return (
        <>
        <ProductosList list={productos}/>
        </>
    );
}

export default ProductosListContainer;
