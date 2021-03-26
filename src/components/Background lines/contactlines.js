import styled from 'styled-components';

const Line1 = styled.div `
    position: absolute;
    width: 0px;
    height: calc(250/1080*100%);
    left: calc(1620/1920*100%);
    top: calc(50/1080*100%);
    border-left: 1px solid #000000;
`

const Line2 = styled.div `
    position: absolute;
    width: calc(900/1920*100%);
    height: 0px;
    left: calc(800/1920*100%);
    top: calc(100/1080*100%);
    border-top: 1px solid #000000;
`

const ContactLines = () => {
    return(
        <div>
            <Line1 />
            <Line2 />
        </div>
    )
}

export default ContactLines;