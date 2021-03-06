// images
import Logo from '../../img/logo_SVG.svg';
// i18n tanslation
import { useTranslation } from 'react-i18next';
// Images
import Sk from '../../img/icon/sk.png';
import En from '../../img/icon/uk.png';

const DesktopNavbar = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (ln) => {
        i18n.changeLanguage(ln);
        localStorage.setItem('lang', ln);
    }

    return(
        <>
        <div className='w-full h-14 bg-primary fixed hidden md:inline-flex justify-center z-20'>
            <div className='w-11/12 max-w-xl justify-between inline-flex'>
                <div className='flex'>
                    <img className='h-6 my-auto m-4' title='WebMarK Logo' src={Logo} alt='logo'/>
                </div>
                <div className='flex'>
                    <label className='my-auto text-white '>
                        <a className='text-base' href='#home' title={t('home')}>{t('home')}</a>
                    </label>
                    <label className='my-auto text-white ml-4'>
                        <a className='text-base' href='#intro' title={t('intro')}>{t('intro')}</a>
                    </label>
                    <label className='my-auto text-white ml-4'>
                        <a className='text-base' href='#works' title={t('works')}>{t('works')}</a>
                    </label>
                    <label className='my-auto text-white ml-4'>
                        <a className='text-base' href='#about' title={t('about')}>{t('about')}</a>
                    </label>
                    <label className='my-auto text-white ml-4'>
                        <a className='text-base' href='#coop' title={t('coop')}>{t('coop')}</a>
                    </label>
                    <label className='my-auto text-white mx-4'>
                        <a className='text-base' href='#contact' title={t('cont')}>{t('cont')}</a>
                    </label>
                    <div className='flex h-full bg-primary2 w-48'>
                        <b className='w-12 flex font-bold text-lg text-primary my-auto px-3'>{t('Lang')}</b>
                        <img className='w-10 h-6 my-auto mx-3 cursor-pointer' src={En} alt='EN' name='En' title={t('EnTitle')} onClick={() => changeLanguage('en')} />
                        <img className='w-10 h-6 my-auto mx-3 cursor-pointer' src={Sk} alt='SK' name='Sk' title={t('SkTitle')} onClick={() => changeLanguage('sk')} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DesktopNavbar;