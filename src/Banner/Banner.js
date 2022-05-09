import React from 'react';
import banner1 from  '../images/warehouse.jpg';
import '../Banner/Banner.css';

const Banner = () => {
    return (
        <div className='background-set'>
            <img className='w-100'  src={banner1} alt="" />
            <div className='container text-setup'>
            <h1 className='text-sizes'>Best Warehouse</h1>
            <h1 className='text-sizes'>In Your Town</h1>
            <br />
            <p className='p-size'>We always try to stock most demanding food items in all time</p> <br />
            <p className='p-size'>It helps us to supply food who are really want to get good food</p> <br />
            <button className='px-4 button-style'>DISCOVER</button>
            </div>
        </div>
    );
};

export default Banner;