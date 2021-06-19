import styled from 'styled-components'
// import { useState } from 'react'
// import {VscChromeClose} from 'react-icons/vsc'


const Form = () => {

    //const [show, setShow] = useState(false);
    return(
        <div>
        {/* <VscChromeClose size = '2rem' color = 'whitesmoke' opacity = "0.8" onClick={() => setShow(!show)}/>  */}
            <Div>
            
                
                <div>
                <form action="">
                    <input 
                        id="name" 
                        type="text" 
                        placeholder="Name"/>
                    <input 
                        id="email" 
                        type="text" 
                        placeholder="Email"/>
                    <input 
                        id="phone" 
                        type="text" 
                        placeholder="Phone"/>
                <textarea 
                    className = "textarea"
                    placeholder= "Your message here"
                    type = "text" 
                    name = "message" 
                    cols = "25" 
                    rows = "7">
                </textarea> 
                </form>
            
            <div>
                
                    <button 
                        className = "button"
                        id = "submit" 
                        type = "submit" 
                        value = "submit">
                        Send
                    </button>
            
            </div>
            </div>
            </Div>
            
        </div>
    )
}

const Div = styled.div `
    height: 75vh;
    width: 38vw;
    display: block;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 1px 3px 32px -7px rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius:10px;
    background: rgba( 31, 38, 135, 0.37 ); 
    overflow: hidden;
    float: right;
    /* margin-bottom: 40vh; */
    margin-top:3vh;
    .button {
        font-weight: 200;
        font-size: 1rem;
        padding: 1rem 2rem;
        margin-top: -8vh;
        background: rgba( 255, 255, 255, 0.10 );
        backdrop-filter: blur( 2.5px );
        -webkit-backdrop-filter: blur( 2.5px );
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1rem;
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
    }
    form {
        display: block;
        margin: 1rem 3rem;
        padding: 2rem;

    textarea {
        align-items: center;
        display: block;
        justify-content: center;
        background: rgba( 75, 184, 180, 0.25 );
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1rem;
        color: whitesmoke;
        cursor: pointer;
        margin-top: 4vh; 
        width: 28vw;
        border: 1px solid lightgreen;
        border-radius: 2px;
        outline:none; 
        ::placeholder {
        color: whitesmoke;
    }
        &:placeholder-shown {
            padding: 0.5rem 0.5rem;
        } 
    }
    input{
        
        background: rgba( 75, 184, 180, 0.25 );
        margin-top: 3vh;
        width: 28vw;
        height: 5vh;
        padding-top: 2vh;
        align-items: center;
        display: block;
        justify-content: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1rem;
        color: whitesmoke;
        border: none;
        border-bottom: 1px solid lightgreen;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        outline:none;
        ::placeholder {
        color: whitesmoke;
        }
        &:placeholder-shown {
            padding: 0.5rem 0.5rem;
        
        } 
        
    }
    
    }

    
`



export default Form;