
import Form from '../components/Form'
import { useState } from 'react'
import styled from 'styled-components'
    

const Pricing = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Div id = "pricing">
            <H2>Pricing</H2>
            <H3>Get in touch to discuss pricing options</H3>
            <div>
                    <Button onClick={() => setShow(!show)}
                        className = "button"
                        id = "submit" 
                        type = "submit" 
                        value = "submit">
                        Contact Form
                    </Button>
                    <Divf>
                    {show && <Form />}
                    </Divf>
            </div>
            </Div>
        </>
    )
}

const Div =styled.div `
    text-align: center;
    background: #3c8893;
    height: 65vh;
`

const Button = styled.button`
        font-weight: 400;
        font-size: 1.5rem;
        padding: 1.3rem 2rem;
        margin-top: 1vh;
        background: rgba( 255, 255, 255, 0.10 );
        backdrop-filter: blur( 2.5px );
        -webkit-backdrop-filter: blur( 2.5px );
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        color: whitesmoke;
        cursor: pointer;
        border: 1px solid whitesmoke;
        transition: all 0.5s ease;
        outline: none;
        border-radius: 2px;
    &:hover {
        background-color: #23282db9;
        color: #4bb8b4;
    }
`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: whitesmoke; 
    padding-top: 5rem;
    margin-bottom: 3rem;
`
const H3 = styled.h3 `
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 2.5rem;
    color: whitesmoke; 
    padding-top: 1rem;
    margin-bottom: 2rem;
`

const Divf = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #3c8893;
`

export default Pricing;