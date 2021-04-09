import styled from 'styled-components';
import Logo from './img/logo_SVG.svg';
import HeaderLines from './components/Background lines/homelines';
import IntroLines from './components/Background lines/introlines';
import WorksLines from './components/Background lines/workslines';
import AboutLines from './components/Background lines/aboutlines';
import CoopLines from './components/Background lines/cooplines';
import ContactLines from './components/Background lines/contactlines';
import HeadSection from './containers/home_section/home';
import Navbar from './containers/navbar/navbar';
import IntroSection from './containers/intro_section/intro';
import WorksSection from './containers/works_section/works';
import AboutSection from './containers/about_section/about';
import ContactSection from './containers/contact_section/contact';
import CoopSection from './containers/coop_section/coop';
import Background from './img/hdr_background.svg';

const Section = styled.div `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: ${props => props.works ? 'stretch' : 'start'};
  width: 100vw;
  min-height: 100vh;
  height: auto;
  margin: 0px;
  overflow: visible;
`
const Back = styled.img `
    position: absolute;
    width: auto;
    align-content: center;
    overflow: hidden;
`

function App() {
  return (
    <div>
      {/* <LogoIcon src={Logo}/> */}
      <Navbar />
      <Section id='home' home>
        <HeadSection />
      </Section>
      {/* <Section id='intro'>
        <IntroLines />
        <IntroSection />
      </Section> */}
      {/* <Section id='works' works>
        <WorksLines />
        <WorksSection />
      </Section>
      <Section id='about' works>
        <AboutLines />
        <AboutSection />
      </Section>
      <Section id='coop'>
        <CoopLines/>
        <CoopSection />
      </Section>
      <Section id='contact'>
        <ContactLines />
        <ContactSection />
      </Section> */}
    </div>
  );
}

export default App;
