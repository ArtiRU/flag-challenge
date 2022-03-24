import styled from "styled-components";
import {Link} from 'react-router-dom';

export const StyledHeader = styled.header`
    background-color: var(--bg-color);
    box-shadow: var(--shadow);
    padding: 1.5rem 0;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled(Link).attrs({
    to: '/'
})`
    color: var(--text-color);
    font-weight: var(--fw-bold);
    font-size: var(--fs-lg);
    cursor: pointer;
    user-select: none;
    text-decoration: none;
`;

export const ThemeSwitcher = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
`;

export const ThemeSwitcherText = styled.span`
    margin-left: 1rem;
    font-size: var(--fs-lg);
    color: var(--text-color);
    text-transform: capitalize;
`;