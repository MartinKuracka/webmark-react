// Images
import Slide1 from '../../img/Thumb_apps.jpg'
// Slider
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const WorksSection = () => {
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

    return(
        <section className='flex w-11/12 h-screen flex-col mx-auto' id='works'>
            <div className='flex justify-center'>
                <div className='flex w-full justify-start'>
                    <h1 className='mt-32 text-background'>Works </h1>
                </div>
            </div>
            <div className='bg-background'>
                <Slider {...settings} className=''>
                    <div className='p-5'>
                        <img className='mx-auto' src={Slide1} />
                        <p className='text-black w-10/12 mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>                    
                    </div>
                    <div className='p-5'>
                        <img className='' src={Slide1} />  
                    </div>
                    <div className='p-5'>
                        <img className='' src={Slide1} />  
                    </div>               
                </Slider>
            </div>

        </section>
    )
}

export default WorksSection;