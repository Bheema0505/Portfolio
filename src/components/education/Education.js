import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { TbSchool, TbCertificate, TbAward } from "react-icons/tb";
import {
    EducationContainer,
    EducationCard,
    EducationHeader,
    EducationContent,
    EducationList,
} from "./EducationStyles";

function Education() {
    return (
        <section id="education">
            <h5>My Background</h5>
            <h2>Education & Certifications</h2>
            <EducationContainer className="container">
                <EducationCard>
                    <EducationHeader>
                        <TbSchool className="education__icon" />
                        <h3>Education</h3>
                    </EducationHeader>
                    <EducationContent>
                        <div className="education__item">
                            <h4>BTech</h4>
                            <h5 style={{ color: "#4db5ff", marginTop: "0.5rem" }}>
                                Santhiram Engineering College, Nandyal
                            </h5>
                            <p style={{ color: "#ccc", fontSize: "0.9rem" }}>2018 - 2021</p>
                            <p style={{ color: "#ccc", fontSize: "0.9rem" }}>CGPA: 7.63</p>
                        </div>
                    </EducationContent>
                </EducationCard>

                <EducationCard>
                    <EducationHeader>
                        <TbCertificate className="education__icon" />
                        <h3>Certifications</h3>
                    </EducationHeader>
                    <EducationContent>
                        <EducationList>
                            <li>
                                <BsCheckLg className="cert__icon" />
                                <p>Infosys Certified React Web Developer</p>
                            </li>
                            <li>
                                <BsCheckLg className="cert__icon" />
                                <p>Infosys Certified Front-end Developer</p>
                            </li>
                        </EducationList>
                    </EducationContent>
                </EducationCard>

                <EducationCard>
                    <EducationHeader>
                        <TbAward className="education__icon" />
                        <h3>Awards & Honors</h3>
                    </EducationHeader>
                    <EducationContent>
                        <EducationList>
                            <li>
                                <BsCheckLg className="cert__icon" />
                                <p>2× Spot Award at Lowe's India</p>
                                <small style={{ color: "#ccc", display: "block", marginTop: "0.2rem" }}>
                                    For exceptional performance and high-impact contributions
                                </small>
                            </li>
                            <li>
                                <BsCheckLg className="cert__icon" />
                                <p>ANZ Appreciation & Team
                                    Excellence Award </p>
                                <small style={{ color: "#ccc", display: "block", marginTop: "0.2rem" }}>
                                    For outstanding contribution to ANZ banking project
                                </small>
                            </li>
                        </EducationList>
                    </EducationContent>
                </EducationCard>
            </EducationContainer>
        </section>
    );
}

export default Education;
