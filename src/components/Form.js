import styled from 'styled-components'
// import { useState } from 'react'
import {IoMdStar} from 'react-icons/io'


const Form = () => {

    
    return(
        <div>
        {/* <VscChromeClose size = '2rem' color = 'whitesmoke' opacity = "0.8" onClick={() => setShow(!show)}/>  */}
            <Div >
            
                
                <div>
                <form action="">
                <label>Name<IoMdStar size = '.6rem' color = 'whitesmoke'/></label>
                    <input 
                        id="name" 
                        type="text" 
                        />
                <label>Email<IoMdStar size = '.6rem' color = 'whitesmoke'/></label>
                    <input 
                        id="email" 
                        type="text" 
                        />
                <label>Phone<IoMdStar size = '.6rem' color = 'whitesmoke'/></label>
                    <input 
                        id="phone" 
                        type="text" 
                        />
                <label>Role<IoMdStar size = '.6rem' color = 'whitesmoke'/></label>
                    <input 
                        id="phone" 
                        type="text" 
                        />
                <label>Interest<IoMdStar size = '.6rem' color = 'whitesmoke'/></label>
                <select name="select" id="test-select">
                            <option value="">--Please choose an option--</option>
                            <option value="one">Very interested</option>
                            <option value="two">Not convinced yet</option>
                            <option value="three">Where do I sign up</option>
                        </select>
                <label>How are you currently testing your models?</label>
                        <select name="select" id="test-select">
                            <option value="">--Please choose an option--</option>
                            <option value="one">AI-Based Sentiment Analytics</option>
                            <option value="two">CAI Platforms Testing</option>
                            <option value="three">HAI-Powered Solutions Testing</option>
                            <option value="four">ML Models Testingt</option>
                            <option value="five">Analytical Models Testing</option>
                        </select>
                    {/* <input 
                        id="phone" 
                        type="text" 
                        /> */}
                        <label>How often do you test your models?</label>
                        <select name="select" id="test-select">
                            <option value="">--Please choose an option--</option>
                            <option value="one">Once per per month</option>
                            <option value="two">Every quarter</option>
                            <option value="three">We never test</option>
                        </select>
                    {/* <input 
                        id="phone" 
                        type="text" 
                        /> */}
                {/* <textarea 
                    className = "textarea"
                    placeholder= "Your message here"
                    type = "text" 
                    name = "message" 
                    cols = "25" 
                    rows = "7">
                </textarea>  */}
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
    height: 120vh;
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
    margin-top:3vh;
    .button {
        font-weight: 400;
        font-size: 1.4rem;
        padding: 1rem 5rem;
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
        margin: 0 2rem;
        padding: 3rem;
        label {
            color: whitesmoke;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 1rem;
            font-family: 'Rubik', sans-serif;
            font-size: 1.3rem;
            font-weight: 200;
        }
    /* textarea {
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
    } */
    input, select {
        
        background: #6ea8b2;
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
        /* ::placeholder {
        color: whitesmoke;
        } */
        &:placeholder-shown {
            padding: 0.5rem 0.5rem;
        
        } 
        
    }
    
    }

    
`



export default Form;