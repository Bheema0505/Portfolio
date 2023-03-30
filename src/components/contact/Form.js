import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FormTag, InputTag, TextAreaTag } from './ContactStyles';

export const Form = () => {
    const contactform = useRef();

    const nameref = useRef()
    const emailref = useRef()
    const messageref = useRef()


    // const sendDetailsToDatabase=()=>{
    //     axios.post('https://nagaveera-portfolio-default-rtdb.firebaseio.com/visitor%20contact%20details.json', {})
    // }

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(nameref,emailref,messageref);


        emailjs.sendForm('service_q6ej29d', 'template_iejf6gd', contactform.current, 'oxjCKFAUJ6ApGLyLk', {
            method: 'POST',
            headers: {
                'origin': 'http://localhost:3000'
            }
        })
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <FormTag ref={contactform} onSubmit={sendEmail}>
            <label>Name</label>
            <InputTag type="text" name="name" ref={nameref}/>
            <label>Email</label>
            <InputTag type="email" name="email" ref={emailref}/>
            <label>Message</label>
            <TextAreaTag name="message" />
            <button type="submit" value="Send" className="btn btn-primary" ref={messageref}>send </button>
        </FormTag>
    );
};

export default Form;
