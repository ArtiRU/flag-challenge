import React from 'react';
import styled from 'styled-components';
import Container from "../Container/Container";

const StyledMain = styled.main`
    margin-top: 3rem;
`;

const Main = ({children}) => {
    return (
        <StyledMain>
            <Container>
                {children}
            </Container>
        </StyledMain>
    );
};

export default Main;