import styled from 'styled-components';

const Button1 = styled.button `
    whidth: 7rem;
    height: 3rem;
    background: var(--button);
    color: var(--button_color);
    border-raadius: 1.5rem;
`;

const Button = () => {
    return(
        <>
        <Button1 />
        </>
            )
}
export default Button; 