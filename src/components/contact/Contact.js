import React, { useRef, useState } from "react";
// import './contact.css'

import { MdOutlineEmail } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";
import { LiaWhatsapp } from "react-icons/lia";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import {
  ContactContainer,
  ContactMethod,
  ContactOptions,
  FormTag,
  InputTag,
  TextAreaTag,
} from "./ContactStyles";
import axios from "axios";
import Alert from "../common/alert/Alert";

function Contact() {
  const contactform = useRef();
  const [showSuccessAlert, setshowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const regex = "^[A-Za-z0-9+_.-]+@(.+)$";

  const sendDataToBackendDB = (data) => {
    setShowErrorAlert(false);
    setshowSuccessAlert(false);
    axios
      .post(
        "https://nagaveera-portfolio-default-rtdb.firebaseio.com/visitor%20data.json",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        }
      )
      .then((response) => {
        console.log("response", response);
        if (response.statusText === "OK") {
          setshowSuccessAlert(true);
          setTimeout(() => {
            setshowSuccessAlert(false);
          }, 10000);
        } else {
          setShowErrorAlert(true);
          setTimeout(() => {
            setShowErrorAlert(false);
          }, 30000);
        }
      })
      .catch((error) => {
        console.log("error", error);
        if (
          error.response.data.error ||
          error.status === 401 ||
          error.status === 400
        ) {
          setShowErrorAlert(true);
          setTimeout(() => {
            setShowErrorAlert(false);
          }, 20000);
        } else {
          setShowErrorAlert(false);
        }
      });
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2> Contact me</h2>
      <ContactContainer className="container">
        <ContactOptions>
          <ContactMethod>
            <MdOutlineEmail className="contact__method-icon" />
            <h4>Email</h4>
            <h5>bheemareddypucha@gmail.com</h5>
            <a
              href="mailto:bheemareddypucha@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              Send a Message
            </a>
          </ContactMethod>
          <ContactMethod>
            {/* <RiMessengerLine className="contact__method-icon" /> */}
            {/* <CiLinkedin className="contact__method-icon" /> */}
            <LiaLinkedin className="contact__method-icon" />
            <h4>Linked In</h4>
            <h5>Naga Veera Bheema Reddy Pucha</h5>
            <a
              //   href="http://m.me/bheemareddy.bheemareddy.77/"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/naga-veera-bheema-reddy"
            >
              Send a Message
            </a>
          </ContactMethod>
          <ContactMethod>
            <LiaWhatsapp className="contact__method-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 8309651107</h5>
            <a
              href="https://api.whatsapp.com/send?phone=918309651107"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              Send a Message
            </a>
          </ContactMethod>
        </ContactOptions>

        {/* end of contact options */}

        {/* <Form /> */}

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("please enter your first name")
              .min(3, "minimum 3 char long"),

            email: Yup.string()
              .required("please enter your email id")
              .email("please enter valid Email ID")
              .matches(regex, { message: "E mail must be a valid one" }),
            message: Yup.string().required("please enter something"),
          })}
          onSubmit={(values, { resetForm }) => {
            sendDataToBackendDB(values);
            emailjs
              .sendForm(
                "service_q6ej29d",
                "template_iejf6gd",
                contactform.current,
                "oxjCKFAUJ6ApGLyLk"
              )
              .then(
                (result) => {
                  console.log(result.text);
                },
                (error) => {
                  console.log(error.text);
                }
              );
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,

            /* and other goodies */
          }) => (
            <FormTag ref={contactform} onSubmit={handleSubmit}>
              <InputTag
                className={
                  errors.name && touched.name
                    ? "form-control invalid"
                    : "form-control"
                }
                name="name"
                type="text"
                placeholder="Your Full Name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <span style={{ color: "red", marginBottom: "20px" }}>
                  {errors.name}{" "}
                </span>
              ) : null}
              <InputTag
                type="text"
                name="email"
                id="email"
                placeholder="Your Email Id"
                className={
                  errors.email && touched.email
                    ? "form-control invalid"
                    : "form-control"
                }
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <span style={{ color: "red", marginBottom: "20px" }}>
                  {errors.email}{" "}
                </span>
              ) : null}

              <TextAreaTag
                name="message"
                rows="7"
                placeholder="Your Message"
                className={
                  errors.email && touched.email
                    ? "form-control invalid"
                    : "form-control"
                }
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {" "}
              </TextAreaTag>
              {errors.message && touched.message ? (
                <span style={{ color: "red", marginBottom: "20px" }}>
                  {errors.message}{" "}
                </span>
              ) : null}

              <button
                className="btn btn-primary"
                type="submit"
                style={{ margin: "0 auto" }}
              >
                Send Message
              </button>
              {showSuccessAlert && (
                <Alert message1="Message Sent Succesfully" success />
              )}
              {showErrorAlert && (
                <Alert
                  message1="Unable to send your message,"
                  message2="kindly contact through social media or Email"
                />
              )}
            </FormTag>
          )}
        </Formik>
      </ContactContainer>
    </section>
  );
}

export default Contact;
