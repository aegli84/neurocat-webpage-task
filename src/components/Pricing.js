
import Form from '../components/Form'
import { useState } from 'react'
import styled from 'styled-components'
    

const Pricing = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div id = "pricing">
            <h2>Pricing</h2>
                
            <div>
                    <Button onClick={() => setShow(!show)}
                        className = "button"
                        id = "submit" 
                        type = "submit" 
                        value = "submit">
                        Contact Form
                    </Button>
                    {show && <Form/>}
            </div>
            </div>
        </>
    )
}


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
export default Pricing;