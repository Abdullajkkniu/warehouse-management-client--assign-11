import React from 'react';
import { NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Inventory.css';

const Inventory = (props) => {
    const {_id, name, img, description, price} = props.inventory;
    const navigate = useNavigate();
    const navigateToInventoryDetail = id =>{
        navigate(`/inventoryitems/${id}`)
    }
    return (
        <div className=' single-service mb-4 pb-5 text-center'>
            <img className='image-size' src={img} alt="" />
            <h2 className='pt-2'>Type: {name}</h2>
            <p>Description: {description}</p>
            <h2 className='pb-2'>Only : {price}</h2>
            <button onClick={()=>navigateToInventoryDetail(_id)}>
                Update
            </button>

        </div>
    );
};

export default Inventory;