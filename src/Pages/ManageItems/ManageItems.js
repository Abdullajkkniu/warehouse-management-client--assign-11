
import React from 'react';
import useInventoryDetail from '../../hooks/useInventoryDetail';
import './ManageItems.css'

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

        <div>
            <h1 className='text-center my-4 fw-bold'>Manage Items</h1>
            <div className='border p-3 w-50 mx-auto'>
            
            {
                inventory.map(invent => <div key={invent._id}>
                    <img className='w-100 mb-3' src={invent.img} alt="" />
                    <h4>Name: {invent.name}</h4>
                    <h5>ProductId: {invent._id}</h5>
                    <h3>Price: {invent.price}</h3>
                    <h4>Quantity: {invent.quantity}</h4>
                    <button onClick={()=>handleDelete(invent._id)} className='mb-4 btn btn-primary w-100'>Delete</button>

                </div>)
            }
        </div>
        </div>
    );
};

export default ManageItems;


