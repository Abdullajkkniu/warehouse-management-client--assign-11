// import React, { useState } from 'react';
// import { Table } from 'react-bootstrap';
// import { NavLink } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import useInventoryDetail from '../../hooks/useInventoryDetail';

// import './ManageItem.css'

// const ManageItem = (props) => {
//     const [inventory] = useInventoryDetail()
//     const { _id, name, img, description, price } = props.manageItem;
//     // const navigate = useNavigate();
//     // const navigateToInventoryDetail = id => {
//     //     navigate(`/inventoryitems/${id}`)
//     // }
//     const handleDelete = id =>{
//         const proceed = window.confirm('Are you sure to delete the item?');
//         if(proceed){
//             const url = `http://localhost:5000/inventories/${id}`;
//             fetch(url, {
//                 method: 'DELETE'
//             })
//             .then(res => res.json())
//             .then(data=> {
//                 console.log(data)
//             })

//         }
//     }
//     return (
//         <div>
// <div className='border mb-4 pb-5 text-center'>
//             <img className='image-size' src={img} alt="" />
//             <h2 className='pt-2'>Type: {name}</h2>
//             <p>Description: {description}</p>
//             <p>Id: {_id}</p>
//             <h2 className='pb-2'>Only : {price}</h2>
//             <button onClick={() =>handleDelete(inventory._id) }>
//                 Delete
//             </button>
//         </div>
        
//         </div>
        
//     );
// };

// export default ManageItem;