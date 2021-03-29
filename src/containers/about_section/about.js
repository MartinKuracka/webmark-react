import styled from 'styled-components';
import Blob from '../../img/blob_about.svg';

const Wrapper = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: ${props => props.headline ? '40%' : '65%'};
`
const BlobImg = styled.img `
    position: absolute;
    left: 15%;
    width: 18%;
    top: 18%;
    z-index: -1;
`
const Headline = styled.h2 `
    margin-top: 160px;
    width: 100%;
    text-align: end;
    font-size: var(--t1);
    color: var(--primary);
    font-weight: 600;
`
const Underline = styled.div `
    width: 100%;
    height: 3px;
    margin-top: 10px;
    right: 0px;
    align-self: end;
    background-color: var(--primary);
`
const AboutSection = () => {
    return(
        <>
            <BlobImg src={Blob}/>
            <Wrapper>        
                <Wrapper headline>
                    <Headline>And now, get to know me...</Headline>
                    <Underline />
                </Wrapper>    
               
            </Wrapper>
        </>
    )
}

export default AboutSection;