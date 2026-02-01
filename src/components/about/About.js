import React from "react";
// import './about.css'
// import aboutPic from "../../Assets/aboutPic.jpg";
import aboutPic from "../../Assets/About-pic2.jpg";
import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { BsFolder2Open } from "react-icons/bs";
import {
  AboutCardsTag,
  AboutCardTag,
  AboutContainerTag,
  AboutContentTag,
  AboutMeImageTag,
  AboutMeTag,
} from "./AboutStyles";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2> About me</h2>
      <AboutContainerTag className="container">
        <AboutMeTag>
          <AboutMeImageTag>
            <img src={aboutPic} alt="peronalpic" />
          </AboutMeImageTag>
        </AboutMeTag>

        <AboutContentTag>
          <AboutCardsTag>
            <AboutCardTag>
              <TbAward className="about__icon" />
              <h5>Experience</h5>
              <small> 4+ years</small>
            </AboutCardTag>
            <AboutCardTag>
              <FiUsers className="about__icon" />
              <h5>Companies</h5>
              <small>Lowe's India, Infosys</small>
            </AboutCardTag>
            <AboutCardTag>
              <BsFolder2Open className="about__icon" />
              <h5>Projects</h5>
              <small> 4 </small>
            </AboutCardTag>
          </AboutCardsTag>
          {/* <p> I am a Multi-disciplinary
                        <span style={{ color: 'white' }}> Developer </span> and
                        <span style={{ color: 'white' }}> Disigner </span>
                        (<span className='para-unique'>sometimes</span>)
                        with a passion for creating dynamic, responsive and User-friendly web applications 🪄 .

                        Currently working in <span style={{ color: 'RoyalBlue' }}>Infosys LTD </span>
                        as a React Developer.
                    </p> */}
          <p>
            Full Stack Software Engineer with 4+ years of experience in Golang (Gin) and React, building scalable internal
            platforms, automating infrastructure provisioning, and delivering secure, event-driven CI/CD solutions at
            enterprise scale. Currently working at <span style={{ color: "RoyalBlue" }}> Lowe's India </span> with strong ownership,
            cross-team collaboration, and a focus on reliability and performance.
          </p>
          <a href="#contact" className="btn bn-primary">
            {" "}
            Let's Connect
          </a>
        </AboutContentTag>
      </AboutContainerTag>
    </section>
  );
}

export default About;
