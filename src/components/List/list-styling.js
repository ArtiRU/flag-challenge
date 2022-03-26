import styled from 'styled-components';

export const StyledList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    margin-top: 2rem;
    
    @media(max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media(max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media(max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
    }
`;