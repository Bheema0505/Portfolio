import styled from 'styled-components';

export const HeaderTag = styled.header`
    height: 90vh;
    padding-top: 4rem;
    overflow: hidden;

    @media  screen and (max-width:1024px){
        height: 68vh;
    }
    @media  screen and (max-width:600px){
    
        height: 100vh;
    }
`;

export const HeaderCont = styled.div`
    text-align: center;
    height: 100%;
    position: relative;
`;

export const ContactLinks = styled.div`
    margin-top: 2.5rem;
    display: flex;
    gap: 1.3rem;
    justify-content: center;
`;
export const HeaderSocialsTag = styled.div`
      display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 3rem;

    &::after{
        content: '';
        width: 1px;
        height: 2rem;
        background: var(--color-primary);
    }
    @media  screen and (max-width:600px){
   
        display: none;
    }

`;
export const MeTag = styled.div`
    width: 20rem;
    height: auto;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin-top: 2rem;
    border-radius: 11rem 11rem 0 0;
    overflow: hidden;
    & img{
        opacity: 0.9;
        border-radius: 12rem 12rem 0 0;

    }
`;

export const ScrollDownTag = styled.a`
    position: absolute;
    right: -2.3rem;
    bottom: 5.5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 1rem;
    @media  screen and (max-width:600px){
    
        display: none;
    }

`;

