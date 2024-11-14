import React from 'react';
import SubHeader from '../Components/SubHeader';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/layout-component/LeftNavbar';
import RightNavbar from '../Components/layout-component/RightNavbar';
import Main from '../Components/layout-component/Main';




const Home = () => {
    return (
        <div className='flex flex-col gap-y-3'>
            <header>
                <SubHeader></SubHeader>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav  className='w-11/12 mx-auto'>
            <Navbar></Navbar></nav>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-3'>
                <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
                <section className='col-span-6'><Main></Main></section>
                <aside className='col-span-3'><RightNavbar></RightNavbar></aside>
            </main>

        </div>
    );
};

export default Home;