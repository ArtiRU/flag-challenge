import React, {memo, useCallback, useEffect, useState} from 'react';
import Search from "../Search/Search";
import Select from "../Select/Select";
import {Wrapper} from "./controls-styling";

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

const Controls = ({onFilter}) => {
    const [region, setRegion] = useState('');
    const [search, setSearch] = useState('');

    const onSearch = useCallback((e) => setSearch(e.target.value), []);

    useEffect(() => {
        onFilter(search, region.value);
    }, [search, region.value]);

    return (
        <Wrapper>
            <Search search={search} onSearch={onSearch} />
            <Select
                placeholder="Filter by region"
                isSearchable={false}
                options={options}
                value={region}
                onChange={setRegion}
            />
        </Wrapper>
    );
};

export default memo(Controls);