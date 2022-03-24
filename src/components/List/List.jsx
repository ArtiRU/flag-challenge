import React from 'react';
import {StyledList} from "./list-styling";

const List = ({children}) => {
    return (
        <StyledList>
            {children}
        </StyledList>
    );
};

export default List;