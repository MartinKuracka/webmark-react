import { useState } from 'react';
import Logo from '../../img/logo_SVG.svg';
import './navbar.css';
// components
import Hamburger from 'hamburger-react';

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);
    const [menuDisplayed, setMenu ] = useState(false);

    const handleMenu = () => {
        console.log('clicked');
        setMenu(!menuDisplayed);
    }

    return(
        <nav className='w-full h-14 bg-primary fixed flex justify-between p-2'>
            <img src={Logo} className='h-6 my-auto' />
            <h1 hidden={menuDisplayed}> Menu </h1>
            <Hamburger className='my-auto' toggled={isOpen} toggle={setOpen} color="#ffffff" size={30} onToggle={() => handleMenu()}/>
        </nav>
    )
}

export default Navbar;