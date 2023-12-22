import React from "react";
// import './skills.css';
import { BsFillPatchCheckFill } from "react-icons/bs";
import {
  ExperienceContaierTag,
  ExperienceContent,
  ExperienceFrontBackEnd,
} from "./SkillsStyles";

const bankendArray = [
  {
    skill: "Mountebank",
    prof: "Experienced",
  },
  {
    skill: "Node.js",
    prof: "Beginner",
  },
  {
    skill: "My SQL",
    prof: "Intermediate",
  },
  {
    skill: "GitHub",
    prof: "Experienced",
  },
];
const frontendArray = [
  {
    skill: "HTML",
    prof: "Experienced",
  },
  {
    skill: "CSS",
    prof: "Experienced",
  },
  {
    skill: "JavaScript",
    prof: "Experienced",
  },
  {
    skill: "Bootstrap",
    prof: "Experienced",
  },
  {
    skill: "React.JS",
    prof: "Experienced",
  },
  {
    skill: "Redux + Saga",
    prof: "Experienced",
  },
  {
    skill: "RTL & Jest",
    prof: "Experienced",
  },
  {
    skill: "SASS",
    prof: "Experienced",
  },
  {
    skill: "AXIOS",
    prof: "Experienced",
  },
  {
    skill: "Formik",
    prof: "Experienced",
  },
  {
    skill: "Material UI",
    prof: "Intermediate",
  },
  {
    skill: "React Router",
    prof: "Experienced",
  },
  {
    skill: "WebDriver IO",
    prof: "Experienced",
  },
  {
    skill: "Adobe Analytics",
    prof: "Experienced",
  },
  {
    skill: "styled-components",
    prof: "Experienced",
  },
  {
    skill: "Web Accessibility",
    prof: "Experienced",
  },
];
function Skills() {
  return (
    <section id="skills">
      <h5>What i know</h5>
      <h2> My Skills </h2>
      <ExperienceContaierTag className="container">
        <ExperienceFrontBackEnd>
          <h3>Frontend Technologies</h3>
          <ExperienceContent>
            {frontendArray.map((skillItem) => {
              return (
                <article className="exerience__details">
                  <BsFillPatchCheckFill className="icon" />
                  <div>
                    <h5>{skillItem.skill}</h5>
                    <small className="text-light">{skillItem.prof}</small>
                  </div>
                </article>
              );
            })}
          </ExperienceContent>
          {/* <ExperienceContent>
            <article className="exerience__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exerience__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exerience__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exerience__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exerience__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>React </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exerience__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Redux + Saga</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exerience__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Jest</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exerience__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </ExperienceContent> */}
        </ExperienceFrontBackEnd>

        {/* end of front end */}

        <ExperienceFrontBackEnd>
          <h3>Backend Technologies</h3>
          <ExperienceContent>
            {bankendArray.map((skillItem) => {
              return (
                <article className="exerience__details">
                  <BsFillPatchCheckFill className="icon" />
                  <div>
                    <h5>{skillItem.skill}</h5>
                    <small className="text-light">{skillItem.prof}</small>
                  </div>
                </article>
              );
            })}
          </ExperienceContent>
          {/* <ExperienceContent>
            <article className="exerience__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Mountebank</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="exerience__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exerience__details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </ExperienceContent> */}
        </ExperienceFrontBackEnd>
      </ExperienceContaierTag>
    </section>
  );
}

export default Skills;
