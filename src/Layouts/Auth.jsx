import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Auth = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#F3F3F3]">
            {/* Navbar */}
            <header className="py-3 mx-auto w-11/12">
                <Navbar />
            </header>
            {/* Content */}
            <main className="flex-grow flex items-center justify-center">
                <Outlet />
            </main>
        </div>
    );
};

export default Auth;
