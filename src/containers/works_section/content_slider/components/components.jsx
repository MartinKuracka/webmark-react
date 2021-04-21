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
import { WorksContext } from '../../../../state_context/state_context';
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
                <img className='mx-auto' src={Scroll} alt='srdcofka'/>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col '>
                        <h2 className='text-primary font-bold mt-3' title='srdcofka' target='_blank' rel="noreferrer" >Infinite Scroll</h2>
                        <p className='text-primary'>This one scrolls and uploads images infinitely from Unsplash API </p>
                        <h2 className='text-primary font-bold mt-4'>Technology used</h2>
                        <p className='text-primary'>HTML, CSS, JS, Unsplash API </p>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <Button back onClick={() => setContent('main')}>BACK</Button>
                        <a href='https://martinkuracka.github.io/infinite-scroll/' target='_blank' rel="noreferrer">
                            <Button >LIVE</Button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Slide 2 */}
            <div className='p-5'>
                <img className='mx-auto' src={Dark} alt='luna' />
                <div className='flex flex-col justify-between h-52'>
                    <div className='flex flex-col '>
                        <h2 className='text-primary font-bold mt-3' title='srdcofka' target='_blank' rel="noreferrer" >Light/Dark mode</h2>
                        <p className='text-primary'>Switching betwen Dark and Light mode</p>
                        <h2 className='text-primary font-bold mt-4'>Technology used</h2>
                        <p className='text-primary'>HTML, CSS, JS, Undraw.co </p>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <Button back onClick={() => setContent('main')}>BACK</Button>
                        <a href='https://martinkuracka.github.io/Light-Dark-mode-Website/' target='_blank' rel="noreferrer">
                            <Button >LIVE</Button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Slide 3 */}
            <div className='p-5'>
                <img className='mx-auto' src={Menu} alt='luna' />
                <div className='flex flex-col justify-between h-52'>
                    <div className='flex flex-col '>
                        <h2 className='text-primary font-bold mt-3' target='_blank' rel="noreferrer" >Animated Menu</h2>
                        <p className='text-primary'>Modern menu with feelgood animation</p>
                        <h2 className='text-primary font-bold mt-4'>Technology used</h2>
                        <p className='text-primary'>HTML, CSS, JS </p>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <Button back onClick={() => setContent('main')}>BACK</Button>
                        <a href='https://martinkuracka.github.io/navigation-menu-animations/' target='_blank' rel="noreferrer">
                            <Button >LIVE</Button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Slide 4 */}
            <div className='p-5'>
                <img className='mx-auto' src={Picture} alt='luna' />
                <div className='flex flex-col justify-between h-52'>
                    <div className='flex flex-col '>
                        <h2 className='text-primary font-bold mt-3' target='_blank' rel="noreferrer" >Picture In Picture</h2>
                        <p className='text-primary'>Creates pop-up window to share the screen</p>
                        <h2 className='text-primary font-bold mt-4'>Technology used</h2>
                        <p className='text-primary'>HTML, CSS, JS </p>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <Button back onClick={() => setContent('main')}>BACK</Button>
                        <a href='https://martinkuracka.github.io/picture-in-picture/' target='_blank' rel="noreferrer">
                            <Button >LIVE</Button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Slide 5 */}
            <div className='p-5'>
                <img className='mx-auto' src={Quotes} alt='luna' />
                <div className='flex flex-col justify-between h-52'>
                    <div className='flex flex-col '>
                        <h2 className='text-primary font-bold mt-3' target='_blank' rel="noreferrer" >Quotes generator</h2>
                        <p className='text-primary'>Can be used as Quote Of The Day on pages</p>
                        <h2 className='text-primary font-bold mt-4'>Technology used</h2>
                        <p className='text-primary'>HTML, CSS, JS, speech and quotes API </p>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <Button back onClick={() => setContent('main')}>BACK</Button>
                        <a href='https://martinkuracka.github.io/Quote-generator/' target='_blank' rel="noreferrer">
                            <Button >LIVE</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Components;