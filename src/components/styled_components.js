// Styled components
import styled from 'styled-components';

export const Button = styled.button `
    width: 7rem;
    height: 2.6rem;
    font-size: 0.8rem;
    border-radius: 1.2rem;
    background-color: ${props => props.back ? 'var(--primary2)' : 'var(--primary)'};
    color: ${props => props.back ? 'var(--primary)' : 'var(--background)'};
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.back ? '2px solid var(--primary)' : 'none'};
    outline: none;
    transition: all ease-in-out 0.1s;

    &:focus {
        outline: none;
    }

    &:hover {
        filter: brightness(120%)
    }

    &:active {
        transform: translateY(2px);
    }

`