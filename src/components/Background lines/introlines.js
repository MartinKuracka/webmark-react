import styled from 'styled-components';

const Line1 = styled.div `
    position: absolute;
    width: 0px;
    height: calc(349/1080*100%);
    left: calc(300/1920*100%);
    top: calc(-80/1080*100%);
    border-left: 1px solid #000000;
`

const Line2 = styled.div `
    position: absolute;
    width: calc(1520/1920*100%);
    height: 0px;
    left: calc(200/1920*100%);
    top: calc(165/1080*100%);
    border-top: 1px solid #000000;
`

const Line3 = styled.div `
    position: absolute;
    width: 0px;
    height: calc(636/1080*100%);
    left: calc(300/1920*100%);
    top: calc(444/1080*100%);
    border-left: 1px solid #000000;
`

const Line4 = styled.div `
    position: absolute;
    width: 0px;
    height: calc(551/1080*100%);
    left: calc(1620/1920*100%);
    top: calc(104/1080*100%);
    border-left: 1px solid #000000;
`

const IntroLines = () => {
    return(
        <div>
            <Line1 />
            <Line2 />
            <Line3 />
            <Line4 />
        </div>
    )
}

export default IntroLines;