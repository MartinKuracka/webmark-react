import MenuOverlay from './menuoverlay/menuoverlay'

const MobileMenu = ({menuDisplayed}) => {
    console.log('clicked', menuDisplayed);

    switch(menuDisplayed) {
        case true:
            return <MenuOverlay />;
        case false:
            return null;
        default:
            return null;
    }
}

export default MobileMenu;