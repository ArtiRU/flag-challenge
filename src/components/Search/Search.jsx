import React from 'react';
import {Input, Wrapper} from "./search-styling";
import {IoSearch} from 'react-icons/io5';

const Search = () => {
    return (
        <Wrapper>
            <IoSearch />
            <Input />
        </Wrapper>
    );
};

export default Search;