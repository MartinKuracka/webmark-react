import styled from 'styled-components';

const Line1 = styled.div `
    position: absolute;
    width: 0px;
    height: calc(338/1080*100%);
    left: 15%;
    top: 100px;
    border-left: 1px solid #000000;
`

const Line2 = styled.div `
    position: absolute;
    width: calc(1520/1920*100%);
    height: 0px;
    left: calc(200/1920*100%);
    top: calc(885/1080*100%);
    border-top: 1px solid #000000;
`

const Line3 = styled.div `
    position: absolute;
    width: 0;
    height: calc(1511/1920*100%);
    top: calc(119/1080*100%);
    left: calc(1620/1920*100%);
    border-left: 1px solid #000000;
`

const HeaderLines = () => {
    return(
        <div>
            <Line1 />
            <Line2 />
            <Line3 />
        </div>
    )
}

export default HeaderLines;