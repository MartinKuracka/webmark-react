import styled from 'styled-components';

const Wrapper = styled.div `
    position: relative;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
`
const Headline = styled.h2 `
    width: 100%;
    font-size: var(--t1);
    font-weight: 600;
`
const Form = styled.form `
    width: 80%;
    ${'' /* max-width: 800px; */}
    height:430px;
    border-radius: var(--radius);
    box-shadow: var(-shadow);
    background-color: #FFFAFA;
`
const UserField = styled.div `
    width: 100%;
    display: inline-flex;
    padding: 10px;
    &:children {
        border-radius: var(--radius)
    }
`
const Input = styled.input `
    width: 100%;
    padding: 10px;
`
const TextField = styled.div `
    display: inline-flex;
    width: 100%;
    padding:10px;
    height: 4rem;
`
const Message = styled.textarea `
    width: 70%;
    height: 100%;
`
const Button = styled.button `
    width:30%;
    height: 100%;
    background-color: var(--primary2);
    font-family: 'Montserrat', sans-serif;
    font-size: var(--t1);
`
const ContactSection = () => {
    return(
        <Wrapper>
            <Headline>If You got up to here,</Headline>
            <Headline>something probably caught Your attention...</Headline>
            <Headline>Don't think twice, get in touch - let's bring Your idea to life!</Headline>
            <Form>
                <UserField>
                    <Input type='name' />
                    <Input type='email' />
                </UserField>
                <TextField>
                    <Message type='text' />
                    <Button type='submit' />
                </TextField>
            </Form>
        </Wrapper>
    )
}

export default ContactSection;