import styled from 'styled-components';

export const Wrapper = styled.div`
    flex-basis: 80%;
    display: flex;
    align-items: center;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    background-color: var(--el-color);
    margin-right: 1rem;
    
    & > svg {
        margin-left: 1rem;
    }
    
    @media(max-width: 767px) {
        width: 100%;
        margin-right: 0;
    }
`;

export const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...'
})`
    width: 100%;
    padding: 1rem;
    outline: none;
    border: none;
    background-color: var(--el-color);
    color: var(--color);
    border-radius: var(--radius);
`;