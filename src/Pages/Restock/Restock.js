import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Restock = () => {
    const {inventoryId} = useParams();
const [inventory, setInventory] = useState({});
const [restock, setRestock]= useState(5);

const handleRestock =(e)=>{
    e.preventdefault();
    if(restock ){
        setRestock(restock+1);
    }
    else{
        setRestock('sold');
    }

}



useEffect(()=>{
    const url = `http://localhost:5000/inventories/${inventoryId}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>setInventory(data))
    },[inventoryId])


    return (
        <div>
            
            <h2 className='text-center my-4'>Please Restock</h2>
            <form onClick={handleRestock}>
            <input className='w-25 p-1 rounded mx-auto d-block' type="number" placeholder='Add numbers of stock' required />
            <button className='btn btn-primary w-25 d-block mt-3 mx-auto'>Add</button>
            </form>
            <div className='border w-50 my-4 p-3 rounded mx-auto'>
            <h2>Item Detail: {inventory.name}</h2>
            <p>{inventory._id}</p>
            <p>{inventory.description}</p>
            <p>{inventory.price}</p>
            <h3>Quantity:{restock}</h3>
            </div>

        </div>
    );
};

export default Restock;