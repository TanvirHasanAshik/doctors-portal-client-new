import React from 'react';

const OurService = ({ service }) => {
    const { name, icon, description } = service;
    return (
        <div className="card shadow-md">
            <figure className=" pt-10 ">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-[#3A4256]">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default OurService;