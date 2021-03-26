import styled from 'styled-components';

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
      <Section>
        Home
      </Section>
      <Section>
        Info
      </Section>
      <Section>
        Works
      </Section>
      <Section>
        About
      </Section>
      <Section>
        Coop
      </Section>
      <Section>
        Contact
      </Section>
    </div>
  
  );
}

export default App;
