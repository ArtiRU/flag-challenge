import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 2rem;
  margin-top: 2rem;
`;

export const InfoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-weight: var(--fw-normal);
`;

export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  grid-gap: 2rem;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    grid-gap: 3rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
 display: flex;
  line-height: 2;
`;

export const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  grid-gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  
  @media (min-width: 767px) {
  margin-top: 0;
    flex-direction: row;
    align-items: center;
  }
`;

export const TagGroup = styled.div`
  display: flex;
  grid-gap: 1rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2;
  cursor: pointer;
`;

export const StyledBold = styled.b`
 font-weight: var(--fw-bold);
`
