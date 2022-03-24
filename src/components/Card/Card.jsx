import React from 'react';
import {CardBody, CardImage, CardInfo, Title, Wrapper} from "./card-styling";


const Card = ({flag, population, name, region, capital}) => {
    const localPopulation = population.toLocaleString().replace(/\s/g, ',');

    return (
        <Wrapper>
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