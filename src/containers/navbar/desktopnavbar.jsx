// images
import Logo from '../../img/logo_SVG.svg';
// i18n tanslation
import { useTranslation } from 'react-i18next';

const DesktopNavbar = () => {

    const { t } = useTranslation();

    return(
        <>
        <div className='w-full h-14 bg-primary fixed hidden md:inline-flex justify-center z-20'>
            <div className='w-11/12 max-w-xl justify-between inline-flex'>
                <div className='flex'>
                    <img className='h-6 my-auto m-4' src={Logo} alt='logo'/>
                </div>
                <div className='flex'>
                    <label className='my-auto text-white '>
                        <a className='text-xl  ' href='#home' >{t('home')}</a>
                    </label>
                    <label className='my-auto text-white ml-10'>
                        <a className='text-xl  ' href='#intro' >{t('intro')}</a>
                    </label>
                    <label className='my-auto text-white ml-10'>
                        <a className='text-xl  ' href='#works' >{t('works')}</a>
                    </label>
                    <label className='my-auto text-white ml-10'>
                        <a className='text-xl  ' href='#about' >{t('about')}</a>
                    </label>
                    <label className='my-auto text-white ml-10'>
                        <a className='text-xl  ' href='#coop' >{t('coop')}</a>
                    </label>
                    <label className='my-auto text-white ml-10'>
                        <a className='text-xl  ' href='#contact' >{t('cont')}</a>
                    </label>
                </div>
            </div>
        </div>
        </>
    )
}

export default DesktopNavbar;