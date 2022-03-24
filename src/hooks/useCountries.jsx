import React, {useContext} from 'react';
import {CountriesContext} from "../providers/CountriesProvider";

const useCountries = () => {
    const value = useContext(CountriesContext);

    return value;
};

export default useCountries;