import React from 'react';
import chair from '../../../../src/assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
const Banner = () => {
    return (
        <div className="hero " style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse md:my-[107px] lg:my-[150px]">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl " alt='' />
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold text-[#3A4256]">Your New Smile Starts Here</h1>
                    <p className="py-6 text-[#3A4256]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn border-none bg-gradient-to-r from-purple-500 to-pink-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;