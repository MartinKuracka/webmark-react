import styled from 'styled-components';
import H from '../../img/H.png';
import I from '../../img/I.png';
import W from '../../img/W.png';
import A from '../../img/A.png';
import C from '../../img/C.png';
import {WrapperDef} from '../../components/styled_components';
import Logo from '../../img/logo_SVG.svg';

const NavWrapper = styled(WrapperDef)`
    flex-direction: row;
    align-items: flex-start;
    position: fixed;
    width: 100vw;
    height: 60px;
    z-index: 1;
    padding-right: 35px;
    background-color: var(--primary2);
`
const Letter = styled.img `
    position: absolute;
    height:2.1rem;
    margin-top: 18px;
    margin-left: ${props => props.i ? '10px' :
                            props.w ? '-5px' :
                            props.c ? '3px'  : null};
`
const Ul = styled.ul `
    list-style: none;
    display: flex;
    text-decoration: none;
`
const Li = styled.li `
    display: flex;
    flex-direction: column;
    padding-top: 102px;
    margin-right: 50px;
    transition: transform 130ms ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`
const Link = styled.a `
    position:absolute;
    font-size: var(--t2);
    font-weight: 900;
    color: var(--primary);
    text-decoration: none;
    cursor: pointer;
    text-shadow: 2px 2px var(--background);
`
const Name = styled.p `
    font-family: 'Cinzel', serif;
    position:absolute;
    margin-top: 35px;
    margin-left: ${props => props.nfo ? '25px': '33px'};
    font-weight:300;
`
const LogoIcon = styled.img `
  position: absolute;
  width: 50px;
  left: 5%;
  top: 20px;
  z-index: 5;
`
const Navbar = () => {
    return(
        <>
        
        </>
    )
}

export default Navbar;