import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import Footer from '../Footer/Footer';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Link to="/manageitems" className='set-text btn btn-primary d-block w-25 mx-auto p-3 mb-4'>Manage Inventories</Link>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;