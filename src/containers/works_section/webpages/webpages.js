import styled from 'styled-components';
import Slider from "react-slick";
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import {Slide1, Slide2, Slide3, Slide4} from './web_sliders/web_sliders'
import CloseBtn from '../../../img/close.svg';

const Wrapper = styled.div `
    width: 100%;
    display: ${props => props.close ? 'flex' : null};
    justify-content: ${props => props.close ? 'flex-end' : null};
    max-width: 1100px;
    min-width: 700px;
    background-color: #EFEBEA;
    z-index: 10;
    border-radius: var(--radius);
`
const Close = styled.img `
    align-self: end;
    right: 0px;
    padding: 5px;
    cursor: pointer
`
const WebPages = ({changepage}) => {
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

    const goBack = () => {
        changepage('none');
    }

    return(
        <>
        <Wrapper>
            <Wrapper close>
                <Close src={CloseBtn} onClick={goBack}/>
            </Wrapper>
            <Slider {...settings}>
                <div>
                    <Slide1 />
                </div>
                <div>
                    <Slide2 />
                </div>
                <div>
                    <Slide3 />
                </div>
                <div>
                    <Slide4 />
                </div>
            </Slider>
        </Wrapper>
        </>
    )
}

export default WebPages;