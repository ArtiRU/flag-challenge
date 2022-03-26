import React from 'react';
import {StyledButton} from "./styling-button";


const Button = ({children, onBack}) => {

    return (
        <StyledButton onClick={onBack}>
            {children}
        </StyledButton>
    );
};

export default Button;