import React from 'react';
import treatment from '../../../assets/images/treatment.png';
const Exceptional = () => {
    return (
        <div className="hero">
            <div className="hero-content lg:mt-[154px] mt-[56] flex-col lg:flex-row flex justify-around">
                <img src={treatment} className="lg:w-[458px] lg:h-[576px] rounded-lg shadow-2xl" alt='treatment...' />
                <div className="lg:w-1/2">
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn border-none bg-gradient-to-r from-purple-500 to-pink-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;