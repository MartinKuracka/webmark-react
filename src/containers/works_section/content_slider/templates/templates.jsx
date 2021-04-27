// Slider
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Images
import Face from '../../../../img/templates/face.jpg';
import Goodboy from '../../../../img/templates/goodboy.jpg';
import Anime from '../../../../img/templates/animations.jpg';
// Styled components
import {Button} from '../../../../components/styled_components';
// Context API
import { WorksContext } from '../../../../works_context/works_context';
import { useContext } from 'react';
// i18n tanslation
import { useTranslation } from 'react-i18next';

const Templates = () => {

    const { t } = useTranslation();

    const {setContent} = useContext(WorksContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        arrows: false,
        className: 'm-5 w-full',
        centerPadding: '0px',
    };

    return (
        <Slider {...settings} className=''>
            {/* Slide 1 */}
            <div className='p-5 h-full'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img src={Face} alt='srdcofka'/>
                    <div className='w-full lg:mx-3 flex flex-col justify-between max-w-500'>
                        <div className='flex flex-col '>
                            <h2 className='text-primary lg:text-2xl font-bold mt-3 lg:mt-0'  title='srdcofka' target='_blank' rel="noreferrer" >{t('Face')}</h2>
                            <p className='text-primary text-sm lg:text-base'>{t('Full')}</p>
                            <h2 className='text-primary lg:text-2xl font-bold mt-4'>{t('Technology')}</h2>
                            <p className='text-primary text-sm lg:text-base'>HTML, CSS, JS, React, Clarifai API, NodeJs, ExpressJs, postgreSQL, Heroku </p>
                        </div>
                        <div className='mt-5 flex justify-between'>
                            <Button back onClick={() => setContent('main')}>{t('BACK')}</Button>
                            <a href='https://martinkuracka.github.io/find-the-face/' target='_blank' rel="noreferrer">
                                <Button >LIVE</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide 2 */}
            <div className='p-5 h-full'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img src={Goodboy} alt='luna' />
                    <div className='w-full lg:mx-3 flex flex-col justify-between max-w-500'>
                        <div className='flex flex-col '>
                            <h2 className='text-primary lg:text-2xl font-bold mt-3 lg:mt-0' title='srdcofka' target='_blank' rel="noreferrer" >GoodBoy</h2>
                            <p className='text-primary text-sm lg:text-base'>{t('Dog')}</p>
                            <h2 className='text-primary lg:text-2xl font-bold mt-4'>{t('Technology')}</h2>
                            <p className='text-primary text-sm lg:text-base'>HTML, CSS, JS, React, Redux, React Hooks, API</p>
                        </div>
                        <div className='mt-5 flex justify-between'>
                            <Button back onClick={() => setContent('main')}>{t('BACK')}</Button>
                            <a href='https://martinkuracka.github.io/goodboy/' target='_blank' rel="noreferrer">
                                <Button >LIVE</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide 3 */}
            <div className='p-5'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img src={Anime} alt='luna' />
                    <div className='w-full lg:mx-3 flex flex-col justify-between max-w-500'>
                        <div className='flex flex-col '>
                            <h2 className='text-primary lg:text-2xl font-bold mt-3 lg:mt-0' target='_blank' rel="noreferrer" >{t('Animations')}</h2>
                            <p className='text-primary text-sm lg:text-base'>{t('Modern2')}</p>
                            <h2 className='text-primary lg:text-2xl font-bold mt-4'>{t('Technology')}</h2>
                            <p className='text-primary text-sm lg:text-base'>HTML, CSS, JS, Tailwinds, AOS Animate on Scroll</p>
                        </div>
                        <div className='mt-5 flex justify-between'>
                            <Button back onClick={() => setContent('main')}>{t('BACK')}</Button>
                            <a href='https://martinkuracka.github.io/animations-demo/' target='_blank' rel="noreferrer">
                                <Button >LIVE</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Templates;