import React, {useEffect} from 'react';
import Controls from "../../components/Controls/Controls";
import api from '../../api/config';
import useCountries from "../../hooks/useCountries";
import List from "../../components/List/List";
import Card from "../../components/Card/Card";
import {ALL_COUNTRY} from "../../utils/consts";

const HomePage = () => {
    const {countries, setCountries} = useCountries();

    useEffect(() => {
        api.get(ALL_COUNTRY).then(({data}) => setCountries(data));
    }, []);

    return (
        <>
            <Controls />
            <List>
                {
                    countries.map(c => <Card key={c.name} {...c} />)
                }
            </List>
        </>
    );
};

export default HomePage;