import styled from 'styled-components';

const Button = styled.button `
    font-family: var(--button_font);
    width: 7rem;
    height: 3rem;
    background: var(--button);
    color: var(--button_color);
    border-radius: 1.5rem;
    border: none;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    transition: all ease-in-out 0.1s;

    &:hover {
        transform: scale(1.02);
        filter: brightness(110%);
    }

    &:active {
        transform: translateY(2px)
    }
`;

export default Button; 