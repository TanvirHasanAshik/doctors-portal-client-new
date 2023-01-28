import React from 'react';
import appointment from '../../../assets/images/appointment.png';
const ContactUs = () => {
    return (
        <section
            className='h-[604px] lg:mt-[149px] mt-[106px] flex justify-center'
            style={{ background: `url(${appointment})` }}
        >
            <div className='lg:w-[450px] lg:h-[468px] text-center mt-[65px]'>
                <h4 className="text-xl text-[#19D3AE] font-bold">Contact Us</h4>
                <h1 className="text-4xl text-white">Stay connected with us</h1>

                <div className='mt-[41px] '>
                    <input type="email" placeholder="Email Address" className="input input-bordered input-accent w-full max-w-xs mb-5" /><br />
                    <input type="text" placeholder="Address" className="input input-bordered input-accent w-full max-w-xs mb-5" />
                    <textarea className="mb-5 w-full max-w-xs textarea textarea-success" placeholder="Your Message"></textarea>
                    <div>
                        <input type="submit" className="btn btn-secondary mb-5" value="Submit" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;