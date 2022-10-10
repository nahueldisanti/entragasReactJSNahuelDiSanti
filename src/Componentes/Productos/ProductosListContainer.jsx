import {React, useState, useEffect} from 'react';
import ProductosList from './ProductosList';
import {useParams} from 'react-router-dom';
import db from '../../Servicios/Firebase.js'
import { collection, getDocs, query, where} from 'firebase/firestore'

const ProductosListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();


    const getData = async (category) =>{

        try{

        const document = category ? query(collection(db,"productos"),where('category', '==', category))
                                    :collection(db, "productos")
        const col = await getDocs(document)
        const result = col.docs.map((doc) => doc ={id:doc.id,...doc.data()})
        setProductos(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData(categoria)
    }, [categoria])

    return (
        <>
        <ProductosList list={productos}/>
        </>
    );
}

export default ProductosListContainer;
