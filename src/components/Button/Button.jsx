import React from 'react';
import {StyledButton} from "./styling-button";


const Button = ({children, onBack}) => {

    console.log('button rerender');
    return (
        <StyledButton onClick={onBack}>
            {children}
        </StyledButton>
    );
};

export default Button;