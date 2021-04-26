// Slider
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Images
import Scroll from '../../../../img/App components/scroll.jpg';
import Dark from '../../../../img/App components/darkmode.jpg';
import Menu from '../../../../img/App components/menu.jpg';
import Picture from  '../../../../img/App components/picture.jpg';
import Quotes from '../../../../img/App components/quotes.jpg';
// Styled components
import {Button} from '../../../../components/styled_components';
// Context API
import { WorksContext } from '../../../../works_context/works_context';
import { useContext } from 'react';

const Components = () => {

    const {setContent} = useContext(WorksContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: false,
        arrows: false,
        className: 'm-5 w-full',
        centerPadding: '0px',
    };

    return (
        <Slider {...settings} className=''>
            {/* Slide 1 */}
            <div className='p-5 h-full'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img src={Scroll} alt='srdcofka'/>
                    <div className='w-full lg:mx-3 flex flex-col justify-between max-w-500'>
                        <div className='flex flex-col '>
                            <h2 className='text-primary lg:text-xl font-bold mt-3 lg:mt-0' title='srdcofka' target='_blank' rel="noreferrer" >Infinite Scroll</h2>
                            <p className='text-primary text-sm'>This one scrolls and uploads images infinitely from Unsplash API </p>
                            <h2 className='text-primary text-xl font-bold mt-4'>Technology used</h2>
                            <p className='text-primary text-sm'>HTML, CSS, JS, Unsplash API </p>
                        </div>
                        <div className='mt-5 flex justify-between'>
                            <Button back onClick={() => setContent('main')}>BACK</Button>
                            <a href='https://martinkuracka.github.io/infinite-scroll/' target='_blank' rel="noreferrer">
                                <Button >LIVE</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide 2 */}
            <div className='p-5'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img src={Dark} alt='luna' />
                    <div className='w-full lg:mx-3 flex flex-col justify-between max-w-500'>
                        <div className='flex flex-col '>
                            <h2 className='text-primary lg:text-xl font-bold mt-3 lg:mt-0' title='srdcofka' target='_blank' rel="noreferrer" >Light/Dark mode</h2>
                            <p className='text-primary text-sm'>Switching betwen Dark and Light mode</p>
                            <h2 className='text-primary text-xl font-bold mt-4'>Technology used</h2>
                            <p className='text-primary text-sm'>HTML, CSS, JS, Undraw.co </p>
                        </div>
                        <div className='mt-5 flex justify-between'>
                            <Button back onClick={() => setContent('main')}>BACK</Button>
                            <a href='https://martinkuracka.github.io/Light-Dark-mode-Website/' target='_blank' rel="noreferrer">
                                <Button >LIVE</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide 3 */}
            <div className='p-5'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img src={Menu} alt='luna' />
                    <div className='w-full lg:mx-3 flex flex-col justify-between max-w-500'>
                        <div className='flex flex-col '>
                            <h2 className='text-primary lg:text-xl font-bold mt-3 lg:mt-0' target='_blank' rel="noreferrer" >Animated Menu</h2>
                            <p className='text-primary text-sm'>Modern menu with feelgood animation</p>
                            <h2 className='text-primary text-xl font-bold mt-4'>Technology used</h2>
                            <p className='text-primary text-sm'>HTML, CSS, JS </p>
                        </div>
                        <div className='mt-5 flex justify-between'>
                            <Button back onClick={() => setContent('main')}>BACK</Button>
                            <a href='https://martinkuracka.github.io/navigation-menu-animations/' target='_blank' rel="noreferrer">
                                <Button >LIVE</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide 4 */}
            <div className='p-5'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img src={Picture} alt='luna' />
                    <div className='w-full lg:mx-3 flex flex-col justify-between max-w-500'>
                        <div className='flex flex-col '>
                            <h2 className='text-primary lg:text-xl font-bold mt-3 lg:mt-0' target='_blank' rel="noreferrer" >Picture In Picture</h2>
                            <p className='text-primary text-sm'>Creates pop-up window to share the screen</p>
                            <h2 className='text-primary text-xl font-bold mt-4'>Technology used</h2>
                            <p className='text-primary text-sm'>HTML, CSS, JS </p>
                        </div>
                        <div className='mt-5 flex justify-between'>
                            <Button back onClick={() => setContent('main')}>BACK</Button>
                            <a href='https://martinkuracka.github.io/picture-in-picture/' target='_blank' rel="noreferrer">
                                <Button >LIVE</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide 5 */}
            <div className='p-5'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img src={Quotes} alt='luna' />
                    <div className='w-full lg:mx-3 flex flex-col justify-between max-w-500'>
                        <div className='flex flex-col '>
                            <h2 className='text-primary lg:text-xl font-bold mt-3 lg:mt-0' target='_blank' rel="noreferrer" >Quotes generator</h2>
                            <p className='text-primary text-sm'>Can be used as Quote Of The Day on pages</p>
                            <h2 className='text-primary text-xl font-bold mt-4'>Technology used</h2>
                            <p className='text-primary text-sm'>HTML, CSS, JS, speech and quotes API </p>
                        </div>
                        <div className='mt-5 flex justify-between'>
                            <Button back onClick={() => setContent('main')}>BACK</Button>
                            <a href='https://martinkuracka.github.io/Quote-generator/' target='_blank' rel="noreferrer">
                                <Button >LIVE</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Components;