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
            spaceBetween={30} 
            centeredSlides={true} 
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} 
            pagination={{
                "clickable": true
                
            }} 
            navigation={true} 
            className="mySwiper"
            >
            <SwiperSlide>
                <h2>Trustworthy AI - Be compliant</h2>
                <p>Our Mission: Safe & Secure AI usage for industry and society</p>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Analysis, Monitoring, Optimization</h2>
                <p>AI module & data quality in robustness, comprehensibility, functionality, privacy , ethics</p>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Upgrade your AI Safety & Security</h2>
                <p>Unique tools for AI testing, governance, benchmarking, optimization</p>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Security standards for AI</h2>
                <p>German AI DIN ISO Chairman and Initiator DIN Spec(PAS)9200-1 </p>
            </SwiperSlide>
        </Swiper>
        </Slide>
        </>
    )
}


const Slide = styled.div `
    width: 100%;
    height: 40vh;
    background: #3c8893;
    display: block;
    align-items: center;
    justify-content: center;

`
export default Slider;