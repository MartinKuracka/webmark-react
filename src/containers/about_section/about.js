
import Myface from '../../img/face_BW2.PNG';
// i18n tanslation
import { useTranslation } from 'react-i18next';

const AboutSection = () => {

    const { t } = useTranslation();

    return(
        <div className='flex w-full max-w-screen-lg min-h-screen justify-center' id='about'>
            <div className='w-11/12 max-w-1024 flex mt-20 flex-col'>
                <h1 className='text-primary'>{t('About')}</h1>
                <div className='w-full bg-secondary shadow-xl lg:p-10'>
                    <div className='flex justify-center md:justify-start mt-5'>
                        <img className='w-1/3 md:w-1/5 br-5 rounded-full border-primary shadow-inner' src={Myface} alt='face' />
                        <h2 className='w-1/2 text-primary text-xl lg:text-2xl font-bold ml-5 mt-5 '>{t('Know_me')}</h2>                        
                    </div>
                    <p className='text-primary m-5 text-sm lg:text-lg'>{t('Me_info')}</p>
                    <p className='text-primary m-5 text-sm font-bold lg:text-2xl'>{t('about_quote')}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;