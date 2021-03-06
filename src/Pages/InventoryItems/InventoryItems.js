import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';



const InventoryItems = () => {
const {inventoryId} = useParams();
const [inventory, setInventory] = useState({});
const [delivered, setDelivered]= useState(50);
const handleDelivered =()=>{
    if(delivered >1){
        setDelivered(delivered-1);
    }
    else{
        setDelivered('sold');
    }

}


useEffect(()=>{
const url = `http://localhost:5000/inventories/${inventoryId}`;
fetch(url)
.then(res => res.json())
.then(data =>setInventory(data))
},[inventoryId])
// const [inventory] = useInventoryDetail(inventoryId);

    return (
        <div>
            <div className='border w-50 mx-auto p-4 mt-3'>
            <img className='w-100 mb-3' src={inventory.img} alt="" />
            <h2>Name: {inventory.name}</h2>
            <h6>ProductId: {inventory._id}</h6>
            <h5>Description: {inventory.description}</h5>
            <h3>Price: {inventory.price}</h3>

            <div>
                
                <h3>Quantity: {delivered}</h3>
                <div className='d-flex'>
                <Link to={`/restock/${inventoryId}`}>
                <button onClick={handleDelivered} className="btn btn-primary">
                    Restock
                </button>
                </Link>
                <button onClick={handleDelivered} className="btn btn-primary ms-5">
                    Delivered
                </button>
                </div>
            </div>
            </div>
            

            
        </div>
    );
};

export default InventoryItems;