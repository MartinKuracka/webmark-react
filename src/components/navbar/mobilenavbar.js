import { useState } from 'react';
// images
import Logo from '../../img/logo_SVG.svg';
// components
import Hamburger from 'hamburger-react';
import MobileMenu from './mobilemenu/mobilemenu'

const MobileNavbar = () => {

    const [isOpen, setOpen] = useState(false);
    const [menuDisplayed, setMenu ] = useState(false);

    const handleMenu = () => {
        setMenu(!menuDisplayed);
        setOpen(!isOpen);
    }

    return(
        <nav className='w-full h-14 bg-primary fixed flex justify-between md:hidden'>
            <img className='h-6 my-auto m-4' src={Logo} />
            <MobileMenu menuDisplayed={menuDisplayed} handleMenu={handleMenu} />
            <Hamburger toggled={isOpen} toggle={setOpen} color="#ffffff" size={30} onToggle={() => handleMenu()} label="Show menu"/>
        </nav>
    )
}

export default MobileNavbar;