import styled from 'styled-components'
import miau from '../assets/miau.png'
import customers from '../assets/customers.png'
const Din = () => {
    return (
        <div>
            <Div id = "din">
            <H2>Overview on DIN</H2>
            <P>
            DIN Standards are the results of work at national, European and/or international level. Anyone can submit a proposal for a new standard. Once accepted, the standards project is carried out according to set rules of procedure by the relevant DIN Standards Committee, the relevant Technical Committee of the European standards organization CEN (CENELEC for electrotechnical standards) or the relevant committee at the international standards organization ISO (IEC for electrotechnical projects).
            </P>
            <div>
            <Div2>
            <H2>Overview on DIN 92001-1</H2>
            <P>
                AI and ML experts from all over Germany came together to kick-off work on the DIN SPEC 92001 ‘Artificial Intelligence – Quality requirements and life cycle management for AI modules’
            </P>
            
            <P>
                The huge advancements in and the rapid development of the field of AI have shown that those new technologies are bound to influence and change our lives in unprecedented ways. It is the responsibility of us all to shape this aspiring field in a positive way, and thus enable a safe and happy future for us all.
            </P>
            <P>
                We, at neurocat, believe that standardization work offers the best chance to give guidance to people developing and/or deploying AI technologies, and through this enable the rise of trustworthy and safe AI solutions.
            </P>
            <P>
                For further information please refer to: <a href="https://www.din.de/en/about-standards/din-spec-en/business-plans/wdc-beuth:din21:288723757?sourceLanguage&destinationLanguage">Download Standards</a>
            </P>
            <img src={miau} alt="html"/>
            
        
        </Div2>
            
            </div>

        <Div3>
            <H3>Overview on DIN 92001-2</H3>
            <P1>
                AI and ML experts from all over Germany came together to kick-off work on the DIN SPEC 92001 ‘Artificial Intelligence – Quality requirements and life cycle management for AI modules’
            </P1>
            
            <P1>
                The huge advancements in and the rapid development of the field of AI have shown that those new technologies are bound to influence and change our lives in unprecedented ways. It is the responsibility of us all to shape this aspiring field in a positive way, and thus enable a safe and happy future for us all.
            </P1>
            <P1>
                We, at neurocat, believe that standardization work offers the best chance to give guidance to people developing and/or deploying AI technologies, and through this enable the rise of trustworthy and safe AI solutions.
            </P1>
            <P1>
                For further information please refer to: <a href="https://www.din.de/en/about-standards/din-spec-en/business-plans/wdc-beuth:din21:288723757?sourceLanguage&destinationLanguage">Download Standards</a>
            </P1>
            
            </Div3>
            <img src={miau} alt="html"/> 
            <H2>What next?</H2>
            <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique pariatur excepturi odit, quo quos aliquid magni delectus sed ex libero?.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique pariatur excepturi odit, quo quos aliquid magni delectus sed ex libero?.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique pariatur excepturi odit, quo quos aliquid magni delectus sed ex libero?.
            </P>
            <Div0>
            <H2>DIN Partners</H2>
            <img src={customers} alt="html"/> 
            </Div0>
            </Div>
            
        </div>
    )
}

const Div = styled.div `
    height: 320vh;
    width: 105vw;
    display: block;
    align-items: center;
    justify-content: center;

    text-align: left;
    color: whitesmoke;
    margin-bottom: 8rem;
    background:  #3c8893;;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    img {
        float: left;
        height: 30vh;
        width: 25vw;
        margin: -22rem 1rem 0rem 7rem;
    }
    
`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    text-align: center;
    color: whitesmoke; 
    padding-top: 5rem;
    margin-bottom: 4rem;
`

const P = styled.p `
    margin: 1rem 10rem 1rem 10rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;  
    color: whitesmoke;
    a{
        color: whitesmoke;
        font-size: 1.3rem;
    }
`

const H3 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: whitesmoke; 
    padding-top: 5rem;
    margin-bottom: 4rem;
    
`

const P1 = styled.p `
    margin: 1rem 11rem 1rem 13rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;  
    color: whitesmoke;
    text-align: left;
    a{
        color: whitesmoke;
        font-size: 1.3rem;
    }
`


const Div2 = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    color: whitesmoke;
    margin: 1rem 30rem 0rem 1rem;
    
    img {
        float: right;
        height: 30vh;
        width: 25vw;
        margin: -25rem 1rem 0rem 90rem;
        
    }
`

const Div3 = styled.div `
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: whitesmoke;
    margin: 10rem 1rem 0rem 25rem;
    
`


const Div0 = styled.div `
    display: block;
    justify-content: center;
    
    text-align: center;
    img {
        height: 35vh;
        width: 60vw;
        margin-top: 1rem;
        margin-left: 22rem; 
    }
`
export default Din;