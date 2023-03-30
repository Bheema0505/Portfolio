import styled from "styled-components";


export const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.1rem;

    @media  screen and (max-width:1024px){
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    @media  screen and (max-width:600px){
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }


`;

export const ServiceArticleTag = styled.article`
    background: var(--color-bg-variant);
    border-radius: 0 0 2rem 2rem;
    height: fit-content;
    transition: var(--transition);
    width: 350px;
    min-width: 330px;
    min-height: 460px;
    justify-self: center;

    &:hover{
        background: transparent;
        border-color: var(--color-primary-variant);
        cursor: default;
    }
    @media  screen and (max-width:1024px){
        height: auto;
    }
`;

export const ServicesHeadTag = styled.div`
    background: var(--color-primary);
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
    box-shadow: 0 2rem 1rem 0 rgba(0,0,0, 0.1);

    & h3{
        color: var(--color-bg);
        font-size: 1rem;
        text-align: center;

    }
`;

export const ServiceListUlTag = styled.ul`
    padding: 1rem;

    & li{
        display: flex;
        gap: 1rem;
        margin-bottom: 0.8rem;
    }
    & .service__list-icon{
        color: var(--color-primary);
        margin-top: 8px;
        font-size: 0.8rem;
    }


    & .service__list p{
        font-size: 1rem;
    }
`;

