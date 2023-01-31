import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import SingleAppointment from '../SingleAppointment/SingleAppointment';

const AvailableAppointments = ({ selected }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatments, setTreatments] = useState({});

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, []);
    return (
        <section>
            <p className="text-center text-secondary font-bold mt-16">
                Available Services on {format(selected, 'PP')}
            </p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 lg:mx-12 my-14'>
                {
                    appointmentOptions.map(appointment => <SingleAppointment
                        key={appointment._id}
                        appointment={appointment}
                        setTreatments={setTreatments}
                    ></SingleAppointment>)
                }
                <AppointmentModal
                    date={selected}
                    treatment={treatments.name}
                    treatmentSlot={treatments.slots}
                ></AppointmentModal>
            </div>
        </section>
    );
};

export default AvailableAppointments;