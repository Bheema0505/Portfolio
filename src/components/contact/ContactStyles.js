import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 37% 43%;
  gap: 12%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 70% !important;
  }

  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;
export const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContactMethod = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }
  & .contact__method-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--swiper-theme-color);
  }
  & .contact__method a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }
`;

export const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  & span {
    font-size: 0.9rem;
    /* background-color: #f3f2f2; */
    width: max-content;
    margin-bottom: 15px !important;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }
  & button {
    @media screen and (max-width: 1024px) {
      margin: 0 auto;
    }
  }
  & input,
  textarea {
    margin-bottom: 10px;
  }
`;
export const InputTag = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  color: var(--color-white);

  @media screen and (max-width: 1024px) {
    width: 90% !important;
  }

  @media screen and (max-width: 600px) {
    width: 80% !important;
  }
`;

export const TextAreaTag = styled.textarea`
  resize: none;
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  color: var(--color-white);

  @media screen and (max-width: 1024px) {
    width: 90% !important;
  }

  @media screen and (max-width: 600px) {
    width: 80% !important;
  }
`;
