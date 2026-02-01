import React from 'react'
// import './services.css'
import { BsCheckLg } from 'react-icons/bs'
import { ServiceArticleTag, ServiceListUlTag, ServicesContainer, ServicesHeadTag } from './ServicesStyles'

function Services() {
    return (
        <section id='experience'>
            <h5>My Journey</h5>
            <h2>Professional Experience</h2>
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
                        <h3>Lowe's India (2023 - Present)</h3>
                        <h4 style={{color: '#4db5ff', fontSize: '1rem', marginTop: '0.5rem'}}>Software Engineer – Full Stack</h4>
                    </ServicesHeadTag>
                    <ServiceListUlTag>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Built and enhanced Brock, a self-service platform for provisioning VMs, Load Balancers, and DNS</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Automated VMware-based VM provisioning across multiple data centers</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Developed intake workflows and admin console, reducing manual infrastructure support</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Worked on LOCI, an event-driven CI platform replacing Jenkins</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Onboarded 9K+ repositories, enabling 2M+ builds with integrated security scans</p>
                        </li>
                    </ServiceListUlTag>
                </ServiceArticleTag>

                {/* end of Web Development */}

                <ServiceArticleTag>
                    <ServicesHeadTag>
                        <h3>Infosys (2021 - 2023)</h3>
                        <h4 style={{color: '#4db5ff', fontSize: '1rem', marginTop: '0.5rem'}}>Senior Systems Engineer – React Developer</h4>
                    </ServicesHeadTag>
                    <ServiceListUlTag>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Integral part of collaborative team delivering fully functional Internet banking application</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Created visually appealing and user-friendly interfaces for ANZ banking platform</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Owned UI development for ANZ-IBSC onboarding web applications</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Implemented responsive design and accessibility standards</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Collaborated with cross-functional teams in Agile environment</p>
                        </li>
                    </ServiceListUlTag>
                </ServiceArticleTag>

                {/* end of Content Creation */}



            </ServicesContainer>
        </section>
    )
}

export default Services