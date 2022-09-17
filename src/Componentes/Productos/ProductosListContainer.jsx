import {React, useState, useEffect} from 'react';
import produdata from '../../data/productosdata';
import ProductosList from './ProductosList';
import {useParams} from 'react-router-dom';

const ProductosListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();

    useEffect(() => {

        const getProductosData = new Promise((res, rej) =>{
            if(categoria){
                setTimeout(() => {
                    res(produdata.filter(item => item.category === categoria))
                    }, 2000);
            } else{
                setTimeout(() => { res(produdata)}, 2000);}
        });

        getProductosData.then((res) => setProductos(res));

    }, [categoria]);

    return (
        <>
        <ProductosList list={productos}/>
        </>
    );
}

export default ProductosListContainer;
