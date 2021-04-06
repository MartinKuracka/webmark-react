import styled from 'styled-components';
import Webmark from '../../img/Web Design.svg';
import Background from '../../img/hdr_background.svg';
import {WrapperDef} from '../../components/styled_components';
import Image2 from '../../img/hdr_image.svg'


const Wrapper = styled(WrapperDef)`
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    ${'' /* background: url(${Background}); */}
    background-repeat: no-repeat;
    background-position: center;
    overflow: visible;
`
const Image = styled.img `
    position: ${props => props.blob
        ? 'absolute' :
            props.second ? 'absolute' :
                 'relative'};
    margin: ${props => props.logo ? '0' : '10px auto'};
    width: ${props => props.logo ? '330px' :
            props.second ? '110%' :
                props.hero ? '320px' : '100vw'};
    left: ${props => props.logo
        ? null :
            props.second ? null :
                props.hero ? '20px' : '150px'};
    top: ${props => props.logo ? null :
        props.hero ? '0' : '-50px'};
    z-index: ${props => props.second ? '-2' :
        props.logo ? '5' :
            props.hero ? '5' : '-1'};
    right: ${props => props.second ? '-320px': null };
    box-shadow: ${props => props.logo ? 'var(--shadow)' : null };
`
const Container = styled.div `
    width: 95%;
    margin-top: 80px;
`

const Text = styled.h1 `
    ${'' /* font-family: ${props => props.guide ? 'Cinzel' : null}; */}
    font-size: ${props => props.second
        ? '3.4rem'
        : props.guide
            ? '1.2rem' : '1.8rem'};
    font-weight: ${props => props.second ? '600' : '300'};
    color: var(--primary);
    z-index:10;
    letter-spacing: ${props => props.second
        ? '-10px'
        : props.guide
            ? '-2px' :'-4px'};
    margin-top: ${props => props.guide ? '10%' : null};
    text-align: ${props => props.guide ? 'end' : null};
    background-color: ${props => props.guide ? 'rgba(255,255,255,0.4)' : null};
    padding: ${props => props.guide ? '15px' : null}
`
const Span = styled.span `
    ${'' /* font-family: 'Cinzel', serif; */}
    font-size: ${props => props.dots ? '2rem' : '4.4rem'};
    color: ${props => props.dots ? 'var(--primary2)' : 'var(--primary2)'};
    font-weight: ${props => props.dots ? '600' : '800'};
    z-index: 10;
    letter-spacing: ${props => props.dots ? '-2px' : '-20px'};
`
const Back = styled.img `
    position: absolute;
    width: auto;
    align-content: center;
    overflow: hidden;
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
                <Image src={Image2} hero/>
                <Text guide>... I'm <Span dots> Martin</Span> <br/><br/>and I will guide You through my portfolio. . .</Text>
            </Container>
        </Wrapper>
        </>
    )
}

export default HeadSection;
