import React from 'react'
// import './services.css'
import { BsCheckLg } from 'react-icons/bs'
import { ServiceArticleTag, ServiceListUlTag, ServicesContainer, ServicesHeadTag } from './ServicesStyles'

function Services() {
    return (
        <section id='services'>
            <h5>What i offer</h5>
            <h2>Services</h2>
            <ServicesContainer className='container'>
                {/* <ServiceArticleTag>
                    <ServicesHeadTag>
                        <h3>UI / UX Design</h3>
                    </ServicesHeadTag>
                    <ServiceListUlTag>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Logo Designing</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>WireFrame Designing</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>In seeing a sample of lorem ipsum,</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>In seeing a sample of lorem ipsum,</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>In seeing a sample of lorem ipsum,</p>
                        </li>
                    </ServiceListUlTag>
                </ServiceArticleTag> */}

                {/* end of UI/UX */}

                <ServiceArticleTag>
                    <ServicesHeadTag>
                        <h3>Web Development</h3>
                    </ServicesHeadTag>
                    <ServiceListUlTag>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Creating effectively tested, re-usable and efficient JavaScript code</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Implementing beautiful, responsive and user-friendly web applications</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Enhancing performance of the application</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Adopting new skills, that are required for the project </p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Working collaberatively with a team in an Agile environment</p>
                        </li>
                    </ServiceListUlTag>
                </ServiceArticleTag>

                {/* end of Web Development */}

                <ServiceArticleTag>
                    <ServicesHeadTag>
                        <h3>UI/UX Design </h3>
                    </ServicesHeadTag>
                    <ServiceListUlTag>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Logo Making </p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Wireframe Designing</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Colour Theory</p>
                        </li>
                        {/* <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>In seeing a sample of lorem ipsum,</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>In seeing a sample of lorem ipsum,</p>
                        </li> */}
                    </ServiceListUlTag>
                </ServiceArticleTag>

                {/* end of Content Creation */}



            </ServicesContainer>
        </section>
    )
}

export default Services