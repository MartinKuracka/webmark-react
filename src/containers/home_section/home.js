import styled from 'styled-components';
import Webmark from '../../img/Web Design.svg';
import Background from '../../img/hdr_background.svg';
import {WrapperDef} from '../../components/styled_components';
import Image2 from '../../img/hdr_image.svg'


const Wrapper = styled(WrapperDef)`
    justify-content: flex-start;
    margin: 20px auto;
    width: 65%;
    height: 100%;
    ${'' /* background: url(${Background}); */}
    background-repeat: no-repeat;
    background-position: center;
    overflow: visible;
`
const Back = styled.img `
    position: absolute;
    width: auto;
`
const Image = styled.img `
    position: ${props => props.blob
        ? 'absolute' :
            props.second ? 'absolute' :
                props.hero ? 'absolute' : 'relative'};
    margin: ${props => props.logo ? '0' : '100px auto'};
    width: ${props => props.logo ? '680px' :
            props.second ? '110%' :
                props.hero ? '500px' : '90%'};
    left: ${props => props.logo
        ? null :
            props.second ? null :
                props.hero ? '800px' : '150px'};
    top: ${props => props.logo ? null :
        props.hero ? '50px' : '-50px'};
    z-index: ${props => props.second ? '-2' :
        props.logo ? '5' :
            props.hero ? '5' : '-1'};
    right: ${props => props.second ? '-320px': null };
    box-shadow: ${props => props.logo ? 'var(--shadow)' : null };
`
const Container = styled.div `
    width: 90%;
    margin-top: 160px;
`

const Text = styled.h1 `
    font-family: ${props => props.guide ? 'Cinzel' : null};
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
            ? '-2px' :'-5px'};
    margin-top: ${props => props.guide ? '13%' : null};
    text-align: ${props => props.guide ? 'end' : null};
    background-color: ${props => props.guide ? 'rgba(255,255,255,0.4)' : null};
    padding: ${props => props.guide ? '15px' : null}
`
const Span = styled.span `
    font-family: 'Cinzel', serif;
    font-size: ${props => props.dots ? '3rem' : '9rem'};
    color: ${props => props.dots ? 'var(--primary2)' : 'var(--primary2)'};
    font-weight: ${props => props.dots ? '600' : '800'};
    z-index: 10;
    letter-spacing: ${props => props.dots ? '-2px' : '-20px'};
`

const HeadSection = () => {
    return(
        <>
        <Back src={Background} />
        <Wrapper>
            <Container>
                <Text><Span>W</Span>elcome To The</Text>
                <Text second><Span>W</Span>ebMark</Text>
                <Image src={Webmark} logo/>
                <Text guide>... I'm <Span dots> Martin</Span> <br/><br/>and I will guide You through my portfolio. . .</Text>
                <Image src={Image2} hero/>
            </Container>
        </Wrapper>
        </>
    )
}

export default HeadSection;
