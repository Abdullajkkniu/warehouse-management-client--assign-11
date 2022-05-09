
import React from 'react';
import useInventoryDetail from '../../hooks/useInventoryDetail';

const ManageItems = () => {
    const [inventory, setInventory] = useInventoryDetail();

    const handleDelete = id =>{
        const proceed = window.confirm('are you sure to delete');
        if(proceed){
            const url = `http://localhost:5000/inventories/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                const remaining = inventory.filter(invent =>invent._id !==id);
                setInventory(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>manage your inventories</h2>
            {
                inventory.map(invent => <div key={invent._id}>
                    <img className='w-100 mb-3' src={invent.img} alt="" />
                    <h4>{invent.name}</h4>
                    <p>{invent._id}</p>
                    <p>{invent.price}</p>
                    <p >{invent.quantity}</p>
                    <button onClick={()=>handleDelete(invent._id)} className='mb-4 btn btn-primary w-100'>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageItems;


// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Inventory from '../Inventories/Inventory';

// import ManageItem from './ManageItem';
// import './ManageItems.css';

// const ManageItems = () => {
//     const [manageItems, setmanageItems] =useState([]);
//     useEffect(()=>{
//         fetch('http://localhost:5000/inventories')
//         .then(res =>res.json())
//         .then(data => setmanageItems(data));
//     }
//         ,[])
//     return (
//         <div>
            

//             <h1 className='text-center my-3'>Manage Items</h1>
//             <div className='container tables'>
//             {
//                 manageItems.map(manageItem=> <ManageItem key={manageItem._id} manageItem={manageItem}></ManageItem>
                
//                 )
                
//             }
//             </div>
//             <Link to="/additems" className='btn btn-primary w-25 d-block mx-auto p-3 my-4'>Add New Items</Link>
//         </div>
//     );
// };

// export default ManageItems;