import styled from 'styled-components';
import Blob from '../../img/blob_about.svg';
import MyFace from '../../img/face_BW2.PNG';
import ButtonDef from '../../components/button'

const Wrapper = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: ${props => props.headline ? '40%' : '65%'};
`
const BlobImg = styled.img `
    position: absolute;
    left: 5%;
    width: 18%;
    top: 26%;
    z-index: -1;
`
const Headline = styled.h2 `
    margin-top: 10%;
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
const InfoWrap = styled.div `
    margin-top: 20px;
    width: 100%;
    ${'' /* height: 900px; */}
    background-color: rgba(255,255,255,0.4);
    border-radius: var(--radius);
`
const Header = styled.div`
    margin: 30px;
    width: 100%;
    display: flex;
`
const Face = styled.img `
    float: left;
    width: 25%;
    height: 25%;
    margin: 0px 15px;
    border-radius: 50%;
`
const Textfield = styled.p `
    font-size: var(--t1);
    line-height: initial;
    letter-spacing: 0;
    width: ${props => props.main ? '90%' : '60%'};
    padding: ${props => props.main ? '30px 40px 40px 40px' : '20px'};
`
const Button = styled(ButtonDef) `    
    margin: 0px 0px 50px 40px;
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
                <InfoWrap>
                    <Header>
                        <Face src={MyFace} />
                        <Textfield>
                            I am an enthusiastic and positive person who loves to learn and discover. I have rich life experience from living in different countries meeting different people and cultures. My main life motto is - make no judgements, be kind, respectfull and always do Your best. I am former Electrical Engineer, Applications Engineer, Project Manager, Support Technician or even dancer, DJ and music producer. I am also self-taught Web Developer with desire to make great things and help make quality of peoples lifes better. Combine all these experiences into one and You will get a person that is capable of great appreciation and understanding, ability to see the bigger picture and to bring feel good attitude to work environment. I work hard ... and play hard...  </Textfield>
                    </Header>
                    <Textfield main>
                        As a Web Developer, my weapon of choice became React for it's great fliexibility and perspective future. For better state management and performance I use Redux, I prefer Styled Components for styling - or I can work with libraries like Bootstrap based on requirements. Proficiency in HTML and CSS is a must, no need to mention those and for server side I would choose NodeJS + ExpressJS. In regards of the databases, MySQL or PostgreSQL is what I would go for. <br/><br/>If You wish, You can download my CV below for more details.  
                    </Textfield>
                    <Button>PDF</Button>
                </InfoWrap>
            </Wrapper>
        </>
    )
}

export default AboutSection;