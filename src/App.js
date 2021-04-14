// components
import MobileNavbar from './containers/navbar/mobilenavbar';
import HeadSection from './containers/home_section/home';
import IntroSection from './containers/intro_section/intro';
import WorksSection from './containers/works_section/works';
import AboutSection from './containers/about_section/about';
import CoopSection from './containers/coop_section/coop';
import ContactSection from  './containers/contact_section/contact';


function App() {
  return (
    <div>
      {/* <DesktopNavbar /> */}
      <MobileNavbar />
      <HeadSection />
      <IntroSection />
      <WorksSection />
      <AboutSection />
      <CoopSection />
      <ContactSection />
    </div>
  );
}

export default App;
