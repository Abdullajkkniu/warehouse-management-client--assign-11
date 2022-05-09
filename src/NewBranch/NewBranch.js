import React from 'react';
import branch from '../images/new.jpg'
import './NewBranch.css'

const NewBranch = () => {
    return (
        <div>
            <h1 className='text-center my-3 fw-bold'>New Branch In Town</h1>
            <div className='container my-4 rounded h-50 design d-flex border mx-auto p-4'>
            <img className='rounded w-50' src={branch} alt="" />
            <div className='ms-4'>
                <h1>Hurry!! New branch in town</h1>
                <h6 className='mt-3'>We are going to open our new branch for warehouse. It helps us to keep more items.</h6>
                <button className='mt-5 btn btn-danger w-50'>Visit for more details</button>
            </div>
            
        </div>
        </div>
    );
};

export default NewBranch;