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
    right: 30px;
    z-index: 5;
    opacity: 0.8;
`
const Letter = styled.img `
    position: absolute;
    height:2.1rem;
    margin-top: 13px;
    margin-left: ${props => props.i ? '10px' : 
                            props.w ? '-5px' : 
                            props.c ? '3px'  : null};
    
`
const NavButton = styled.img `
    position: absolute;
    width: 60px;
    z-index: -1;
    margin-left: 40px;
    margin-top:35px;
`
const Ul = styled.ul `
    list-style: none;
    margin-left: -30px;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-decoration: none;
`
const Li = styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: rotate(-13deg);
    padding-top: 72px;
    margin-right: 80px;
    transition: transform 230ms ease-in-out;
    &:hover {
        transform: scale(1.1);
        ${'' /* transform: rotate(30deg); */}
    }
`
const Link = styled.a `
    font-size: 3rem;
    font-weight: 900;
    color: var(--primary);
    text-decoration: none;
    cursor: pointer;
    text-shadow: 2px 2px var(--background);
    ${'' /* z-index: 200; */}
`
const Navbar = () => {
    return(
        <div>
            <NavWrapper>
                <Ul>
                    <Li>
                        <NavButton src={Button} />
                        <Link href="#home">
                            <Letter src={H} />
                        </Link>
                    </Li>
                    <Li>
                        <NavButton src={Button} />
                        <Link href="#intro">
                            <Letter src={I} i/>
                        </Link>
                    </Li>
                    <Li>
                        <NavButton src={Button} />
                        <Link href="#works">
                            <Letter src={W} w/>
                        </Link>
                    </Li>
                    <Li>
                        <NavButton src={Button} />
                        <Link href="#about">
                            <Letter src={A} />
                        </Link>
                    </Li>
                    <Li>
                        <NavButton src={Button} />
                        <Link href="#coop">
                            <Letter src={C} c/>
                        </Link>
                    </Li>
                    <Li>
                        <NavButton src={Button} />
                        <Link href="#contact">
                            <Letter src={C} c/>
                        </Link>
                    </Li>
                </Ul>
            </NavWrapper>
        </div>
    )
}

export default Navbar;