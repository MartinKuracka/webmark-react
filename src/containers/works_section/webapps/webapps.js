import styled from 'styled-components';

const Wrapper = styled.div `
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #EFEBEA;
    z-index: 10;
    border-radius: var(--radius)
`

const WebApps = () => {
    return(
        <>
        <Wrapper>
            WebApps
        </Wrapper>
        </>
    )
}

export default WebApps;