import styled from 'styled-components';
import Blob from '../../img/blob_intro.svg';

const Wrapper = styled.div `
    width:65%;
`
const BlobImg = styled.img `
    position: absolute;
    left: 0;
    width: 50%;
    top: 18%;
    z-index: -1;
`

const FieldWrap = styled.div `
    display: flex;
    padding: 50px;
`
const TextBlock = styled.div `
    width: 50%;
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.right ? 'flex-end' : 'flex-start'};
    text-align: ${props => props.right ? 'right' : null}
`
const ImgBlock = styled.div `
    width: 50%;
    margin: 0px 20px;
    height: 300px;
    background-color:var(--box-color);
    z-index: 5;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
`

const Headline = styled.h2 `
    color: var(--primary);
    font-size: 1.6rem;
    font-weight: 600;
`

const Underline = styled.div `
    width: 90%;
    height: 3px;
    margin-top: 10px;
    background-color: var(--primary);
`

const Text = styled.p `
    width: 90%;
    color: var(--primary);
    letter-spacing: 0px;
    line-height: initial;
    margin-top: 10px;
    text-align: ${props => props.right ? 'right' : null}
`

const IntroSection = () => {
    return(
        <Wrapper>
            <BlobImg src={Blob}/>
            <FieldWrap>
                <TextBlock>
                    <Headline>Delivering experience</Headline>
                    <Underline />
                    <Text>Using latest technologies and trends to deliver more than just a Website - delivering experience.</Text>
                </TextBlock>
                <ImgBlock>

                </ImgBlock>
            </FieldWrap>
            <FieldWrap>
                <ImgBlock>

                </ImgBlock>
                <TextBlock right>
                    <Headline>Beautifull and responsive</Headline>
                    <Underline />
                    <Text >Mobile, Desktop or Tablet, product always looks perfect on every device.</Text>
                </TextBlock>
            </FieldWrap>
                
        </Wrapper>
    )
}

export default IntroSection;