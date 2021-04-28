// Slider
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Images
import Srdcofka from '../../../../img/srdcofka.jpg';
import Luna from '../../../../img/luna.jpg'
// Styled components
import {Button} from '../../../../components/styled_components';
// Context API
import { WorksContext } from '../../../../works_context/works_context';
import { useContext, useState, useEffect } from 'react';

const Webs = () => {

    const {setContent} = useContext(WorksContext);
    const [arrowState, setArrows] = useState(false);


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

    return (
        <Slider {...settings} arrows={arrowState}>
            {/* Slide 1 */}
            <div className='p-5 h-full'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img src={Srdcofka} alt='srdcofka'/>
                    <div className='w-full lg:mx-3 flex flex-col justify-between max-w-500 '>
                        <div className='flex flex-col '>
                            <h2 className='text-primary lg:text-xl font-bold mt-3 lg:mt-0' title='srdcofka' href='https://www.srdcofka.sk' target='_blank' rel="noreferrer" >Srdcofka.sk</h2>
                            <p className='text-primary text-sm'>Local healthy food store webpage </p>
                            <h2 className='text-primary lg:text-xl font-bold mt-4'>Technology used</h2>
                            <p className='text-primary text-sm'>HTML, CSS, JS, Animations, Adobe Photoshop </p>
                        </div>
                        <div className='mt-5 flex justify-between'>
                            <Button back onClick={() => setContent('main')}>BACK</Button>
                            <a href='http://www.srdcofka.sk' target='_blank' rel="noreferrer">
                                <Button >LIVE</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide 2 */}
            <div className='p-5 h-full'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img src={Luna} alt='luna' />
                    <div className='w-full lg:mx-3 flex flex-col justify-between max-w-500'>
                        <div className='flex flex-col '>
                            <h2 className='text-primary lg:text-xl font-bold mt-3 lg:mt-0' title='srdcofka' href='https://www.srdcofka.sk' target='_blank' rel="noreferrer" >Svieckaluna.sk</h2>
                            <p className='text-primary text-sm'>Single page Website to promote a product</p>
                            <h2 className='text-primary lg:text-xl font-bold mt-4'>Technology used</h2>
                            <p className='text-primary text-sm'>Wordpress, Elementor, Adobe Photoshop, SEO </p>
                        </div>
                        <div className='mt-5 flex justify-between '>
                            <Button back onClick={() => setContent('main')}>BACK</Button>
                            <a href='http://www.svieckaluna.sk' target='_blank' rel="noreferrer">
                                <Button >LIVE</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Webs;