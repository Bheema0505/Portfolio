import React from 'react'
import CV from '../../Assets/React_Dev_Naga_Veera_Bheema_Reddy.pdf';
import { ContactLinks } from './HeaderStyles';

function CTA() {
    return (
        <ContactLinks >
            <a href={CV} download className='btn'> Download CV</a>
            <a href='#contact' className='btn btn-primary'> Let's Connect</a>
        </ContactLinks>
    )
}

export default CTA;