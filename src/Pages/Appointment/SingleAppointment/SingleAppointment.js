import React from 'react';

const SingleAppointment = ({ appointment, setTreatments }) => {
    const { name, slots } = appointment;
    return (
        <div className="card shadow-md">
            <div className="card-body text-center">
                <h2 className="text-title text-sky-500/75 font-bold text-2xl">{name}</h2>
                <p >{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>
                    {
                        slots.length > 0 && slots.length + ` ${slots.length > 1 ? `SPACES` : `SPACE`} AVAILABLE`
                    }
                </p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatments(appointment)} htmlFor="appointmentModal" className="btn btn-active btn-ghost">Book Appointment</label>
                </div>
            </div>
        </div >
    );
};

export default SingleAppointment;