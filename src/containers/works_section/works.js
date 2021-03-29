import styled from 'styled-components';
import Blob from '../../img/blob_works.svg';
import Blob3 from '../../img/works-blob2.svg'

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
    width: 100%;
    color: var(--primary);
    font-size: var(--t1);
    font-weight: 600;
`
const WorksBlock = styled.div `
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`
const ImgBlock = styled.div `
    width: 30%;
    height: 300px;
    background-color:var(--box-color);
    z-index: 5;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
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
                    <ImgBlock />
                    <ImgBlock />
                    <ImgBlock />
                </WorksBlock>
            </Wrapper>
        </Wrapper>
    )
}

export default WorksSection;