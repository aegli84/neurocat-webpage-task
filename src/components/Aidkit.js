import aidkit from '../assets/aidkit.png'
import test from '../assets/test.png'
import Video from '../components/Video'
import Approach from '../components/Approach'
import add from '../assets/add.png'
import Pricing from './Pricing'
import Faq from '../components/Faq'

import styled from 'styled-components'

const Aidkit = () => {
    return (
        <>
            <Div id = "aidkit" >
                <Div2>
                    <img src={aidkit} alt="people" />
                    <div>
                        <H3>aidkit and how it can help companies</H3>
                        <P>
                            Save time, money and stress during your AI analysis by using the biggest collection of optimization, vulnerability detection and debugging tools
                        </P>
                        </div>
                </Div2>
            </Div>
                    <Div3>
                        <H2>Aidkit explained</H2>
                        <Video className="video" embedId="GdVPn0mQp2k"/>
                    </Div3>
                <Div >
                    <Div4 className="test">
                        <img src={test} alt="people" />
                            <H2>Tesbed & Monitor</H2>
                    </Div4>
                </Div>
                <Div >
                    <Div4 className="add">
                        <H2>AddOn Protect & Explain</H2>
                            <img src={add} alt="people" />
                    </Div4>
                </Div>
            <section id = "approach">
                <Approach/>
            </section> 
            <section id="pricing">
                <Pricing/>
            </section>
            <section id="faq">
                <Faq/>
            </section>
        </>
    )
}

const Div = styled.div `
    display: flex;
    align-items: left;
    justify-content: left;
    height: 80vh;
    width: 115vw;
    
    
`

const Div2 = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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
    

    img {
        float: left;
        height: 30vh;
        width: 30vw;
        padding-left: 6rem;
        
    }
`

const H3 = styled.h3 `
    margin: 4rem 1rem 2rem 0rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
    color: whitesmoke; 
`
const P = styled.p `
    margin: 1rem 5rem 1rem 1rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1.7rem;  
    color: whitesmoke;
`

const Div3 = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 115vh;
    width: 100vw;
    background: rgba( 31, 38, 135, 0.37 ); 
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    margin-bottom: 7rem;
    img {
        float: left;
        height: 30vh;
        width: 30vw;
        padding-left: 10rem;
        
    }
    
`

const H2 = styled.h2 `
    /* padding: 0 0 2rem 10rem; */
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    color: whitesmoke; 
    padding-top: 5rem;
    padding-left: 5rem;
    margin-bottom: 4rem;
`
const Div4 = styled.div `
    height: 60vh;
    width: 105vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    /* margin-bottom: 1rem;
    padding: 1rem; */
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-bottom-right-radius: 320px;
    border-top-left-radius: 430px;
    border-bottom-left-radius: 430px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    img {
        float: left;
        height: 40vh;
        width: 35vw;
        padding-left: 5rem;
        
    }
    
`
export default Aidkit;