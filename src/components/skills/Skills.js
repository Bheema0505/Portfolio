import React from 'react'
// import './skills.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { ExperienceContaierTag, ExperienceContent, ExperienceFrontBackEnd } from './SkillsStyles';

function Skills() {
    return (
        <section id='skills'>
            <h5>What i know</h5>
            <h2> My Skills </h2>
            <ExperienceContaierTag className='container'>
                <ExperienceFrontBackEnd>
                    <h3>Front End Technologies</h3>
                    <ExperienceContent>
                        <article className='exerience__details'>
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exerience__details'>
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exerience__details'>
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                                <h4>Java Script</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exerience__details'>
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exerience__details'>
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                                <h4>React </h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exerience__details'>
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                                <h4>Redux + Saga</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exerience__details'>
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                                <h4>Jest</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exerience__details'>
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                                <h4>Git</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                    </ExperienceContent>
                </ExperienceFrontBackEnd>

                {/* end of front end */}

                <ExperienceFrontBackEnd>
                    <h3>Backend Technologies</h3>
                    <ExperienceContent>
                        <article className='exerience__details'>
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                                <h4>Mountebank</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='exerience__details'>
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exerience__details'>
                            <BsFillPatchCheckFill className='icon' />
                            <div>
                                <h4>Node.js</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>

                    </ExperienceContent>
                </ExperienceFrontBackEnd>
            </ExperienceContaierTag>
        </section>
    )
}

export default Skills;