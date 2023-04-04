import React from 'react'
import Typewriter from 'typewriter-effect';
import CTA from './CTA';
import picture from '../../Assets/picture.jpg';
import HeaderSocials from './HeaderSocials';
import { HeaderCont, HeaderTag, MeTag, ScrollDownTag } from './HeaderStyles';


function Header() {
    return (
        <HeaderTag>
            <HeaderCont className='container' id='home' >
                <h5> Hello I'm</h5>
                <h1> Naga Veera</h1>
                <h5 className='text-light'>
                    <Typewriter
                        options={{
                            strings: ['Web Developer', 'Front-end Developer'],
                            autoStart: true,
                            loop: true,
                            delay: 200,
                        }}
                    />
                </h5>

                <CTA />
                <HeaderSocials />
                <MeTag>
                    <img src={picture} alt='personalPhoto' />
                </MeTag>
                <ScrollDownTag href='#contact'> Scroll Down </ScrollDownTag>

            </HeaderCont>


        </HeaderTag>
    )
}

export default Header