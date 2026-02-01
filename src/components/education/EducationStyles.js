import styled from "styled-components";

export const EducationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const EducationCard = styled.article`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 2rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  .education__icon {
    color: var(--color-primary);
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const EducationHeader = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: var(--color-primary);
    margin-top: 0.5rem;
  }
`;

export const EducationContent = styled.div`
  .education__item {
    margin-bottom: 1.5rem;
    text-align: left;

    h4 {
      color: var(--color-white);
      margin-bottom: 0.5rem;
    }

    h5 {
      margin-bottom: 0.3rem;
    }

    p {
      margin-bottom: 0.2rem;
    }
  }
`;

export const EducationList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;

    .cert__icon {
      color: var(--color-primary);
      margin-top: 0.2rem;
      flex-shrink: 0;
    }

    p {
      margin: 0;
      color: var(--color-white);
    }
  }
`;
