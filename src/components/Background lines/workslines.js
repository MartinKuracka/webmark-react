import styled from 'styled-components';

const Line1 = styled.div `
    position: absolute;
    width: 0px;
    height: calc(930/1080*100%);
    left: calc(300/1920*100%);
    top: calc(80/1080*100%);
    border-left: 1px solid #000000;
    z-index: -5:
`

const Line2 = styled.div `
    position: absolute;
    width: calc(1520/1920*100%);
    height: 0px;
    left: calc(200/1920*100%);
    top: calc(900/1080*100%);
    border-top: 1px solid #000000;
    z-index: -5:
`

const WorksLines = () => {
    return(
        <div>
            <Line1 />
            <Line2 />
        </div>
    )
}

export default WorksLines;