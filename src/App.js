import styled from 'styled-components';
import HeaderLines from './components/Background lines/homelines';
import IntroLines from './components/Background lines/introlines';
import WorksLines from './components/Background lines/workslines';
import AboutLines from './components/Background lines/aboutlines';
import CoopLines from './components/Background lines/cooplines';
import ContactLines from './components/Background lines/contactlines';
import HeadSection from './containers/home_section/home';
import Navbar from './containers/navbar/navbar';

const Section = styled.div `
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
margin: 0px;
`

function App() {
  return (
    <div>
      <Navbar />
      <Section id='home'>
      <HeaderLines />
      <HeadSection />
        Home
      </Section>
      <Section>
      <IntroLines />
        Info
      </Section>
      <Section id='works'>
      <WorksLines />
        Works
      </Section>
      <Section id='about'>
      <AboutLines />
        About
      </Section>
      <Section id='coop'>
      <CoopLines/>
        Coop
      </Section>
      <Section id='contact'>
      <ContactLines />
        Contact
      </Section>
    </div>
  );
}

export default App;
