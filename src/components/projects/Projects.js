import React from 'react'
// import './portfolio.css'
import anz from '../../Assets/anz.png';
import boozo from '../../Assets/Boozo.png';
import drumkit from '../../Assets/drumkit.png';
import ibsc from '../../Assets/ibsc.png';
import question from '../../Assets/question2.png';
import { ProjectsContainerTag, ProjectsItem, ProjectsItemCta, ProjectsItemImage } from './ProjectsStyles';


const projetcsData = [
    {
        id: 1,
        Image: anz,
        title: 'ANZ',
        link: 'https://www.anz.co.nz/personal/',
        target: '_blank',
        rel: 'noreferrer',
        btn: 'Visit Page',

    },
    {
        id: 2,
        Image: ibsc,
        title: 'IBSC',
        link: 'https://github.com/Bheema0505/ANZ-IBSC',
        btn: 'Source Code',
        target: '_blank',
        rel: 'noreferrer',

    },
    {
        id: 3,
        Image: boozo,
        title: 'BOOZO',
        link: 'https://github.com/Bheema0505/Boozo',
        target: '_blank',
        rel: 'noreferrer',
        btn: 'Source Code',

    },
    {
        id: 4,
        Image: drumkit,
        title: 'DRUM KIT',
        link: 'https://github.com/Bheema0505/DrumKit',
        target: '_blank',
        rel: 'noreferrer',
        btn: 'Source Code',

    },

    {
        id: 5,
        Image: question,
        title: 'Your Project',
        link: '#contact',
        target: '',
        rel: '',
        btn: 'Hire Me',


    },
]


function Projects() {
    return (
        <section id='projects'>
            <h5> What i had done</h5>
            <h2>My Recent Work</h2>

            <ProjectsContainerTag className='container'>
                {projetcsData.map((item) => {
                    return (
                        <ProjectsItem key={item.id}>
                            <h3>{item.title}</h3>
                            <ProjectsItemImage>
                                <img src={item.Image} alt='anzProject' />
                            </ProjectsItemImage>
                            <ProjectsItemCta>
                                <a href={item.link} target={item.target} rel={item.rel} className='btn' >{item.btn}</a>
                            </ProjectsItemCta>
                        </ProjectsItem>
                    )
                })}
                {/* <article className='portfolio__item'>
                    <h3>ANZ</h3>
                    <div className='portfolio__item-image'>
                        <img src={anz} alt='anzProject' />
                    </div>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/Nagaveer' className='btn'> GitHub Code</a>
                        <a href='https://github.com/Nagaveer' className='btn btn-primary'> Hire me !</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <h3>IBSC</h3>
                    <div className='portfolio__item-image'>
                        <img src={ibsc} alt='ibscProject' />
                    </div>

                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/Nagaveer' className='btn'> GitHub Code</a>
                        <a href='https://github.com/Nagaveer' className='btn btn-primary'> Hire me !</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <h3>Boozo</h3>
                    <div className='portfolio__item-image'>
                        <img src={boozo} alt='boozoProject' />
                    </div>

                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/Nagaveer' className='btn'> GitHub Code</a>
                        <a href='https://github.com/Nagaveer' className='btn btn-primary'> Hire me !</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <h3>DRUM KIT</h3>
                    <div className='portfolio__item-image'>
                        <img src={drumkit} alt='drumkitProject' />
                    </div>

                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/Nagaveer' className='btn'> GitHub Code</a>
                        <a href='https://github.com/Nagaveer' className='btn btn-primary'> Hire me !</a>
                    </div>
                </article> */}

            </ProjectsContainerTag>
        </section>
    )
}

export default Projects;