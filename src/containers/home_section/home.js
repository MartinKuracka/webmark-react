import styled from 'styled-components';
import Blob from '../../img/blobs_header.svg';
import Blob2 from '../../img/svgback_header.svg';
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
    position: ${props => props.blob 
        ? 'absolute' :
            props.second ? 'absolute'
                         : 'relative'};
    margin: ${props => props.logo ? '0' : '100px auto'};
    width: ${props => props.logo ? '680px' :
            props.second ? '110%'
                         : '90%'};
    left: ${props => props.logo 
        ? null : 
            props.second ? null 
                         : '150px'};
    top: ${props => props.logo ? null : '-50px'};
    z-index: ${props => props.second ? '-2' : '-1'};
    right: ${props => props.second ? '-350px': null };
    box-shadow: ${props => props.logo ? 'var(--shadow)' : null };
`
const Container = styled.div `
    width: 90%;
    margin-top: 160px;
`

const Text = styled.h1 `
    font-size: ${props => props.second 
        ? '7rem' 
        : props.guide 
            ? '2rem' : '3rem'};
    font-weight: ${props => props.second ? '600' : '300'};
    color: var(--primary);
    z-index:10;
    letter-spacing: ${props => props.second 
        ? '-16px' 
        : props.guide 
            ? '-4px' :'-5px'};
    margin-top: ${props => props.guide ? '100px' : null};
    text-align: ${props => props.guide ? 'end' : null};
    background-color: ${props => props.guide ? 'rgba(255,255,255,0.4)' : null};
    padding: ${props => props.guide ? '15px' : null}
`
const Span = styled.span `
    font-size: ${props => props.dots ? '3rem' : '9rem'};
    color: ${props => props.dots ? 'var(--primary2)' : 'var(--primary2)'};
    font-weight: ${props => props.dots ? '600' : '800'};
    z-index: 10;
    letter-spacing: ${props => props.dots ? '-4px' : '-20px'};
`

const HeadSection = () => {
    return(
        <Wrapper>
            <Image src={Blob} blob/>
            <Image src={Blob2} second/>
            <Container>
                <Text><Span>W</Span>elcome To The</Text>
                <Text second><Span>W</Span>ebMark</Text>
                <Image src={Webmark} logo/>
                <Text guide><Span dots>... I'm Martin</Span> <br/><br/>and I will guide You through my portfolio. . .</Text>
            </Container>
        </Wrapper>
    )
}

export default HeadSection;
