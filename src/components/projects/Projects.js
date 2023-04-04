import React from 'react'
// import './portfolio.css'
import anz from '../../Assets/anz.png';
import boozo from '../../Assets/Boozo.png';
import drumkit from '../../Assets/drumkit.png';
import ibsc from '../../Assets/ibsc.png';
import question from '../../Assets/question2.png';
import ExpenseAdderPNG from '../../Assets/ExpenseAdder.png'
import CocktailDBPNG from '../../Assets/CocktailDB.png'
import { ProjectsContainerTag, ProjectsItem, ProjectsItemCta, ProjectsItemImage } from './ProjectsStyles';
import MoviesDb from '../../Assets/MoviesDB.png'
import TheMenu from '../../Assets/The menu.png'
import HotelNative from '../../Assets/Hotel Native.png'

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
        Image: ExpenseAdderPNG,
        title: 'Expense Adder',
        link: 'https://nagaveera-expenseadder.netlify.app/',
        target: '_blank',
        rel: 'noreferrer',
        btn: 'Visit Page',

    },
    {
        id: 6,
        Image: CocktailDBPNG,
        title: 'Cocktail DB',
        link: 'https://nagaveera-cocktaildb.netlify.app/',
        target: '_blank',
        rel: 'noreferrer',
        btn: 'Visit Page',

    },
    {
        id: 7,
        Image: MoviesDb,
        title: 'Movies DB',
        link: 'https://nagaveera-moviesdb.netlify.app/',
        target: '_blank',
        rel: 'noreferrer',
        btn: 'Visit Page',

    },
    {
        id: 8,
        Image: HotelNative,
        title: 'Hotel Native',
        link: 'https://nagaveera-hotelnative.netlify.app/',
        target: '_blank',
        rel: 'noreferrer',
        btn: 'Visit Page',

    },
    {
        id: 9,
        Image: TheMenu,
        title: 'The Menu',
        link: 'https://nagaveera-themenu.netlify.app/',
        target: '_blank',
        rel: 'noreferrer',
        btn: 'Visit Page',

    },
    {
        id: 10,
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