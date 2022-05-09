import React from 'react';
import { NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Inventory.css';

const Inventory = (props) => {
    const {_id, name, img, description, price,supplier,quantity, status} = props.inventory;
    const navigate = useNavigate();
    const navigateToInventoryDetail = id =>{
        navigate(`/inventoryitems/${id}`)
    }
    return (
        <div className='border single-service mb-4 pb-5 text-center'>
            <img className='image-size' src={img} alt="" />
            <h2 className='pt-2'>{name}</h2>
            <h5>Supplier : {supplier}</h5>
            <h5>Description : {description}</h5>
            <h5>Status: {status}</h5>
            <h5>quantity: {quantity}</h5>
            <h3 className='pb-2'>Only : {price}</h3>
            <button className='btn btn-success' onClick={()=>navigateToInventoryDetail(_id)}>
                Update
            </button>

        </div>
    );
};

export default Inventory;