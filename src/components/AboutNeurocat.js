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
                
            
        
            

            <div className = "products" id ="products">
                <h2>AI Quality Services</h2>
                <h3>Services for AI Quality – Safety, Security & Privacy</h3>
                {/* <h4>Research</h4>
                <p>
                    Our mathematicians, ML experts, computer and data scientists research for major companies in the areas of AI (Module/Data) robustness, comprehensibility, functionality, privacy and ethical frameworks. Only a deep understanding of the AI algorithms and related data sets allows for the reliable safeguarding against failure over the entire lifecycle of AI applications
                </p>
                <h4>Consulting</h4>
                <p>
                    Boost the value of your AI products by building up trust. For this you will need to develop robust,  understandable, regulatory, safe and secure AI algorithms – and our consulting team can give you the necessary support to achieve this goal!
                </p>
                <h4>Analysis</h4>
                <p>
                    We analyze your data and AI models with respect to robustness, comprehensibility, functionality, privacy and ethic. Our experts use unique and state-of-the-art metrics and methods from our AI Analysis Toolkit (aidkit.ai) and in this way detect vulnerabilities early on to safe costs and risks.
                </p>
                <h4>Optimization</h4>
                <p>
                    The elimination of vulnerabilities in modern AI technologies is one of our core competencies. We can detect and remove crucial weaknesses and errors – regardless of whether they stem from robustness, comprehensibility or general performance issues. Our goal is to ensure AI safety, security and privacy.
                </p>
                <h4>Governance</h4>
                <p>
                    The approach of neurocat is holistic along the entire AI life cycle. Our task fields range from the optimization of the training, model, datas and specifications of an AI product up to the anomaly or misusage detection. In some of these areas neurocat is a leading worldwide provider of AI quality solutions.
                </p>
                <h4>DevOps</h4>
                <p>
                    Our experienced AI developers support our customers in development, deployment and operation. The results from our AI Research and AI Analysis can be directly integrated into the customers’ AI products.
                </p> */}
                <h2>aidkit</h2>
                <p>
                    Is an open source AI analysis, optimization and debugging platform. It will support prototyping, deployment and operation.

                    Save time, money and stress during your AI analysis by using the biggest collection of optimization, vulnerability detection and debugging tools
                </p>

                <h2>DeepTrust</h2>
                <p>
                    Is an AI risk, safety, security and privacy framework for all stakeholders.

                    The acceptance of AI hinges on trust into the system. Thus, our quality seal and its related frameworks serve to create trust in your AI solutions. Calculate and cover your risks, be insured, monitor and control cyber-critical criteria with this unique platform
                </p>
            </div>
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
    height: 90vh;
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
    height: 65vh;
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
    border-top-right-radius: 330px;
    border-bottom-left-radius: 150px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    z-index: -1;
    position: relative;
`

const Vision = styled.div `
    margin-top: -34rem;
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
    margin: 1rem 6rem 1rem 3rem;
    padding: 1rem 3rem 0;
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-bottom-right-radius: 320px;
    border-top-left-radius: 120px;
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