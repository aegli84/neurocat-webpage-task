import styled from 'styled-components';
import miau from '../assets/miau.png'
import aid from '../assets/aid.png'
import tru from '../assets/tru.png'

const Products = () => {
    return (
<>
        <Div4 className = "products" id ="products">
            <Card>
            <img src={miau} alt="html"/>
                <H2>AI Quality Services</H2>
                <h3>Services for AI Quality – Safety, Security & Privacy</h3>
            </Card>
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


const Div4 = styled.div `
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
    height: 60vh;
    box-shadow: 1px 3px 32px -7px rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius:10px;
    text-align: center;
    margin: 2rem;
    background: rgba( 31, 38, 135, 0.37 ); 
    overflow: hidden;
    img {
        height: 30vh;
        width: 26vw;
    }
`
const P = styled.p `
    margin-top: 1.5rem;
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