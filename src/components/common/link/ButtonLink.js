import React from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';


function ButtonLink(props) {
    // const [topLeft, setTopLeft] = useState({})

    // console.log(topLeft);

    const ButtonLinkTag = styled.a`
    position: relative;
    display: inline-flex;
    padding: 10px 30px;
    margin: 10px;
    background: #363636;
    color: white;
    font-size: larger;
    text-decoration: none;
    letter-spacing: 1px; 
    overflow: hidden;

    &::before{
        content: "";
        position: absolute;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        background: red;
        border-radius: 50%;
        transition: width 0.5s, height 0.5s;
        z-index: 1;
        

    }

    &:hover::before{
        width: 500px;
        height: 300px;
    }
    & span {
        position: relative;
        z-index: 1;
    }
`

    const handleMouseMove = function (e) {
        console.log(e);
       
        // const x = e.clientX - e.target.offsetLeft;
        // const y = e.clientY - e.target.offsetTop;
        // setTopLeft({
        //     top: y + 'px',
        //     left: x + 'px'
        // })
       
    }

    return (
        <ButtonLinkTag href={props.desLink} onMouseMove={handleMouseMove}>
            
            <span>{props.name}</span>
        </ButtonLinkTag>
    )
}

export default ButtonLink