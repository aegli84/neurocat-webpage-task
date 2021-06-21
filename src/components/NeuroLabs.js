import styled from 'styled-components'
import { GiArchiveResearch, GiChatBubble, GiChart, GiArtificialIntelligence} from 'react-icons/gi'

import { GoDashboard,GoPerson } from 'react-icons/go'
const NeuroLabs = () => {
    return (
        <div>
        <H2>Overview of neurocat labs</H2>
            <Div id = "offerings">
            
            <Card>
            <GiArchiveResearch size = '4rem'/>
            <H4>Research</H4>
            
            <P>
                Our mathematicians, ML experts, computer and data scientists research for major companies in the areas of AI (Module/Data) robustness, comprehensibility, functionality, privacy and ethical frameworks. Only a deep understanding of the AI algorithms and related data sets allows for the reliable safeguarding against failure over the entire lifecycle of AI applications
            </P>
            </Card>
            <Card>
            <GiChatBubble size = '4rem'/>
            <H4>Consulting</H4>
            <P>
                Boost the value of your AI products by building up trust. For this you will need to develop robust,  understandable, regulatory, safe and secure AI algorithms – and our consulting team can give you the necessary support to achieve this goal!
            </P>
            </Card>
            <Card>
            <GiChart size = '4rem' />
            <H4>Analysis</H4>
            <P>
                We analyze your data and AI models with respect to robustness, comprehensibility, functionality, privacy and ethic. Our experts use unique and state-of-the-art metrics and methods from our AI Analysis Toolkit (aidkit.ai) and in this way detect vulnerabilities early on to safe costs and risks.
            </P>
            </Card>
            <Card>
            <GoDashboard size = '4rem' color= 'whitesmoke'/>
            <H4>Optimization</H4>
            <P>
                The elimination of vulnerabilities in modern AI technologies is one of our core competencies. We can detect and remove crucial weaknesses and errors – regardless of whether they stem from robustness, comprehensibility or general performance issues. Our goal is to ensure AI safety, security and privacy.
            </P>
            </Card>
            <Card>
            <GiArtificialIntelligence size = '4rem' color= 'whitesmoke'/>
            <H4>Governance</H4>
            <P>
                The approach of neurocat is holistic along the entire AI life cycle. Our task fields range from the optimization of the training, model, datas and specifications of an AI product up to the anomaly or misusage detection. In some of these areas neurocat is a leading worldwide provider of AI quality solutions.
            </P>
            </Card>
            <Card>
            <GoPerson size = '4rem'/>
            <H4>DevOps</H4>
            <P>
                Our experienced AI developers support our customers in development, deployment and operation. The results from our AI Research and AI Analysis can be directly integrated into the customers’ AI products.
            </P>
            </Card>
            </Div>
            
        </div>
    )
}

const Div = styled.div `
    height: 105vh;
    width: 105vw;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    text-align: center;
    color: whitesmoke;
    margin-bottom: 8rem;

    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    
`


const Card = styled.div `
    width: 25vw;
    height: 46vh;
    box-shadow: 1px 3px 32px -7px rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius:10px;
    text-align: center;
    padding: 1.5rem;
    margin: 1.5rem;
    background: rgba( 31, 38, 135, 0.37 ); 
    overflow: hidden;
    img {
        height: 30vh;
        width: 26vw;
    }
`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: whitesmoke; 
    margin: 2rem;
    text-align: center;

`
const H4 = styled.h4 `
    /* margin: 3rem 10rem 2rem 2rem; */
    /* padding: 0 0 2rem 10rem; */
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 2.2rem;
    color: whitesmoke; 
`
const P = styled.p `
    margin-top: 1.5rem;
    /* padding: 1rem; */
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1rem;  
`
export default NeuroLabs;