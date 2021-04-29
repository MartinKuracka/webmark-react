import './menuoverlay_animate.css';
// i18n tanslation
import { useTranslation } from 'react-i18next';
// Images
import Sk from '../../../../img/icon/sk.png';
import En from '../../../../img/icon/uk.png';

const MenuOverlay = ({handleMenu}) => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (ln) => {
        i18n.changeLanguage(ln);
        localStorage.setItem('lang', ln);
    }

    return(
        <div className='fixed w-full h-screen bg-gray-300 flex  justify-center bg-opacity-50 animateHome'>
            <ul className='w-full h-full'>
                <li className='flex h-20 w-full justify-center bg-primary2 w-48'>
                    <b className='w-12 flex font-bold text-lg text-primary my-auto px-3'>{t('Lang')}</b>
                    <img className='w-16 h-8 my-auto mx-3 cursor-pointer' src={En} alt='EN' name='En' onClick={() => changeLanguage('en')} />
                    <img className='w-16 h-8 my-auto mx-3 cursor-pointer' src={Sk} alt='SK' name='Sk' onClick={() => changeLanguage('sk')} />
                </li>
                <div className='h-5/6'>
                    <label  for='home'>
                        <a className='text-xl ' href='#home' onClick={() => handleMenu()}>
                            <li className='h-1/6 bg-green-400 w-full flex justify-center items-center '>{t('home')}</li>
                        </a>
                    </label>
                    <label for='intro'>
                        <a className='text-xl animateIntro' href='#intro' onClick={() => handleMenu()}>
                            <li className='h-1/6 bg-green-500 w-full flex justify-center items-center'>{t('intro')}</li>
                        </a>
                    </label>
                    <label for='works'>
                        <a className='text-xl' href='#works' onClick={() => handleMenu()}>
                            <li className='h-1/6 bg-green-600 w-full flex justify-center items-center'>{t('works')}</li>
                        </a>
                    </label>
                    <label for='about'>
                        <a className='text-xl' href='#about' onClick={() => handleMenu()}>
                            <li className='h-1/6 bg-green-700 w-full flex justify-center items-center'>{t('about')}</li>
                        </a>
                    </label>
                    <label for='coop'>
                        <a className='text-xl' href='#coop' onClick={() => handleMenu()}>
                            <li className='h-1/6 bg-green-800 w-full flex justify-center items-center'>{t('coop')}</li>
                        </a>
                    </label>
                    <label for='contact'>
                        <a className='text-xl' href='#contact' onClick={() => handleMenu()}>
                            <li className='h-1/6 bg-green-900 w-full flex justify-center items-center'>{t('cont')}</li>
                        </a>
                    </label>
                </div>
            </ul>
        </div>
    )
}

export default MenuOverlay;