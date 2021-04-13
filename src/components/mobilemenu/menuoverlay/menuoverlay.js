const MenuOverlay = () => {
    return(
        <div className='fixed w-full h-full bg-gray-300 flex  justify-center bg-opacity-50'>
            <ul className='w-full '>
                <label for='home'>
                    <li className='h-1/6 bg-green-200 w-full flex justify-center items-center'>
                        <a href='#home'>Home</a>
                    </li>
                </label>
                <label for='info'>
                    <li className='h-1/6 bg-green-300 w-full flex justify-center items-center'>
                        <a href='#info'>Info</a>
                    </li>
                </label>
                <label for='works'>
                    <li className='h-1/6 bg-green-400 w-full flex justify-center items-center'>
                        <a href='#works'>Works</a>
                    </li>
                </label>
                <label for='about'>
                    <li className='h-1/6 bg-green-500 w-full flex justify-center items-center'>
                        <a href='#about'>About</a>
                    </li>
                </label>
                <label for='coop'>
                    <li className='h-1/6 bg-green-600 w-full flex justify-center items-center'>
                        <a href='#coop'>Coop</a>
                    </li>
                </label>
                <label for='contact'>
                    <li className='h-1/6 bg-green-700 w-full flex justify-center items-center'>
                        <a href='#contact'>Contact</a>
                    </li>
                </label>
            </ul>
        </div>
    )
}

export default MenuOverlay;