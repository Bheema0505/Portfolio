import styled from "styled-components";


export const NavTag = styled.nav`
    background: rgba(0,0,0,0.3);
    width: max-content;
    display: block;
    position: fixed;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    display: flex;
    gap: 0.8rem;
    padding: 0.3rem 1.7rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);

    & a{
        background: transparent;
        padding: 0.7rem;
        font-size: 1.3rem;
        border-radius: 50%;
        display: flex;
        color: var(--color-light);
    }

    & a:hover{
        background: rgba(0,0,0,0.4);
    }
    & a.active{
        background: var(--color-primary);
        color: var(--color-bg);
    }
`;
