import {useState} from 'react';
import styled from 'styled-components';
import Blob from '../../img/blob_works.svg';
import Blob3 from '../../img/works-blob2.svg';
import Thumb1 from '../../img/undraw2.svg';
import Thumb2 from '../../img/undraw3.svg';
import Thumb3 from '../../img/undraw1.svg';
import WebPages from './webpages/webpages';
import WebApps from './webapps/webapps';
import Components from './components/components';
import {WrapperDef, HeadlineDef} from '../../components/styled_components'

const Wrapper = styled(WrapperDef) `
    justify-content: flex-start;
    align-items: flex-start;
    width: ${props => props.inside ? '100%' : '65%'};
`
const Blob1 = styled.img `
    position: absolute;
    right: 0;
    width: 45%;
    z-index: 3;
    margin-top: -10%;
`
const Blob2 = styled.img `
    position: absolute;
    left: 0px;
    top: 12%;
    width: 100vw;
    z-index:2
`
const TextWrap = styled.div `
    margin-top:50px;
    width: 100%;
    height: 20vh;
`
const Headline = styled(HeadlineDef) `
    width: 70%;
    margin-top: ${props => props.name && '20px'};
    color: ${props => props.name ? '#EFECEA' : 'var(--primary)'};
    font-weight: ${props => props.name ? '300' : '900'};
    font-size: ${props => props.name && '1.3rem'};
    z-index: 10;
    text-align: ${props => props.name && 'center'};
`
const WorksBlock = styled.div `
    width: 100%;
    display: inline-flex;
    justify-content: center;
`
const BlockWrap = styled.a `
    width: 100%;
    margin: 0px 10px;
    display: flex;
    flex-direction:column;
    align-items:center;
    cursor: pointer;
    text-decoration: none;
`
const ThumbImg = styled.img `
    width: 370px;
    height: 300px;
    border-radius: var(--radius);
    border: 5px solid var(--primary);
    background-color: var(--background);
    z-index: 3;
`
const Underline = styled.div `
    width: 50%;
    height: 3px;
    margin-top: 10px;
    background-color: var(--primary);
`
const WorksSection = () => {
    const [worksPage, setPage] = useState('none');

    const changepage = (value) => {
        console.log(value);
        setPage(value);
    }

    console.log('from paretn', changepage)

    const mainpage = () => {
        return (
            <WorksBlock>
                <BlockWrap onClick={() => changepage('webs')}>
                    <ThumbImg src={Thumb1} />
                    <Headline name>Websites</Headline>
                </BlockWrap>
                <BlockWrap onClick={() => changepage('apps')}>
                    <ThumbImg src={Thumb2} />
                    <Headline name>Web Apps</Headline>
                </BlockWrap>
                <BlockWrap onClick={() => changepage('components')}>
                    <ThumbImg src={Thumb3} />
                    <Headline name>Components</Headline>
                </BlockWrap>
            </WorksBlock>
        )
    }

    return(
        <>
        <Blob1 src={Blob}/>
        <Blob2 src={Blob3}/>
        <Wrapper>
            <Wrapper inside>
                <TextWrap>
                    <Headline>Now take a Look at My Works...</Headline>
                    <Underline />
                </TextWrap>
                {worksPage === 'none' ? mainpage() : null}
            <WorksBlock>
                {worksPage === 'webs' ? <WebPages changepage={changepage}/> : null}
                {worksPage === 'apps' ? <WebApps changepage={changepage}/> : null}
                {worksPage === 'components' ? <Components changepage={changepage} /> : null}
            </WorksBlock>
            </Wrapper>
        </Wrapper>
        </>
    )
}

export default WorksSection;