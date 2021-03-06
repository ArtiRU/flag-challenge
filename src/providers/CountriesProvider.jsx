import React, {createContext, useMemo, useState} from 'react';

export const CountriesContext = createContext([]);

export const CountriesProvider = ({children}) => {
    const [countries, setCountries] = useState([]);

    const value = useMemo(() => ({setCountries, countries}), [countries]);

    return (
        <CountriesContext.Provider value={value}>
            {children}
        </CountriesContext.Provider>
    );
};


