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
    id: 1,
    skill: "Mountebank",
    prof: "Experienced",
  },
  {
    id: 2,
    skill: "Node.js",
    prof: "Beginner",
  },
  {
    id: 3,
    skill: "My SQL",
    prof: "Intermediate",
  },
  {
    id: 4,
    skill: "GitHub",
    prof: "Experienced",
  },
];
const frontendArray = [
  {
    id: 10,
    skill: "HTML",
    prof: "Experienced",
  },
  {
    id: 11,
    skill: "CSS",
    prof: "Experienced",
  },
  {
    id: 12,
    skill: "JavaScript",
    prof: "Experienced",
  },
  {
    id: 13,
    skill: "Bootstrap",
    prof: "Experienced",
  },
  {
    id: 14,
    skill: "React.JS",
    prof: "Experienced",
  },
  {
    id: 15,
    skill: "Redux + Saga",
    prof: "Experienced",
  },
  {
    id: 16,
    skill: "RTL & Jest",
    prof: "Experienced",
  },
  {
    id: 17,
    skill: "SASS",
    prof: "Experienced",
  },
  {
    id: 18,
    skill: "AXIOS",
    prof: "Experienced",
  },
  {
    id: 19,
    skill: "Formik",
    prof: "Experienced",
  },
  {
    id: 20,
    skill: "Material UI",
    prof: "Intermediate",
  },
  {
    id: 21,
    skill: "React Router",
    prof: "Experienced",
  },
  {
    id: 22,
    skill: "WebDriver IO",
    prof: "Experienced",
  },
  {
    id: 23,
    skill: "Adobe Analytics",
    prof: "Experienced",
  },
  {
    id: 24,
    skill: "styled-components",
    prof: "Experienced",
  },
  {
    id: 25,
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
                <article className="exerience__details" key={skillItem.id}>
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
                <article className="exerience__details" key={skillItem.id}>
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
