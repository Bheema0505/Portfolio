import React, { useState } from 'react'
// import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { FiBook } from 'react-icons/fi';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';
import { TbSchool } from 'react-icons/tb';
import { NavTag } from './NavStyles';

function Nav() {

    const [activeNav, setActiveNav] = useState('#');

    return (
        <NavTag>
            <a href='#home' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /></a>
            <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}> <FiBook /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <MdWork /></a>
            <a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}> <TbSchool /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageRoundedDots /></a>
        </NavTag>
    )
}

export default Nav