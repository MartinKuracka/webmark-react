const MenuOverlay = ({handleMenu}) => {
    return(
        <div className='fixed w-full h-full bg-gray-300 flex  justify-center bg-opacity-50'>
            <ul className='w-full '>
                <label for='home'>
                    <a className='text-xl' href='#home' onClick={() => handleMenu()}>
                        <li className='h-1/6 bg-green-400 w-full flex justify-center items-center'>Home</li>
                    </a>
                </label>
                <label for='info'>
                    <a className='text-xl' href='#info' onClick={() => handleMenu()}>
                        <li className='h-1/6 bg-green-500 w-full flex justify-center items-center'>Info</li>
                    </a>
                </label>
                <label for='works'>
                    <a className='text-xl' href='#works' onClick={() => handleMenu()}>
                        <li className='h-1/6 bg-green-600 w-full flex justify-center items-center'>Works</li>
                    </a>
                </label>
                <label for='about'>
                    <a className='text-xl' href='#about' onClick={() => handleMenu()}>
                        <li className='h-1/6 bg-green-700 w-full flex justify-center items-center'>About</li>
                    </a>
                </label>
                <label for='coop'>
                    <a className='text-xl' href='#coop' onClick={() => handleMenu()}>
                        <li className='h-1/6 bg-green-800 w-full flex justify-center items-center'>Coop</li>
                    </a>
                </label>
                <label for='contact'>
                    <a className='text-xl' href='#contact' onClick={() => handleMenu()}>
                        <li className='h-1/6 bg-green-900 w-full flex justify-center items-center'>Contact</li>
                    </a>
                </label>
            </ul>
        </div>
    )
}

export default MenuOverlay;