import {useCallback, useState} from 'react';
import useCountries from "./useCountries";

const useFilter = () => {
    const {countries} = useCountries();
    const [filtered, setFiltered] = useState([]);

    const onFilter = useCallback((search, region) => {
        let data = [...countries];
        if (search) {
            data = data.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));
        }
        if (region) {
            data = data.filter(d => d.region.includes(region));
        }
        setFiltered(data);
    }, [countries]);


    return {
        filtered,
        onFilter
    };
};

export default useFilter;