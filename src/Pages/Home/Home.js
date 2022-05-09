import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import Fast from '../../Fast/Fast';
import NewBranch from '../../NewBranch/NewBranch';
import Footer from '../Footer/Footer';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Link to="/manageitems" className='fw-bold set-text btn btn-danger d-block w-25 mx-auto p-3 mb-4'>Manage Inventories</Link>
            
            <Fast></Fast>
            <NewBranch></NewBranch>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;