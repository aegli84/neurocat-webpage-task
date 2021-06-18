import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Autoplay,Pagination,Navigation } from 'swiper/core';
import './slider.css'



SwiperCore.use([Autoplay,Pagination,Navigation]);

const Slider = () => {
    return (
        <>
        <Slide>
        <Swiper 
        // smooth = {true}
            spaceBetween={40} 
            centeredSlides={true} 
            autoplay={{
                "delay": 3500,
                "disableOnInteraction": false
            }} 
            pagination={{
                "clickable": true
                
            }} 
            navigation={true} 
            className="mySwiper"
            >
            <SwiperSlide>
                <div>
                    <H2>Trustworthy AI - Be compliant</H2>
                    <P>Our Mission: Safe & Secure AI usage for industry and society</P>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <H2>Analysis, Monitoring, Optimization</H2>
                    <P>AI module & data quality in robustness, comprehensibility, functionality, privacy , ethics</P>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <H2>Upgrade your AI Safety & Security</H2>
                    <P>Unique tools for AI testing, governance, benchmarking, optimization</P>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <H2>Security standards for AI</H2>
                    <P>German AI DIN ISO Chairman and Initiator DIN Spec(PAS)9200-1</P>
                </div>
            </SwiperSlide>
        </Swiper>
        </Slide>
        </>
    )
}


const Slide = styled.div `
    width: 80vw;
    height: 40vh;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding: 3rem;
    margin: 2rem 10rem;
    background: rgba( 75, 184, 180, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

// const Swipe = styled(SwiperSlide)`
//     text-align: center;
//     padding: 5rem;
// `

const P = styled.p `
    margin: 1.7rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;  
    color: whitesmoke;
`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 2.8rem;
    color: whitesmoke; 
    
`
export default Slider;