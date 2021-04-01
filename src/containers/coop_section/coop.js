import styled from 'styled-components';
import {WrapperDef, HeadlineDef, TextDef} from '../../components/styled_components'
import BckImg from '../../img/Coop Background.svg'


const Wrapper = styled(WrapperDef) `
    width: 65%;
`
const Img = styled.img `
    width: 100vw;
`

const CoopSection = () => {

    return(
        <>
        {/* <Img src={BckImg} /> */}
        <Wrapper>
            
        </Wrapper>
        </>
    )
}

export default CoopSection;
