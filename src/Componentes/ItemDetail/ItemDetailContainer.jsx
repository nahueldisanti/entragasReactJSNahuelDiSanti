import {React, useState, useEffect} from 'react';
import ItemDetail from './ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import db from "../../Servicios/Firebase.js"

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState([]);

    const getDetail = async(idItem) => {
        try{
            const document = doc(db, 'productos', idItem)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            console.log(result)

            setSelectedItem(result)
            console.log(selectedItem)

            console.log(result)
        } catch(error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getDetail(id)
    }, [id])



    return (
        <>
            <ItemDetail item={selectedItem}/>
        </>
    );
}

export default ItemDetailContainer;
