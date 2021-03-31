import styled from 'styled-components';

const Line1 = styled.div `
    position: absolute;
    width: 0px;
    height: calc(150/1080*100%);
    left: calc(300/1920*100%);
    top: calc(80/1080*100%);
    border-left: 1px solid #000000;;
`

const Line2 = styled.div `
    position: absolute;
    width: calc(280/1920*100%);
    height: 0px;
    left: calc(200/1920*100%);
    top: calc(150/1080*100%);
    border-top: 1px solid #000000;
`

const Line3 = styled.div `
    position: absolute;
    width: calc(200/1920*100%);
    height: 0px;
    left: calc(1530/1920*100%);
    top: calc(150/1080*100%);
    border-top: 1px solid #000000;
`

const Line4 = styled.div `
    position: absolute;
    width: 0px;
    height: calc(450/1080*100%);
    left: calc(300/1920*100%);
    top: calc(500/1080*100%);
    border-left: 1px solid #000000;
`

const Line5 = styled.div `
    position: absolute;
    width: 0px;
    height: calc(550/1080*100%);
    left: calc(1620/1920*100%);
    top: calc(80/1080*100%);
    border-left: 1px solid #000000;
`

const AboutLines = () => {
    return(
        <div>
            <Line1 />
            <Line2 />
            <Line3 />
            <Line4 />
            <Line5 />
        </div>
    )
}

export default AboutLines;