import MenuOverlay from './menuoverlay/menuoverlay'

const MobileMenu = ({menuDisplayed, handleMenu}) => {

    switch(menuDisplayed) {
        case true:
            return <MenuOverlay handleMenu={handleMenu} />;
        case false:
            return null;
        default:
            return null;
    }
}

export default MobileMenu;