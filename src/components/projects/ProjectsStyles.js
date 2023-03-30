import styled from "styled-components";


export const ProjectsContainerTag = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    @media  screen and (max-width:1024px){
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
    }
    @media  screen and (max-width:600px){
        grid-template-columns: 1fr;
        gap: 1rem;
    }

`;

export const ProjectsItem = styled.article`
    background: var(--color-bg-variant);
    padding: 1.3rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
    text-align: center;

    &:hover{
        border-color: var(--color-primary-variant);
        background: transparent;
    }
    & h3{
        margin: 1.2rem 0 2rem;
    }
`;

export const ProjectsItemImage = styled.div`
    border-radius: 1.5rem;
    overflow: hidden;
    max-height: 18rem;
    max-width: 18rem;
    margin: 0 auto;
`;

export const ProjectsItemCta = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem 0;
`;


