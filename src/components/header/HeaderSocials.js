import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HeaderSocialsTag } from './HeaderStyles';

function HeaderSocials() {
    return (
        <HeaderSocialsTag>
            <a href='https://www.linkedin.com/in/naga-veera-bheema-reddy/' rel='noreferrer' target='_blank'> <BsLinkedin /></a>
            <a href='https://github.com/Bheema0505' rel='noreferrer' target='_blank'> <BsGithub /></a>

        </HeaderSocialsTag>
    )
}

export default HeaderSocials