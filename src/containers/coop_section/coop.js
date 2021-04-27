import Underline from '../../img/underline.png';
// Image
import CoopImg from '../../img/Coop Background.svg';
// i18n tanslation
import { useTranslation } from 'react-i18next';

const CoopSection = () => {

    const { t } = useTranslation();

    return(
        <div className='w-full flex justify-center mt-36' id='coop'>
            <div className='flex flex-col min-h-screen w-full justify-center items-center my-20'>
                <h1 className='w-11/12 max-w-screen-xl text-right text-primary z-10 mr-10'>{t('CoopBck')}</h1>
                <div className='flex justify-center bg-white'>
                <div className='flex justify-center flex-col w-full max-w-screen-xl md:flex-row lg:w-9/12'>
                    {/* First item */}
                    <div className='flex flex-col w-11/12 md:w-1/4 p-5'>
                        <h2 className='font-bold lg:text-xl text-primary'>{t('Initial')}</h2>
                        <img className='w-20' src={Underline} alt='underline' />
                        <p className='text-primary text-sm lg:text-base mt-3'>{t('InitialText')}</p>
                    </div>
                    {/* Second item */}
                    <div className='flex flex-col w-11/12 md:w-1/4 p-5'>
                        <h2 className='font-bold lg:text-xl text-primary'>{t('Mockups')}</h2>
                        <img className='w-20' src={Underline} alt='underline' />
                        <p className='text-primary text-sm lg:text-base mt-3'>{t('MockupsText')}</p>
                    </div>
                    {/* Third item */}
                    <div className='flex flex-col w-11/12 md:w-1/4 p-5'>
                        <h2 className='font-bold lg:text-xl text-primary'>{t('Project')}</h2>
                        <img className='w-20' src={Underline} alt='underline' />
                        <p className='text-primary text-sm lg:text-base mt-3'>{t('Projecttext')}</p>
                    </div>
                        {/* Third item */}
                        <div className='flex flex-col w-11/12 md:w-1/4 p-5'>
                        <h2 className='font-bold lg:text-xl text-primary'>{t('Putting')}</h2>
                        <img className='w-20' src={Underline} alt='underline' />
                        <p className='text-primary text-sm lg:text-base mt-3'>{t('PuttingText')}</p>
                    </div>                    
                </div>
                </div>
              
                <div className='max-w-screen-xl'>
                    <img className='hidden md:flex' src={CoopImg} alt='coopimg'/>
                </div>
            </div>
        </div>
    )
}

export default CoopSection;
