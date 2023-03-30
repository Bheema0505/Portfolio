import styled from "styled-components";
// @import url('https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap');


export const AboutContainerTag = styled.div`
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;
    @media  screen and (max-width:1024px){
        grid-template-columns: 1FR;
        gap: 0;
    }
`;

export const AboutMeTag = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(
        45deg, 
        transparent, 
        var(--color-priary),
        transparent);
    display: grid;
    place-items: center;
    @media  screen and (max-width:1024px){
        width: 50%;
        margin: 2rem auto 4rem;
    }
    @media  screen and (max-width:600px){
        width: 65%;
        margin: 0 auto 3rem;
    }
`;
export const AboutMeImageTag = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(0);
    transition: var(--transition);
    &:hover{
        transform: rotate(-10deg);
    }
`;

export const AboutContentTag = styled.div`
    & p{
        margin: 2rem 0 2.6rem;
        color: var(--color-light);
        @media  screen and (max-width:1024px){
            margin: 1rem 0 1.5rem;
        }
        @media  screen and (max-width:600px){
            margin: 1.5rem 0;
        }

    }
    & p .para-unique{
        font-family: 'Nanum Brush Script', cursive;
        font-size: 1.3rem;
    }
    @media  screen and (max-width:1024px){
        text-align: center;
    }
    @media  screen and (max-width:600px){

       text-align: center;
    }



`;


export const AboutCardsTag = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    @media  screen and (max-width:600px){
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`;
export const AboutCardTag = styled.article`
    background: var(--color-bg-variant);
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    &:hover{
        background-color: transparent;
        border-color: var(--color-priary-variant);
    }
    & .about__icon{
        color: var(--color-primary);
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }
    & h5{
        font-size: 1rem;

    }
    & small{
        font-size: 0.7rem;
        color: var(--color-light);
    }
`;





