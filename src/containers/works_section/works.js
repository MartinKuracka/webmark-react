import styled from 'styled-components';
import Blob from '../../img/blob_works.svg';


const BlobImg = styled.img `
    position: absolute;
    right: 0;
    width: 50%;
    top: 17%;
`

const WorksSection = () => {
    return(
        <div>
            <BlobImg src={Blob}/>
        </div>
    )
}

export default WorksSection;