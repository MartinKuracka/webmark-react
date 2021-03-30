import styled from 'styled-components';
import Slider from "react-slick";
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import Pic from '../../../img/Thumb_websites.jpg';
import Slide1 from './sliders/sliders'
import CloseBtn from '../../../img/close.svg';

const Wrapper = styled.div `
    width: 100%;
    justify-content: ${props => props.close ? 'flex-end' : null};
    max-width: 1100px;
    min-width: 700px;
    ${'' /* height: 100%; */}
    background-color: #EFEBEA;
    z-index: 10;
    border-radius: var(--radius);
    ${'' /* padding: 10px; */}
`
const SliderWrap = styled.div `
    display: flex;
    width: 100%;
    justify-content: center
`
const Close = styled.img `
    align-self: end;
    right: 0px;
`
const WebPages = () => {
    var settings = {
        centerMode: true,
        centerPadding: '0px',
        pauseOnFocus: true,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    return(
        <>
        <Wrapper>
            <Wrapper close>
                <Close src={CloseBtn} />
            </Wrapper>
            
            <Slider {...settings}>
                <div>
                    <Slide1 />
                </div>
                <div>
                <img src={Pic} />
                    <h1>2</h1>
                </div>
                <div>
                <img src={Pic} />
                    <h1>3</h1>
                </div>
                <div>
                <img src={Pic} />
                    <h1>4</h1>
                </div>
                <div>
                <img src={Pic} />
                    <h1>5</h1>
                </div>
            </Slider>
        </Wrapper>
        </>
    )
}

export default WebPages;