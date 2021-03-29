import styled from 'styled-components';
import Blob from '../../img/blob_intro.svg';
import BehindText from '../../img/behind_header.png'

const Wrapper = styled.div `
    width:65%;
`
const BlobImg = styled.img `
    position: absolute;
    left: ${props => props.behind ? '17%' : '0'};
    width: ${props => props.behind ? '34%' : '50%'};
    top: ${props => props.behind ? '9%' : '18%'};
    height: ${props => props.behind ? '35%' : null};
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
    color: var(--background);
    font-size: var(--t1);
    font-weight: 600;
`

const Underline = styled.div `
    width: 90%;
    height: 3px;
    margin-top: 10px;
    background-color: var(--background);
`

const Text = styled.p `
    font-size: var(--t2);
    width: 90%;
    color: var(--background);
    letter-spacing: 0px;
    line-height: initial;
    margin-top: 10px;
    text-align: ${props => props.right ? 'right' : null}
`
const Span = styled.span `
    font-weight: 600;
    color: var(--primary);
    background-color: var(--background)
`
const IntroSection = () => {
    return(
        <Wrapper>
            <BlobImg src={Blob}/>
            <FieldWrap>
                <TextBlock>
                    <BlobImg src={BehindText} behind/>
                    <Headline>Delivering experience</Headline>
                    <Underline />
                    <Text>I'm always using latest technologies and trends to deliver more than just a Website - <Span>I strive to deliver experience</Span> - all without compromising the performance.</Text>
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
                    <Text >Whether Your customers use Mobile, Desktop or Tablet, my product always looks <Span>perfect on every device.</Span></Text>
                </TextBlock>
            </FieldWrap>
                
        </Wrapper>
    )
}

export default IntroSection;