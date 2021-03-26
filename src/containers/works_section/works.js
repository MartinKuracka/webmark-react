import styled from 'styled-components';
import Blob from '../../img/blob_works.svg';

const Wrapper = styled.div `
    width: ${props => props.inside ? '100%' : '65%'};
    display:flex;
    flex-direction: column;
`

const BlobImg = styled.img `
    position: absolute;
    right: 0;
    width: 50%;
    top: 17%;
    z-index: -1;
`

const TextWrap = styled.div `
    margin-top:50px;
    width: 100%;
    height: 30vh;
`
const Headline = styled.h2 `
    width: 100%;
    color: var(--primary);
    font-size: 1.6rem;
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
            <BlobImg src={Blob}/>
            <Wrapper inside>
                <TextWrap>
                    <Headline>Take a Look at My Works...</Headline>
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