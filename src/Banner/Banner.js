import React from 'react';
import banner1 from  '../images/man-talking-camera-recording-him.jpg';
import '../Banner/Banner.css';

const Banner = () => {
    return (
        <div className='background-set'>
            <img className='w-100'  src={banner1} alt="" />
            <div className='container text-setup'>
            <h1 className='text-sizes'>Best Photography</h1>
            <h1 className='text-sizes'>What You Want</h1>
            <p className='p-size'>Photopraphy is like something visual literature. When You </p>
            <p className='p-size'> shoot, You do something great : You build ones dream.</p>
            <button className='px-4 button-style'>DISCOVER</button>
            </div>
        </div>
    );
};

export default Banner;