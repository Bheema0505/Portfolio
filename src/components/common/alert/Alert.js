import React from 'react'
import styled from 'styled-components'


function Alert(props) {

    const DivTag = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100% ;
        transition: all 0.4s ease;
        margin: 15px 0px;
    `
    const Para = styled.p`
       background-color: ${props.success ? 'green' : 'red' };
       padding: 6px 40px;
       border-radius: 5px;
       transition: var(--transition);
       ${'' /* animation: ${fading} 6s 10s 1; */}
       z-index: 10;
       transition: all 0.4s ease;
       font-size: 0.8rem;
       letter-spacing: 1px;
       text-align: center;
    `

    return (
        <DivTag>
            <Para>{props.message1}<br />
            {props.message2}
            </Para>
        </DivTag>
    )
}

export default Alert