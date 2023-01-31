import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Appointment = ({ selected, setSelected }) => {

    return (
        <div className="hero">
            <div className="hero-content mt-[100px]  flex-col lg:flex-row-reverse">
                <img className='lg:w-1/2' src={chair} alt='' />
                <div className='lg:w-1/2 flex justify-center'>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
        </div>
    );
};

export default Appointment;