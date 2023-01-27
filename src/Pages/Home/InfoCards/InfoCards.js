import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
const InfoCards = () => {

    const cards = [
        {
            id: 1,
            name: 'Opening Hours',
            description: '9:00 am to 5:30 pm',
            icon: clock,
            bgColor: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            id: 2,
            name: 'Visit Our Location',
            description: 'Mohammadpur Dhaka-1212',
            icon: marker,
            bgColor: 'bg-neutral'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: '01550005114',
            icon: phone,
            bgColor: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
    ];

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-6 mx-6'>
            {
                cards.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;