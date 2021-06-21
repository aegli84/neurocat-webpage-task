import faq from '../assets/faq.png'
import styled from 'styled-components'

const Faq = () => {
    return (
        <>
            <Div4>
                <H2>FAQ's</H2>
                <img src={faq} alt="people" />
            </Div4>
        </>
    )
}

const Div4 = styled.div `
    height: 100vh;
    width: 100vw;
    display: block;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: whitesmoke;
    margin-bottom:  9rem;
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: whitesmoke; 
    padding-top: 5rem;
    margin-bottom: 3rem;
`
export default Faq;




