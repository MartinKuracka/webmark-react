import styled from 'styled-components';
import Blob from '../../img/blob_works.svg';
import Blob3 from '../../img/works-blob2.svg';
import Thumb1 from '../../img/Thumb_websites.jpg';
import Thumb2 from '../../img/Thumb_apps.jpg';
import Thumb3 from '../../img/Thumb_comp.jpg';



const Wrapper = styled.div `
    width: ${props => props.inside ? '100%' : '65%'};
    display:flex;
    flex-direction: column;
`
const Blob1 = styled.img `
    position: absolute;
    right: 0;
    width: 45%;
    z-index: 3;
`
const Blob2 = styled.img `
    position: absolute;
    left: 0px;
    top: 19%;
    width: 100vw;
    z-index:2
`
const TextWrap = styled.div `
    margin-top:50px;
    width: 100%;
    height: 25vh;
`
const Headline = styled.h2 `
    width: 70%;
    margin-top: ${props => props.name ? '20px' : null};
    color: ${props => props.name ? '#EFECEA' : 'var(--primary)'};
    font-size: var(--t1);
    font-weight: ${props => props.name ? '300' : '600'};
    z-index: 10;
    text-align: ${props => props.name ? 'center' : null};
`
const WorksBlock = styled.div `
    width: 100%;
    display: inline-flex;
    justify-content: center;
`
const BlockWrap = styled.div `
    width: 100%;
    margin: 0px 10px;
    display: flex;
    flex-direction:column;
    align-items:center;
`
const ImgBlock = styled.div `
    width: 370px;
    height: 300px;
    background-color:var(--box-color);
    z-index: 5;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
`
const ThumbImg = styled.img `
    width: 370px;
    height: 300px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    border: 10px solid var(--box-color);
    z-index: 10;
`
const Underline = styled.div `
    width: 50%;
    height: 3px;
    margin-top: 10px;
    background-color: var(--primary);
`
const WorksSection = () => {
    return(
        <Wrapper>
            <Blob1 src={Blob}/>
            <Blob2 src={Blob3}/>
            <Wrapper inside>
                <TextWrap>
                    <Headline>Now take a Look at My Works...</Headline>
                    <Underline />
                </TextWrap>
                <WorksBlock>
                    <BlockWrap>
                        <ThumbImg src={Thumb1} />
                        <Headline name>Websites</Headline>
                    </BlockWrap>
                    <BlockWrap>
                        <ThumbImg src={Thumb2} />
                        <Headline name>Web Apps</Headline>
                    </BlockWrap>
                    <BlockWrap>
                        <ThumbImg src={Thumb3} />
                        <Headline name>Components</Headline>
                    </BlockWrap>
                </WorksBlock>
            </Wrapper>
        </Wrapper>
    )
}

export default WorksSection;