// Images
import Slide1 from '../../../img/Thumb_websites.jpg';
import Slide2 from '../../../img/Thumb_apps.jpg';
import Slide3 from '../../../img/Thumb_comp.jpg';
// Slider
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MainWorksMenu = ({setContent, setContentType}) => {
    
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

    const handleOnclick = (e) => {
        setContent('content');
        setContentType(e.target.title);
    }

    return(
        <>
        <Slider {...settings} className=''>
            <div className='p-5'>
                <img className='mx-auto' src={Slide1} />
                <div clasName='flex flex-col'>
                    <h2 className='text-primary underline font-bold my-3' title='webs' onClick={handleOnclick}>Website projects</h2>
                    <p className='text-primary mx-auto'>Full Website project that I have worked on since 2020 </p>
                </div>
            </div>
            <div className='p-5'>
                <img className='mx-auto' src={Slide2} />
                <div clasName='flex flex-col'>
                    <h2 className='text-primary underline font-bold my-3' title='components'onClick={handleOnclick}>App Components</h2>
                    <p className='text-primary mx-auto'>Different types of page components that can be re-used in Web projects </p>
                </div>
            </div>
            <div className='p-5'>
                <img className='mx-auto' src={Slide3} />
                <div clasName='flex flex-col'>
                    <h2 className='text-primary underline font-bold my-3' title='templates' onClick={handleOnclick}>Demo templates</h2>
                    <p className='text-primary mx-auto'>Here You will find demo projects that showcase communications with API, databases, Password encryption and more... </p>
                </div>
            </div>
        </Slider>
        </>
    )
}

export default MainWorksMenu;