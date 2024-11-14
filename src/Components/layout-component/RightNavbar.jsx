import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';


const RightNavbar = () => {
    return (
        <div className='flex gap-y-3 flex-col'> 
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            
        </div>
    );
};

export default RightNavbar;