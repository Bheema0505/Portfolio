import styled from "styled-components";


export const FooterTag = styled.footer`
    background: var(--color-primary);
    padding: 3rem 0;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 7rem;

    & a{
        color: var(--color-bg);
    }
    & .footer__logo{
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 2rem;
        display: inline-block;

    }
`;

export const FooterSocialLinksUlTag = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 3rem;
    @media  screen and (max-width:600px){
        flex-direction: column;
        gap: 1.5rem;
    }
`;

export const FooterSocials = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;

    & a{
        background: var(--color-bg);
        color: var(--color-white);
        padding: 0.8rem;
        border-radius: 0.7rem;
        display: flex;
        border: 1px solid transparent;
    }

    & a:hover{
        background: transparent;
        color: var(--color-bg);
        border-color: var(--color-bg);
    }

    @media  screen and (max-width:600px){
        margin-bottom: 2.6rem;
    }

`;

export const FooterCopyRight = styled.div`
    margin-bottom: 4rem;
    color: var(--color-bg);
`;

