import { useState } from 'react';
// Components
import MainWorksMenu from './main_work_menu/main_works_menu';
import ContentSlider from './content_slider/content_slider';
// Context API
import { WorksContext } from '../../works_context/works_context';
// Css
import './works.css';
// i18n tanslation
import { useTranslation } from 'react-i18next';
// AOS animation
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

const WorksSection = () => {

    AOS.init();

    const { t } = useTranslation();

    const [workscontent, setContent] = useState('main');
    const [contenttype, setContentType] = useState('webs');

    const SliderContent = () => {
        switch(workscontent) {
            case 'main':
                return (
                    <MainWorksMenu />
                )
            case 'content':
                return (
                    <ContentSlider />
                )
            default:
                return null
        }
    }

    return(
        <div className='w-full h-auto min-h-screen bg-works mt-44'>
            <section className='flex w-11/12 max-w-screen-xl flex-col items-center mx-auto' id='works'>
                <div className='flex w-full max-w-540 justify-center'>
                    <div className='flex w-full justify-start'>
                        <h1 className='mt-20 text-background'
                            data-aos="fade-right"
                            data-aos-duration="1000">{t('Works')} </h1>
                    </div>
                </div>
                <div className='w-full bg-background shadow-xl max-w-540 lg:max-w-1024'>
                    <WorksContext.Provider value={{setContent, setContentType, contenttype}}>
                        <SliderContent />
                    </WorksContext.Provider>
                </div>
            </section>
        </div>
    )
}

export default WorksSection;