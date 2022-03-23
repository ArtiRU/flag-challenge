import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';


const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            padding: '0.5rem',
            backgroundColor: 'var(--el-color)',
            border: 'none',
            borderRadius: 'var(--radius)',
            cursor: 'pointer',
            boxShadow: 'var(--shadow)',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'var(--bg-color)' : 'var(--el-color)',
            cursor: 'pointer',
        }),
    },
})`
    width: 200px;
    border: none;
    border-radius: var(--radius);
    
    @media(max-width: 767px){
        margin-top: 1rem;
        width: 100%;
    }
    
    & * {
        color: var(--text-color) !important;
    }
    
    & div[id=react-select-3-listbox] {
        background-color: var(--bg-color);
    }
    
    .css-1okebmr-indicatorSeparator {
        display: none;
    } 
`;
export default CustomSelect;