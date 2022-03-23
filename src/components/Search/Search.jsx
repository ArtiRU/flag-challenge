import React, {memo} from 'react';
import {Input, Wrapper} from "./search-styling";
import {IoSearch} from 'react-icons/io5';

const Search = ({search, onSearch}) => {

    return (
        <Wrapper>
            <IoSearch />
            <Input value={search} onChange={onSearch} />
        </Wrapper>
    );
};

export default memo(Search);