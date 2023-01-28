import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
const MakeAppointment = () => {
    return (
        <section className='lg:mt-[272px] mt-[70px] lg:h-[500px]'
            style={{ background: `url(${appointment})` }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" -mt-[132px] lg:w-1/2 hidden md:block rounded-lg " alt='' />
                    <div className="lg:w-1/2">
                        <h2 className='text-[#19D3AE] text-xl font-bold'>Appointment</h2>
                        <h1 className="text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn border-none bg-gradient-to-r from-purple-500 to-pink-500">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;