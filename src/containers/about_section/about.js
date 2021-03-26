import styled from 'styled-components';
import Blob from '../../img/blob_about.svg';


const BlobImg = styled.img `
    position: absolute;
    left: 15%;
    width: 18%;
    top: 18%;
    z-index: -1;
`

const AboutSection = () => {
    return(
        <div>
            <BlobImg src={Blob}/>
        </div>
    )
}

export default AboutSection;