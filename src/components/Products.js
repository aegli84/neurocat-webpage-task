import styled from 'styled-components';
import miau from '../assets/miau.png'
import aid from '../assets/aid.png'
import tru from '../assets/tru.png'
import {ScrollSections} from './ScrollSections'
import {fade} from '../animations'
import {motion} from 'framer-motion'

const Products = () => {
    const [element, controls] = ScrollSections();
    return (
<>
        <Div4 
                className = "products" 
                id ="products"
                variants = {fade} 
                animate={controls} 
                initial = 'hidden' 
                ref={element}>
            <Card>
            <img src={miau} alt="html"/>
                <H2>AI Quality Services</H2>
                <h3>Services for AI Quality – Safety, Security & Privacy</h3>
            </Card>
            <Card>
            <img src={aid} alt="html"/>
                <H2>aidkit</H2>
                <P>
                    Is an open source AI analysis, optimization and debugging platform. It will support prototyping, deployment and operation.

                    Save time, money and stress during your AI analysis by using the biggest collection of optimization, vulnerability detection and debugging tools
                </P>
            </Card>
            <Card>
            <img src={tru} alt="html"/>
                <H2>DeepTrust</H2>
                <P>
                    Is an AI risk, safety, security and privacy framework for all stakeholders.

                    The acceptance of AI hinges on trust into the system. Thus, our quality seal and its related frameworks serve to create trust in your AI solutions. Calculate and cover your risks, be insured, monitor and control cyber-critical criteria with this unique platform
                </P>
            </Card>
        </Div4>
        </>
    )}


const Div4 = styled(motion.div) `
    min-height: 45vh;
    padding: 4rem;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
`

const Card = styled.div `
    width: 26vw;
    height: 64vh;
    box-shadow: 1px 3px 32px -7px rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius:10px;
    text-align: center;
    margin: 1.5rem;
    background: rgba( 31, 38, 135, 0.37 ); 
    overflow: hidden;
    img {
        height: 30vh;
        width: 26vw;
    }
`
const P = styled.p `
    margin-top: 1.5rem;
    padding:0 1rem 1rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1rem;  
    color: whitesmoke;
`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 3rem;
    color: whitesmoke; 
    
`
    export default Products;