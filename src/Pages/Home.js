import React from 'react';
import SideBar from '../components/SideBar';
import TotalDataRightSide from '../components/TotalDataRightSide';

const Home = () => {

    return (
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
            <SideBar />
            <TotalDataRightSide />
        </div>
    );
};

export default Home;