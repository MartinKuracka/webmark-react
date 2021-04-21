import { useState } from 'react';
// Components
import MainWorksMenu from './main_work_menu/main_works_menu';
import ContentSlider from './content_slider/content_slider';
// Context API
import { WorksContext } from '../../works_context/works_context';

const WorksSection = () => {

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
        <div className='w-full h-screen bg-works mt-44'>
        <section className='flex w-11/12 h-screen flex-col mx-auto' id='works'>
            <div className='flex justify-center'>
                <div className='flex w-full justify-start'>
                    <h1 className='mt-20 text-background'>Works </h1>
                </div>
            </div>
            <div className='bg-background min-h-3/4 shadow-xl'>
                <WorksContext.Provider value={{setContent, setContentType, contenttype}}>
                    <SliderContent />
                </WorksContext.Provider>
            </div>
        </section>
        </div>
    )
}

export default WorksSection;