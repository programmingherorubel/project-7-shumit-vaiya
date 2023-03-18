import React from 'react';
import Header from './Header';
import JobLists from './JobLists';

const TotalDataRightSide = () => {
    return (
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <Header />
                <JobLists/>
            </main>
        </div>
    );
};

export default TotalDataRightSide;