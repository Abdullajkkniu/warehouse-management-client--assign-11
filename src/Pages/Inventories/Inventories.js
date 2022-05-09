import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Inventory from './Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/inventories')
        .then(res =>res.json())
        .then(data => setInventories(data));
    }
        ,[])
    return (
        <div>

            <h1 className='text-center my-4 fw-bold '>Inventory</h1>
            <div className='container services-size'>
            {
                inventories.slice(0,6).map(inventory=> <Inventory key={inventory._id} inventory={inventory}></Inventory> )
            }
            </div>
        </div>
    );
};

export default Inventories;