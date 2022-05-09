import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    
    return (
        <div className='copy'>
            <p className='text-center'><small>Copyright © {year} My-warehouse</small></p>
        </div>
    );
};

export default Footer;