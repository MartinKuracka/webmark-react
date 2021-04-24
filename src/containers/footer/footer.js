import LogoWebmark from '../../img/footer_logo.png';
import Github from './../../img/github.png';
import LinkedIn from './../../img/linkedin.png';

const Footer = () => {
    return(
        <div className='flex flex-col w-full items-center justify-center h-56 bg-white mt-56'>
            <div className='flex my-5'>
                <a clasName='pointer' href='https://github.com/MartinKuracka' target='_blank'>
                    <img className='w-8 mx-3' src={Github} alt='git' />
                </a>
                <a clasName='pointer' href='https://www.linkedin.com/in/martin-kuracka-72b8a91b0/' target='_blank'>
                    <img className='w-8 mx-3' src={LinkedIn} alt='linkedIn' />
                </a>
            </div>
            <div className='flex items-center'>
                <h2 className='text-black'>Created by <span className='font-semibold text-xl tracking-tighter	'>WebMarK</span> © 2021</h2>
            </div>
        </div>
    )
}

export default Footer;