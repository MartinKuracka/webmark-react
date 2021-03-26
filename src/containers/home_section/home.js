import styled from 'styled-components';
import Blob from '../../img/blobs_header.svg';

const Image = styled.img `
    position: absolute;
    margin: 100px auto;
    width: 80%;
`

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    position: relative;
    margin: 20px auto;
    width: 70%;
    height: 100%;
`

const HeadSection = () => {
    return(
        <Wrapper>
            <Image src={Blob}/>
        </Wrapper>
    )
}

export default HeadSection;
