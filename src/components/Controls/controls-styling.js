import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media(max-width: 767px){
        flex-direction: column;
    }
`;