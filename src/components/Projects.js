import neuro from '../assets/neuro.png'
import customers from '../assets/customers.png'
import styled from 'styled-components'
import { BsArrowLeftRight } from 'react-icons/bs'
import {Link } from "react-router-dom";
import {ScrollSections} from './ScrollSections'
import {fade} from '../animations'
import {motion} from 'framer-motion'

const Projects = () => {
    const [element, controls] = ScrollSections();
    return(
        <>
        <Div
            variants = {fade} 
                animate={controls} 
                initial = 'hidden' 
                ref={element}>
            <Div1>
            <div>
                <Link to = "/Labs">
                    <Button 
                        className = "button"
                        id = "submit" 
                        type = "submit" 
                        value = "submit">
                        Find out more
                    </Button>
                </Link>
                    </div>
                    <Div4>
                    <BsArrowLeftRight size = '4rem' color='whitesmoke'/>
                    </Div4>
                <div>
                
                    <H3>neurocat's past industry projects / outcomes / partners</H3>
                    <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam assumenda quas adipisci dolorem voluptate saepe dolores amet id odio quaerat</P>
                
                </div>
                
            </Div1>
        <Div2>
            <div>
                <H4>neurocat's work with DIN Standard</H4>
                <P1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam assumenda quas adipisci dolorem voluptate saepe dolores amet id odio quaerat</P1>
            </div>
                <img 
                    src={neuro} alt="nurocat">
                </img>
        </Div2>
            <div>
                <H2>Customer Voice</H2>
                <img 
                    src={customers} alt="nurocat">
                </img>
            </div>
            </Div>
        </>
    )
}


const Div = styled(motion.div) `
    display: block;
    justify-content: center;
    text-align: center;
    width: 100vw;
    height: 145vh;
    box-shadow: 1px 3px 32px -7px rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    /* margin: 1rem 2rem 3rem 7rem; */
    margin: 7rem 0;
    padding: 5rem;
    background: rgba( 31, 38, 135, 0.37 ); 
    /* border-top: 1px solid rgba( 255, 255, 255, 0.20 );
    border-bottom: 1px solid rgba( 255, 255, 255, 0.20 ); */
    /* overflow: hidden; */
    
`

const Div1 = styled.div `
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
    text-align: center;
    img {
        height: 35vh;
        width: 25vw;
        /* margin-right: -5rem; */
        padding-left: 6rem;
        
    }
`
const H3 = styled.h3 `
    margin: 3rem 1rem;
    /* padding: 0 0 2rem 10rem; */
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 2.5rem;
    color: whitesmoke; 
`
const P = styled.p `
    margin: 2rem 1rem;
    /* padding: 0 0 2rem 10rem; */
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;  
    color: whitesmoke;
`

const Div2 = styled.div `
    display: flex;
    justify-content: center;
    text-align: center;
`

const H4 = styled.h3 `
    margin: 3rem 10rem 2rem 2rem;
    /* padding: 0 0 2rem 10rem; */
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 2.5rem;
    color: whitesmoke; 
`

const P1 = styled.p `
    margin: 1rem 10rem 1rem 1rem;
    /* padding: 0 0 2rem 10rem; */
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;  
    color: whitesmoke;
`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 3.5rem;
    color: whitesmoke; 
    margin: 2rem;
`
const Button = styled.button`
        font-weight: 700;
        font-size: 3rem;
        padding: 4rem 10rem;
        margin-top: 2rem;
        margin-left: 2rem;
        font-family: 'Rubik', sans-serif;
        color: whitesmoke;
        cursor: pointer;
        border: 1px solid whitesmoke;
        transition: all 0.5s ease;
        outline: none;
        border-radius: 2px;
        background: rgba( 75, 184, 180, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    &:hover {
        background-color: #23282db9;
        color: #3baec2;
    }
`

const Div4 = styled.div `
    /* display: flex;
    justify-content: right;
    text-align: right;
    align-items: right; */
    margin: 7rem 5rem;
    
`
export default Projects;