import styled from 'styled-components';
import Blob from '../../img/blobs_header.svg';
import Webmark from '../../img/web_design.png'

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    position: relative;
    margin: 20px auto;
    width: 65%;
    height: 100%;
`
const Image = styled.img `
    position: absolute;
    margin: ${props => props.logo ? '0' : '100px auto'};
    width: ${props => props.logo ? '680px' : '80%'};
    z-index: -1;
    box-shadow: ${props => props.logo ? 'var(--shadow)' : null };
`
const Container = styled.div `
    width: 90%;
    margin-top: 160px;
`

const Text = styled.h1 `
    font-size: ${props => props.second ? '7rem' : '3rem'};
    font-weight: ${props => props.second ? '600' : '300'};
    color: var(--primary);
    z-index:10;
    letter-spacing: ${props => props.second ? '-16px' : '-5px'};
`
const Span = styled.span `
    font-size: 9rem;
    color: var(--primary2);
    font-weight: 800;
    z-index: 10;
    letter-spacing: -20px;
`

const HeadSection = () => {
    return(
        <Wrapper>
            <Image src={Blob}/>
            <Container>
                <Text><Span>W</Span>elcome To The</Text>
                <Text second><Span>W</Span>ebMark</Text>
                <Image src={Webmark} logo/>
            </Container>
        </Wrapper>
    )
}

export default HeadSection;
