import React from 'react'
// import './footer.css';
import { BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs';
import { FooterCopyRight, FooterSocialLinksUlTag, FooterSocials, FooterTag } from './FooterStyles';


function Footer() {
    return (
        <FooterTag>
            <a href='#none' className='footer__logo'> PNV Bheema Reddy</a>
            <FooterSocialLinksUlTag>
                <li> <a href='#home'>Home</a></li>
                <li> <a href='#about'>About</a></li>
                <li> <a href='#skills'>Skills</a></li>
                <li> <a href='#services'>Services</a></li>
                <li> <a href='#projects'>Projects</a></li>
                <li> <a href='#testimonials'>Testimonials</a></li>
                <li> <a href='#contact'>Contact</a></li>
            </FooterSocialLinksUlTag>
            <FooterSocials>

                <a href="https://www.instagram.com/chota_._bheem_/" rel='noreferrer' target='_blank'> <BsInstagram /></a>
                <a href="https://t.me/Naga_Veera_Bheema_Reddy_Pucha" rel='noreferrer' target='_blank'> <BsTelegram /></a>
                <a href="https://twitter.com/nagaveera_pucha" rel='noreferrer' target='_blank'> <BsTwitter /></a>

            </FooterSocials>
            <FooterCopyRight>
                <small>&copy; Pucha Naga Veera Bheema Reddy</small>

            </FooterCopyRight>
        </FooterTag>
    )
}

export default Footer