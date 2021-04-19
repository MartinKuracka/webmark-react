// images
import Logo from '../../img/logo_SVG.svg';

const DesktopNavbar = () => {
    return(
        <>
        <div className='w-full h-14 bg-primary fixed hidden md:inline-flex justify-center'>
            <div className='w-11/12 max-w-screen-xl justify-between  inline-flex'>
                <div className='flex'>
                    <img className='h-6 my-auto m-4' src={Logo} />
                </div>
                <div className='flex'>
                    <label className='my-auto text-white '>
                        <a className='text-xl  ' href='#home' >Home</a>
                    </label>
                    <label className='my-auto text-white ml-8'>
                        <a className='text-xl  ' href='#intro' >Intro</a>
                    </label>
                    <label className='my-auto text-white ml-8'>
                        <a className='text-xl  ' href='#works' >Works</a>
                    </label>
                    <label className='my-auto text-white ml-8'>
                        <a className='text-xl  ' href='#about' >About</a>
                    </label>
                    <label className='my-auto text-white ml-8'>
                        <a className='text-xl  ' href='#coop' >Coop</a>
                    </label>
                    <label className='my-auto text-white ml-8'>
                        <a className='text-xl  ' href='#contact' >Contact</a>
                    </label>
                </div>
            </div>
        </div>
        </>
    )
}

export default DesktopNavbar;