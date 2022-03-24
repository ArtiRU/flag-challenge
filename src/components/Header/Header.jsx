import React, {useEffect, useState} from 'react';
import Container from "../Container/Container";
import {IoMoon, IoMoonOutline} from 'react-icons/io5';
import {StyledHeader, ThemeSwitcher, ThemeSwitcherText, Title, Wrapper} from "./header-styling";

const Header = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <StyledHeader>
            <Container>
                <Wrapper>
                    <Title>Where in the world?</Title>
                    <ThemeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? <IoMoon /> : <IoMoonOutline />}
                        <ThemeSwitcherText>
                            {theme} Mode
                        </ThemeSwitcherText>
                    </ThemeSwitcher>
                </Wrapper>
            </Container>
        </StyledHeader>
    );
};

export default Header;