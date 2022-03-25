import React from 'react';
import {useNavigate} from 'react-router-dom';
import {CardBody, CardImage, CardInfo, Title, Wrapper} from "./card-styling";
import {searchByCountry} from '../../api/endpoints';


const Card = ({flag, population, name, region, capital}) => {
    const navigate = useNavigate();
    const localPopulation = population.toLocaleString().replace(/\s/g, ',');

    const onCardClick = () => navigate('country/' + name);

    return (
        <Wrapper onClick={onCardClick}>
            <CardImage src={flag} alt={name} />
            <CardBody>
                <Title>{name}</Title>
                <div>
                    <CardInfo>population: </CardInfo>
                    <span>{localPopulation}</span>
                </div>
                <div>
                    <CardInfo>region: </CardInfo>
                    <span>{region}</span>
                </div>
                <div>
                    <CardInfo>capital: </CardInfo>
                    <span>{capital}</span>
                </div>
            </CardBody>
        </Wrapper>
    );
};

export default Card;