import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentBanner
                selected={selected}
                setSelected={setSelected}
            ></AppointmentBanner>
            <AvailableAppointments
                selected={selected}
            ></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;