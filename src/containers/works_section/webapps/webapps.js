import styled from 'styled-components';
import Slider from "react-slick";
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import {Slide5, Slide6, Slide7, Slide8} from './app_sliders/app_sliders'
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
const WebApps = ({changepage}) => {
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
                    <Slide5 />
                </div>
                <div>
                    <Slide6 />
                </div>
                <div>
                    <Slide7 />
                </div>
                <div>
                    <Slide8 />
                </div>
            </Slider>
        </Wrapper>
        </>
    )
}

export default WebApps;