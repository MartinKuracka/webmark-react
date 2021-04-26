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


const MainWorksMenu = () => {

    const {setContent, setContentType} = useContext(WorksContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: false,
        arrows: false,
        className: 'flex flex-row',
        centerPadding: '0px',
    };

    const handleOnclick = (e) => {
        setContent('content');
        setContentType(e.target.title);
    }

    return(
        <Slider {...settings} >
            {/* Slide 1 */}
            <div className='p-5'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img className='mx-auto' src={Slide1} alt='slide' />
                    <div className='flex flex-col'>
                        <h2 className='text-primary lg:text-2xl underline font-bold my-3 lg:mx-3 lg:mt-0' title='webs' onClick={handleOnclick}>Website projects</h2>
                        <p className='text-primary lg:text-xl lg:mx-3'>Full Website project that I have worked on since 2020 </p>
                    </div>
                </div>
            </div>
            {/* Slide 2 */}
            <div className='p-5'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img className='mx-auto' src={Slide2} alt='slide' />
                    <div className='flex flex-col  mx-auto'>
                        <h2 className='text-primary lg:text-2xl underline font-bold my-3 lg:mx-3 lg:mt-0' title='components'onClick={handleOnclick}>App Components</h2>
                        <p className='text-primary lg:text-xl lg:mx-3'>Different types of page components that can be re-used in Web projects </p>
                    </div>
                </div>
            </div>
            {/* Slide 3 */}
            <div className='p-5'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <img className='mx-auto' src={Slide3} alt='slide' />
                    <div className='flex flex-col  mx-auto'>
                        <h2 className='text-primary lg:text-2xl underline font-bold my-3 lg:mx-3 lg:mt-0' title='templates' onClick={handleOnclick}>Demo templates</h2>
                        <p className='text-primary lg:text-xl lg:mx-3'>Here You will find demo projects that showcase communications with API, databases, Password encryption and more... </p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default MainWorksMenu;