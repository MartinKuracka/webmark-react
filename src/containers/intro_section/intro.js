import styled from 'styled-components';
import Blob from '../../img/blob_intro.svg';

const Wrapper = styled.div `
    
`

const BlobImg = styled.img `
    position: absolute;
    left: 0;
    width: 50%;
    top: 18%;
`

const IntroSection = () => {
    return(
        <Wrapper>
            <BlobImg src={Blob}/>
        </Wrapper>
    )
}

export default IntroSection;