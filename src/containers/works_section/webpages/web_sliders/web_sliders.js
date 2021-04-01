import styled from 'styled-components';
import Image1 from '../../../../img/Thumb_apps.jpg';
import {ButtonDef, TextDef, HeadlineDef} from '../../../../components/styled_components';

const Wrapper = styled.div `
    margin: ${props => props.text ? '0px' : '25px'};
    display: flex;
    flex-direction: ${props => props.text ? 'column' : 'row'};
    height: 100%;
    background-color: #EFEBEA;
    z-index: 10;
    border-radius: var(--radius);
`
const TextField = styled.div `
    ${'' /* position: relative; */}
    margin: 0px 15px;
    width:45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
`
const Header = styled(HeadlineDef) `
    font-size: 1.5rem;
    margin-bottom: 15px;
    margin-top: ${props => props.tools ? '15px' : null}
`
const Desription = styled(TextDef) `
    letter-spacing: -1px;
`
const ButtonWrapper = styled.div `
    display: inline-flex;
    justify-content: flex-end;
`
const Image = styled.img `
    width: 50%;
    height: 50%;
`
const Button = styled(ButtonDef) `    
    margin-left: 10px;
`
export const Slide1 = () => {
    return(
        <>
        <Wrapper>
            <TextField>
                <Wrapper text>
                    <Header>Sviecka Luna</Header>
                    <Desription> this is my page i have used react and other libriaries to achive wthis amazing elffect tha t you see</Desription>
                    <Header tools> Tools used:</Header>
                    <Desription> this is my page i have used react and other libriaries to achive wthis amazing elffect tha t you see</Desription>
                </Wrapper>
                <ButtonWrapper>
                    <Button value='CODE' back>CODE</Button>
                    <Button name='LIVE' next >LIVE</Button>
                </ButtonWrapper>
            </TextField>
            <Image src={Image1} />
        </Wrapper>
        </>
    )
}

export const Slide2 = () => {
    return(
        <>
        <Wrapper>
            <TextField>
                <Wrapper text>
                    <Header>Sviecka Luna</Header>
                    <Desription> this is my page i have used react and other libriaries to achive wthis amazing elffect tha t you see</Desription>
                    <Header tools> Tools used:</Header>
                    <Desription> this is my page i have used react and other libriaries to achive wthis amazing elffect tha t you see</Desription>
                </Wrapper>
                <ButtonWrapper>
                    <Button value='CODE' back>CODE</Button>
                    <Button name='LIVE' next >LIVE</Button>
                </ButtonWrapper>
            </TextField>
            <Image src={Image1} />
        </Wrapper>
        </>
    )
}

export const Slide3 = () => {
    return(
        <>
        <Wrapper>
            <TextField>
                <Wrapper text>
                    <Header>Sviecka Luna</Header>
                    <Desription> this is my page i have used react and other libriaries to achive wthis amazing elffect tha t you see</Desription>
                    <Header tools> Tools used:</Header>
                    <Desription> this is my page i have used react and other libriaries to achive wthis amazing elffect tha t you see</Desription>
                </Wrapper>
                <ButtonWrapper>
                    <Button value='CODE' back>CODE</Button>
                    <Button name='LIVE' next >LIVE</Button>
                </ButtonWrapper>
            </TextField>
            <Image src={Image1} />
        </Wrapper>
        </>
    )
}

export const Slide4 = () => {
    return(
        <>
        <Wrapper>
            <TextField>
                <Wrapper text>
                    <Header>Sviecka Luna</Header>
                    <Desription> this is my page i have used react and other libriaries to achive wthis amazing elffect tha t you see</Desription>
                    <Header tools> Tools used:</Header>
                    <Desription> this is my page i have used react and other libriaries to achive wthis amazing elffect tha t you see</Desription>
                </Wrapper>
                <ButtonWrapper>
                    <Button value='CODE' back>CODE</Button>
                    <Button name='LIVE' next >LIVE</Button>
                </ButtonWrapper>
            </TextField>
            <Image src={Image1} />
        </Wrapper>
        </>
    )
}