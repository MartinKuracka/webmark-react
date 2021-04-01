import styled from 'styled-components';

export const ButtonDef = styled.button `
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

export const WrapperDef = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const HeadlineDef = styled.h2 `
    font-family: 'Montserrat', sans-serif;
    font-size: 1.9rem;
    font-weight: 900;
    color: var(--primary);
`

export const TextDef = styled.p `
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    line-height: initial;
    letter-spacing: 0;
    font-weight: 300;
`