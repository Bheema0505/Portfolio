import styled from "styled-components";



export const ExperienceContaierTag = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    @media  screen and (max-width:1024px){
        grid-template-columns: 1fr;
    }
    @media  screen and (max-width:600px){
        gap: 1rem;
    }

`;

export const ExperienceFrontBackEnd = styled.div`
    background: var(--color-bg-variant);
    padding: 1.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    &:hover{
        background: transparent;
        border-color: var(--color-bg-variant);
        cursor: default;
    }
    & h3{
        text-align: center;
        margin-bottom: 2rem;
        color: var(--color-primary);
    }
    @media  screen and (max-width:1024px){
        width: 80%;
        padding: 2rem;
        margin: 0 auto;
    }
    @media  screen and (max-width:600px){
        width: 80%;
    }
`;
export const ExperienceContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    & .exerience__details{
        display: flex;
        gap: 1rem;
    }
    & .exerience__details .icon{
        margin-top: 6px;
        color: var(--color-primary);
    }
    @media  screen and (max-width:1024px){
        padding: 1rem;
    }
    @media  screen and (max-width:600px){
        padding: 1rem;
    }
   

`;




