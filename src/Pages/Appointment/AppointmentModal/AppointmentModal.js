import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ date, treatment, treatmentSlot, setTreatments }) => {
    const handleAppointment = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const selectDate = format(date, 'PP');

        setTreatments(null) // এখানে ডাটাবেসে পাঠানোর পরে null করবো। 
    }
    return (
        <>
            <input type="checkbox" id="appointmentModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative ">
                    <label htmlFor="appointmentModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment}</h3>

                    <form onSubmit={handleAppointment} className='grid grid-cols-1 gap-4'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full" />
                        <select className="select select-bordered w-full">
                            {
                                treatmentSlot?.map(slots => <option
                                    value={slots}
                                >{slots}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name="email" type="text" placeholder="Your Email" className="input input-bordered w-full" />
                        <input name="phone" type="text" placeholder="Your Mobile Number" className="input input-bordered w-full" />

                        <input type="submit" className="w-full btn" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;