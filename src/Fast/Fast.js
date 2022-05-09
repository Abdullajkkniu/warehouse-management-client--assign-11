import React from 'react';
import './Fast.css';
import delivery from '../images/deli.webp';

const Fast = () => {
    return (
        <div>
            <h1 className='text-center fw-bold my-5'>Super Speedy Delivery!</h1>
            <div className='border p-3 rounded container d-flex mx-auto my-5'>
            <div className='div1 rounded p-3 bg-light'>
            <h1>EXACT SHEDULE</h1>
            <h4>Every customer expect to fast, and free delivery. To fulfill their demand, we always try to provide fast and free delivery. WE commited to every customers</h4> 
            <button className='my-3 btn btn-danger'>Exact Shedule delivery</button>
            <br /><br />
            <h1>90%</h1>
            <h1>Fast delivery</h1>
            <h6>We delivered our items 90% faster than any warehouse company</h6>

            </div>
            <div className='div2 p-3 rounded bg-light'>
            <img className='w-100 mb-3 rounded' src={delivery} alt="" />
            <h3>Deliverd systems</h3>
            <h1>Most speedy delivery systems that we maintain</h1>
            </div>
        </div>
        </div>
    );
};

export default Fast;