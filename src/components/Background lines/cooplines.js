import styled from 'styled-components';

const Line1 = styled.div `
    position: absolute;
    width: 0px;
    height: calc(550/1080*100%);
    left: calc(300/1920*100%);
    top: calc(400/1080*100%);
    border-left: 1px solid #000000;
`

const Line2 = styled.div `
    position: absolute;
    width: calc(1200/1920*100%);
    height: 0px;
    left: calc(200/1920*100%);
    top: calc(900/1080*100%);
    border-top: 1px solid #000000;
`

const Line3 = styled.div `
    position: absolute;
    width: calc(100/1920*100%);
    height: 0px;
    left: calc(1700/1920*100%);
    top: calc(900/1080*100%);
    border-top: 1px solid #000000;
`

const CoopLines = () => {
    return(
        <div>
            <Line1 />
            <Line2 />
            <Line3 />
        </div>
    )
}

export default CoopLines;