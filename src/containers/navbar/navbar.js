import styled from 'styled-components';

const NavWrapper = styled.nav `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    width: 100px;
    height: 100vh;
    background-color: var(--primary2);
    right: 0;
    z-index: 2;
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
    transform: rotate(30deg);
    padding-top: 50px;
`
const Link = styled.a `
    color: var(--background);
    text-decoration: none;
    cursor: pointer;
`

const Navbar = () => {
    return(
        <div>
            <NavWrapper>
                <Ul>
                    <Li>
                        <Link href="#home">Home</Link>
                    </Li>
                    <Li>
                        <Link href="#works">Works</Link>
                    </Li>
                    <Li>
                        <Link href="#about">About</Link>
                    </Li>
                    <Li>
                        <Link href="#coop">Coop</Link>
                    </Li>
                    <Li>
                        <Link href="#contact">Contact</Link>
                    </Li>
                </Ul>
            </NavWrapper>
        </div>
    )
}

export default Navbar;