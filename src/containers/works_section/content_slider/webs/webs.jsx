// Slider
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Images
import Srdcofka from '../../../../img/srdcofka.jpg';
import Luna from '../../../../img/luna.jpg'
// Styled components
import {Button} from '../../../../components/styled_components';

const Webs = ({setContent}) => {

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
                <img className='mx-auto' src={Srdcofka} />
                <div clasName='flex flex-col justify-between h-full'>
                    <div className='flex flex-col '>
                        <h2 className='text-primary font-bold mt-3' title='srdcofka' href='https://www.srdcofka.sk' target='_blank' >Srdcofka.sk</h2>
                        <p className='text-primary'>Local healthy food store webpage </p>
                        <h2 className='text-primary font-bold mt-4'>Technology used</h2>
                        <p className='text-primary'>HTML, CSS, JS, Animations, Adobe Photoshop </p>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <Button back onClick={() => setContent('main')}>BACK</Button>
                        <a href='http://www.srdcofka.sk' target='_blank'>
                            <Button >LIVE</Button>
                        </a>
                        <a href='http://www.srdcofka.sk' target='_blank'>
                            <Button>CODE</Button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Slide 2 */}
            <div className='p-5'>
                <img className='mx-auto' src={Luna} />
                <div clasName='flex flex-col justify-between h-52'>
                    <div className='flex flex-col '>
                        <h2 className='text-primary font-bold mt-3' title='srdcofka' href='https://www.srdcofka.sk' target='_blank' >Svieckaluna.sk</h2>
                        <p className='text-primary'>Single page Website to promote a product</p>
                        <h2 className='text-primary font-bold mt-4'>Technology used</h2>
                        <p className='text-primary'>Wordpress, Elementor, Adobe Photoshop, SEO </p>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <Button back onClick={() => setContent('main')}>BACK</Button>
                        <a href='http://www.svieckaluna.sk' target='_blank'>
                            <Button >LIVE</Button>
                        </a>
                        <a href='http://www.svieckaluna.sk' target='_blank'>
                            <Button>CODE</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Webs;