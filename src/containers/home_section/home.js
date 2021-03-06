// Images
import Webmark from '../../img/Web Design.svg';
import Hero from '../../img/hdr_image.svg';
import Experience from '../../img/undraw_escaping_my1b.svg';
// Css
import './home.css';
// i18n translations
import { useTranslation } from 'react-i18next';
// AOS animation
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

const HeadSection = () => {

    AOS.init();

    const { t } = useTranslation();

    return(
        <>
        <section className='flex w-full flex-col bg-headerImg lg:items-center image overflow-hidden' id='home'>
            <div className='w-11/12 flex flex-col max-w-xl mx-auto items-center'>
                {/* Home section */}
                <div className='w-full min-h-screen flex flex-col lg:flex-row lg:justify-center'>
                    <div className='flex flex-col lg:w-1/2'>
                        <h1 className='text-3xl font-light mt-24 lg:mt-36 lg:text-5xl z-10' 
                            data-aos="fade-up"
                            data-aos-duration="1000">
                            <span className='text-primary font-extrabold lg:text-9xl'>{t('W')}</span>{t('elcome')}</h1>
                        <h1 className='text-5xl lg:-mt-9 lg:text-8xl'
                            data-aos="fade-up"
                            data-aos-delay='1000'
                            data-aos-duration="1000">
                            <span className='text-primary font-extrabold lg:text-9xl'>W</span>ebMark</h1>
                        <img className='-mt-3 w-96 lg:w-full' 
                            data-aos="fade-up"
                            data-aos-delay='2000'
                            data-aos-duration="1000" 
                            src={Webmark} 
                            alt={Webmark}/>
                    </div>
                    <div className='lg:w-1/2'>
                        <img className='mt-20 lg:mt-44 w-full max-w-540' 
                            data-aos="fade-right"
                            data-aos-delay='3000'
                            data-aos-duration="1000" src={Hero} alt='hero' />
                    </div>
                </div>
                {/* Intro section */}
                <div className='w-full flex justify-center min-h-screen' id='intro'>
                    <div className='w-11/12 max-w-xl flex flex-col lg:flex-row lg:items-center lg:justify-center mx-auto'>
                        <div className='pt-10 lg:w-1/2 lg:text-right mt-10'
                            data-aos="fade-right"
                            data-aos-duration="1000">
                            <b className='text-white font-semibold lg:text-3xl text-xl'
                                >{t('Delivery')}</b>
                            <p className='mt-3 z-10 lg:text-xl mb-5'>{t('experience')}</p>
                            <b className='text-white font-semibold lg:text-3xl text-xl'>{t('Responsive')}</b>
                            <p className='mt-3 z-10 lg:text-xl'>{t('Design')}</p>
                        </div>
                        <div className='lg:w-1/2'
                            data-aos="fade-left"
                            data-aos-delay='500'
                            data-aos-duration="1000">
                            <div className='flex justify-end lg:p-10 mt-20'>
                                <span className='absolute font-extrabold italic text-primary mr-36 -mt-16 text-8xl'>X</span>
                                <span className='absolute font-semibold text-4xl tracking-tighter -mt-4 italic text-white'>perience</span>
                                <img className='mt-5 w-full max-w-540' src={Experience} alt='experence' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeadSection;
