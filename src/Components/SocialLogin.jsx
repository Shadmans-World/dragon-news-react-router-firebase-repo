import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className='flex flex-col gap-y-3'>
            <h2 className='font-semibold '>Login with</h2>
            <div className="button flex flex-col gap-2 ">
                <button className='flex gap-2 items-center btn'><FaGoogle />Login with Google</button>
                <button className='btn flex gap-2 items-center'><FaGithub />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;