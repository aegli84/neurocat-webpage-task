//import { motion } from 'framer-motion'
// import { pageAnimation } from '../animations'
// import { titleAnimation, fade, photoAnimation } from '../animations'
// import { useState } from 'react'
import styled from 'styled-components';
import ParticlesBackground from '../components/ParticlesBackground'
import Slider from '../components/Slider'
import Team from '../components/Team'
import Projects from '../components/Projects'
import Arrow from '../components/Arrow'
import Products from '../components/Products'
import { NavHashLink as Link } from "react-router-hash-link";
import ScrollIntoView from 'react-scroll-into-view'

//import {VscArrowDown} from 'react-icons/vsc'

const About = () => {
    // const [show, setShow] = useState(false);

    return(
        <>
            <ParticlesBackground/>
        <AboutSection>
            <Div1 className = "description" >
                <H1>WHAT WE DO & WHO WE ARE</H1>
                    <P>
                    Neurocat undertakes foundational mathematical research, consulting and devops in the area of AI robustness, comprehensibility, functionality and ethics. Our goal is to make AI technology safe and secure for both industry and society
                </P>
                <ScrollIntoView selector = "#products">
                    <Link 
                        to = "/" 
                        smooth = {true}
                        ><Arrow/>
                    </Link>
                </ScrollIntoView>
            </Div1>
        </AboutSection>
        <Mission>
            <Div2 className = "mission" >
                    <H2>Our Mission</H2>
                    {/* <VscArrowDown size = '3rem' onClick={() => setShow(!show)}/> */}
                    <P1>
                        The neurocat GmbH was founded in 2017 with the goal of shaping our modern world through the use of AI safety & security technologies. Today, we help companies to implement modern AI systems that are safe & secure with respect to functionality, comprehensibility and robustness. With the help of our quality tools we can also help you to develop reliable AI solutions for your business
                    </P1> 
                </Div2>
        </Mission>      
        <Vision>
            <Div3 className = "vision" >
                <H2>Our Vision</H2>
                <P1>
                    „We are drowning in information but starved for knowledge“ – John Naisbitt. Neurocat strives to live in an explainable digital world, where society benefits from safe, accessible and transparent AI technologies. Our goal is to build up trust and confidence for AI solutions by integrating innovative AI Quality applications
                </P1>
            </Div3> 
        </Vision> 
                <Products/>
            <Slider/> 
        <Projects/>
        
        <Team/>
        
        </>
    );
};

const AboutSection = styled.div `
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`
const Div1 = styled.div`
    height: 93vh;
    width: 35vw;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    margin: 0rem 15rem 10rem 15rem;
    padding: 4rem 3rem 0;
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-bottom-right-radius: 350px;
    border-bottom-left-radius: 150px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    
`
const H1 = styled.h1 `
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 3.5rem;
    color: whitesmoke; 
`
const P = styled.p `
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1.7rem;  
`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 3rem;
    color: whitesmoke; 
    
`

const Mission = styled.div `
    margin-top: -40rem;
    display: flex;
    flex-direction: column; 
    align-items: left;
    justify-content: left;
    z-index: -1;
    position: relative;
    left: 0;
`
const Div2 = styled.div `
    height: 68vh;
    width: 30vw;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    margin: 2rem 5rem 1rem 4rem;
    padding: 1rem 3rem 0;
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-top-right-radius: 260px;
    border-bottom-left-radius: 130px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    z-index: -1;
    position: relative;
`

const Vision = styled.div `
    margin-top: -36rem;
    margin-left: 60vw;
    display: flex;
    flex-direction: column; 
    align-items: right;
    justify-content: right;
    z-index: -1;
    position: relative;
    
`
const Div3 = styled.div `
    height: 65vh;
    width: 30vw;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    margin: 1rem 6rem 1rem 4rem;
    padding: 1rem 3rem 0;
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-bottom-right-radius: 250px;
    border-top-left-radius: 110px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    z-index: -1;
    position: relative;
`
const P1 = styled.p `
    margin-top: 1.5rem;
    margin-left: .7rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1.3rem;

`

export default About;