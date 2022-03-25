import React from 'react';
import {
    InfoImg,
    Title,
    List,
    ListGroup,
    ListItem,
    Meta,
    TagGroup,
    StyledBold,
    Tag,
    Wrapper
} from "./detailsInfo-styling";

const DetailsInfo = ({topLevelDomain = [], currencies = [], languages = [], borders = [], ...props}) => {
    const {
        name, nativeName, capital, population, region, flag, subregion
    } = props;

    const info = [
        {key: 'Native Name', value: nativeName},
        {key: 'Population', value: population},
        {key: 'Region', value: region},
        {key: 'Sub Region', value: subregion},
        {key: 'Capital', value: capital},
    ];

    return (
        <Wrapper>
            <InfoImg src={flag} alt={name} />
            <div>
                <Title>{name}</Title>
                <ListGroup>
                    <List>
                        {
                            info.map(i => (
                                <ListItem key={i.key}>
                                    <StyledBold>{i.key}: </StyledBold>
                                    <span>&nbsp;&nbsp;{i.value}</span>
                                </ListItem>
                            ))
                        }
                    </List>
                    <List>
                        <ListItem>
                            <StyledBold>Top Level Domain: &nbsp;</StyledBold>
                            {
                                topLevelDomain.map(d => (
                                    <span key={d}>{d} &nbsp;</span>
                                ))
                            }
                        </ListItem>
                        <ListItem>
                            <StyledBold>Currency: &nbsp;</StyledBold>
                            {
                                currencies.map(c => (
                                    <span key={c.code}>{c.name} &nbsp;</span>
                                ))
                            }
                        </ListItem>
                        <ListItem>
                            <StyledBold>Language: &nbsp;</StyledBold>
                            {
                                languages.map(l => (
                                    <span key={l.name}>{l.name}&nbsp;</span>
                                ))
                            }
                        </ListItem>

                    </List>
                    <Meta>
                        <StyledBold>Borders: </StyledBold>
                        {
                            !borders.length ? (<StyledBold>There is no borders countries</StyledBold>) : (
                                <TagGroup>
                                    {borders.map(b => (<Tag key={b}>{b}</Tag>))}
                                </TagGroup>
                            )
                        }

                    </Meta>
                </ListGroup>
            </div>
        </Wrapper>
    );
};

export default DetailsInfo;