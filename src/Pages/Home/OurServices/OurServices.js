import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import OurService from './OurService';
const OurServices = () => {

    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            icon: fluoride,
            description: 'Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop it from getting worse. Fluoride varnish is made with fluoride, a mineral that can strengthen tooth enamel (outer coating on teeth). Keep in mind that fluoride varnish treatments cannot completely prevent cavities.'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            icon: cavity,
            description: 'Although some of the materials are strong and durable, none are considered permanent. This means that fillings do not last forever. One of the main factors that determine how long a filling lasts is the material used to fill the tooth. Gold and amalgam often last the longest.'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            icon: whitening,
            description: 'We all want a white brighter smile. But this begs the question “does teeth whitening damage the enamel?” The answer is no. While there may sometimes be side effects, whitening treatment is safe on tooth enamel. The process of tooth whitening is essentially the tooth will become dehydrated, meaning dried out.'
        }
    ];
    return (
        <div>
            <div className="mt-[131px] mb-[70px] text-center ">
                <h4 className="text-[#19D3AE] font-bold">OUR SERVICES</h4>
                <h1 className="text-xl ">SERVICES WE PROVIDE</h1>
            </div>
            <div className="grid gap-8 mx-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                {
                    services.map(service => <OurService
                        key={service.id}
                        service={service}
                    ></OurService>)
                }
            </div>
        </div>
    );
};

export default OurServices;