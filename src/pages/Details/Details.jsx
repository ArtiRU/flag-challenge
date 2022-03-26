import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Button from "../../components/Button/Button";
import {IoArrowBack} from "react-icons/io5";
import {searchByCountry} from "../../api/endpoints";
import api from '../../api/config';
import DetailsInfo from "../../components/DetailsInfo/DetailsInfo";
import {Wrapper} from "./details-styling";

const Details = () => {
    const [country, setCountry] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    const {name} = params;

    useEffect(() => {
        api.get(searchByCountry(name)).then(({data}) => setCountry(data[0]));
    }, [name]);

    const onBack = () => navigate(-1);

    return (
        <Wrapper>
            <Button onBack={onBack}>
                <IoArrowBack />
                <span>Go back</span>
            </Button>
            <DetailsInfo {...country} />
        </Wrapper>
    );
};

export default Details;