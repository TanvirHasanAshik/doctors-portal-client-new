import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Exceptional from '../Exceptional/Exceptional';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurServices from '../OurServices/OurServices';
import Testimonials from '../Testimonials/Testimonials';
const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <OurServices></OurServices>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;