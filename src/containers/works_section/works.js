import { useState } from 'react';
// Components
import MainWorksMenu from './main_work_menu/main_works_menu';
import ContentSlider from './content_slider/content_slider';


const WorksSection = () => {

    const [workscontent, setContent] = useState('main');
    const [contenttype, setContentType] = useState('webs');

    const SliderContent = () => {
        switch(workscontent) {
            case 'main':
                return (
                    <MainWorksMenu setContent={setContent} setContentType={setContentType}/>
                )
            case 'content':
                return (
                    <ContentSlider contenttype={contenttype} setContent={setContent}/>
                )
            default:
                return null
        }
    }

    return(
        <section className='flex w-11/12 h-screen flex-col mx-auto' id='works'>
            <div className='flex justify-center'>
                <div className='flex w-full justify-start'>
                    <h1 className='mt-20 text-background'>Works </h1>
                </div>
            </div>
            <div className='bg-background h-3/4'>
                    <SliderContent />
            </div>
        </section>
    )
}

export default WorksSection;