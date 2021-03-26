import styled from 'styled-components';
import LogoIcon from '../../img/logo_SVG.svg';

const Logo = styled.img `
    position: absolute;
    left: 12%;
    top: 20px;
`

const HeadSection = () => {
    return(
        <div>
            <Logo src={LogoIcon}/>
        </div>
    )
}

export default HeadSection;
