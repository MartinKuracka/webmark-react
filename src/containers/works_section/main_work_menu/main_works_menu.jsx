import { useState, useEffect } from 'react';
// Images
import Slide1 from '../../../img/Thumb_websites2.jpg';
import Slide2 from '../../../img/Thumb_apps.jpg';
import Slide3 from '../../../img/Thumb_comp.jpg';
// Slider
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Context API
import { WorksContext } from '../../../works_context/works_context';
import { useContext } from 'react';
// i18n tanslation
import { useTranslation } from 'react-i18next';


const MainWorksMenu = () => {

    const { t } = useTranslation();

    const {setContent, setContentType} = useContext(WorksContext);
    const [arrowState, setArrows] = useState(false)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        centerPadding: '0px',
    };

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setArrows(false);
        } else setArrows(true);
    }, []);

    const handleOnclick = (e) => {
        setContent('content');
        setContentType(e.target.title);
    }

    return(
        <Slider {...settings} arrows={arrowState}>
            {/* Slide 1 */}
            <div className='p-5'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img className='mx-auto' src={Slide1} alt='slide' />
                    <div className='flex flex-col'>
                        <h2 className='text-primary lg:text-2xl underline font-bold my-3 lg:mx-3 lg:mt-0 cursor-pointer' title='websites' onClick={handleOnclick}>{t('Website')}</h2>
                        <p className='text-primary lg:text-xl lg:mx-3'>{t('projects')}</p>
                    </div>
                </div>
            </div>
            {/* Slide 2 */}
            <div className='p-5'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img className='mx-auto' src={Slide2} alt='slide' />
                    <div className='flex flex-col  mx-auto'>
                        <h2 className='text-primary lg:text-2xl underline font-bold my-3 lg:mx-3 lg:mt-0 cursor-pointer' title='Components'onClick={handleOnclick}>{t('App')}</h2>
                        <p className='text-primary lg:text-xl lg:mx-3'>{t('Different')}</p>
                    </div>
                </div>
            </div>
            {/* Slide 3 */}
            <div className='p-5'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img className='mx-auto' src={Slide3} alt='slide' />
                    <div className='flex flex-col  mx-auto'>
                        <h2 className='text-primary lg:text-2xl underline font-bold my-3 lg:mx-3 lg:mt-0 cursor-pointer' title='Web Apps' onClick={handleOnclick}>{t('templates')}</h2>
                        <p className='text-primary lg:text-xl lg:mx-3'>{t('demo')}</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default MainWorksMenu;