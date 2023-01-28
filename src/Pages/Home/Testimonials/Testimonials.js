import React from 'react';
import people1 from '../../../assets/images/people1.png';
import Testimonial from './Testimonial';
const Testimonials = () => {
    const clients = [
        {
            id: 1,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            img: people1,
            location: 'California'
        },
        {
            id: 2,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            img: people1,
            location: 'California'
        },
        {
            id: 3,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            img: people1,
            location: 'California'
        }
    ]
    return (
        <section className='h-[514x] mx-[56px] lg:mt-[84px]'>
            <div>
                <h1 className='font-bold text-xl text-[#19D3AE]'>Testimonials</h1>
                <h1 className="text-4xl mt-[10px]">What Our Patients Says</h1>
            </div>
            <div className="mt-[146px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    clients.map(client => <Testimonial
                        key={client.id}
                        client={client}
                    ></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;