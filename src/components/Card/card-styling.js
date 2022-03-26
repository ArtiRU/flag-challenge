import styled from 'styled-components';

export const Wrapper = styled.div`
    border-radius: var(--radius);
    background-color: var(--el-color);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
`;

export const CardImage = styled.img`
    height: 200px;
    width: 100%;
    object-fit: cover;
    box-shadow: var(--shadow);
    object-position: center;
    
    @media(max-width: 1024px){
        height: 250px;
    }
    
    @media(max-width: 767px){
        height: 300px;
    }
    }@media(max-width: 400px){
        height: 150px;
    }
`;


export const CardBody = styled.div`
    padding: 2rem;
`;

export const CardInfo = styled.span`
    font-weight: var(--fw-bold);
    text-transform: capitalize;
`;

export const Title = styled.h3`
    margin-top: 0;
    margin-bottom: 1rem;
`;