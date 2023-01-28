import React from 'react';

const Testimonial = ({ client }) => {
    const { comment, name, img, location } = client;
    return (
        <div className='shadow-lg rounded-2xl'>
            <p className='m-[29px]'>{comment}</p>
            <div className='flex mt-9 m-[29px] items-center'>
                <img src={img} alt="" />
                <div className="px-4">
                    <h2 className="font-bold text-[#3A4256]">{name}</h2>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;