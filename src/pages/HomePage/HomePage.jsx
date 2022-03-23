import React, {useEffect} from 'react';
import Controls from "../../components/Controls/Controls";
import api from '../../api/config';
import useCountries from "../../hooks/useCountries";
import List from "../../components/List/List";
import Card from "../../components/Card/Card";
import {ALL_COUNTRY} from "../../utils/consts";
import useFilter from "../../hooks/useFilter";

const HomePage = () => {
    const {countries, setCountries} = useCountries();
    const {filtered, onFilter} = useFilter();

    useEffect(() => {
        if (!countries.length) {
            api.get(ALL_COUNTRY).then(({data}) => setCountries(data));
        }
    }, []);

    useEffect(() => {
        onFilter();
    },[countries])

    return (
        <>
            <Controls onFilter={onFilter} />
            <List>
                {
                    filtered.map(c => <Card key={c.name} {...c} />)
                }
            </List>
        </>
    );
};

export default HomePage;