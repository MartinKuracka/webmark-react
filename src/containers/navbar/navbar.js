import styled from 'styled-components';
import Button from '../../img/navbar_button.svg';
import H from '../../img/H.png';
import I from '../../img/I.png';
import W from '../../img/W.png';
import A from '../../img/A.png';
import C from '../../img/C.png';

const NavWrapper = styled.nav `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    width: 100px;
    height: 100vh;
    ${'' /* background-color: var(--primary2); */}
    right: 0px;
    z-index: 5;
    opacity: 1;
    margin-top: -10px;
    padding-right: 25px;
    background-color: rgba(255,255,255,0.3)
`
const Letter = styled.img `
    position: absolute;
    height:2.1rem;
    margin-top: 18px;
    margin-left: ${props => props.i ? '10px' :
                            props.w ? '-5px' :
                            props.c ? '3px'  : null};
`
const NavButton = styled.img `
    position: absolute;
    width: 80px;
    z-index: -1;
    margin-left: -20px;
    margin-top:35px;

`
const Ul = styled.ul `
    list-style: none;
    margin-left: -30px;
    display: flex;
    flex-direction: column;
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
    position:absolute;
    margin-top: 35px;
    margin-left: ${props => props.nfo ? '25px': '33px'};
    font-weight:300;
`
const Navbar = () => {
    return(
        <div>
            <NavWrapper>
                <Ul>
                    <Li>
                        <Link href="#home">
                            {/* <NavButton src={Button} /> */}
                            <Letter src={H} />
                            <Name>ome</Name>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="#intro">
                            {/* <NavButton src={Button} /> */}
                            <Letter src={I} i/>
                            <Name nfo>nfo</Name>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="#works">
                            {/* <NavButton src={Button} /> */}
                            <Letter src={W} w/>
                            <Name>orks</Name>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="#about">
                            {/* <NavButton src={Button} /> */}
                            <Letter src={A} />
                            <Name>bout</Name>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="#coop">
                            {/* <NavButton src={Button} /> */}
                            <Letter src={C} c/>
                            <Name>oop</Name>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="#contact">
                            {/* <NavButton src={Button} /> */}
                            <Letter src={C} c/>
                            <Name>ontact</Name>
                        </Link>
                    </Li>
                </Ul>
            </NavWrapper>
        </div>
    )
}

export default Navbar;