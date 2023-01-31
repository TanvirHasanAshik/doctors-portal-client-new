import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ date, treatment, treatmentSlot }) => {
    return (
        <>
            <input type="checkbox" id="appointmentModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative ">
                    <label htmlFor="appointmentModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment}</h3>

                    <form className='grid grid-cols-1 gap-4'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full" />
                        <select className="select select-bordered w-full">
                            {
                                treatmentSlot?.map(slots => <option
                                    value={slots}
                                >{slots}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="submit" className="w-full btn" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;