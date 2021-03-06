import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'
import Form from '../components/Form'
import { useState } from 'react'

const Footer = () => {
    const [show, setShow] = useState(false);
    return (
        <>
        <Div1 id = "contact">
            <div>
                <H3>CONTACT US</H3>
                <Div2>
                    <a target = "_blank" rel="noreferrer" href="https://www.facebook.com/neurocatai/"><FaFacebook/></a>
                    <a target = "_blank" rel="noreferrer" href="https://www.linkedin.com/company/neurocatai/"><FaLinkedin/></a>
                    <a target = "_blank" rel="noreferrer"  href="https://www.youtube.com/"><FaYoutube/></a>
                </Div2>
            </div>
            
            <Line/>
{/*            
            <AiOutlineMail color = 'whitesmoke'/>
            <FaRegAddressCard color = 'whitesmoke'/>
            <AiOutlinePhone color = 'whitesmoke'/>
            */}
                <Div2>
{/*                 
                <AiOutlineMail color = 'whitesmoke'/> */}
                
                <H4>Address</H4>
                    <P>
                        IGZ Berlin-Adlershof
                        Rudower Chaussee 29
                        12489 Berlin
                        Germany
                    </P>
                <H4>Email</H4>
                    <P>
                        meow@neurocat.ai
                    </P>
                <H4>Phone</H4>
                    <P>+49 (0) 30 340 65 918</P>
                    <P>Skype: neurocat GmbH</P>
            </Div2>
            
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
            </Div1>
            
        </>
    )
}

const Div1 = styled.div`
    height: 45vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    background: #3c8893;
    margin-top: 2vh;
    padding: 0rem 1rem;
    border-top: 1px solid rgba( 255, 255, 255, 0.20 );
    border-bottom: 1px solid rgba( 255, 255, 255, 0.20 );
`

const Div2 = styled.div`
    display:inline-block;
    justify-content: left;
    align-items: left;
    text-align: left;
    padding: 1rem;
    
    a {
        padding: 1rem;
        font-size: 1.8rem;
        color: whitesmoke;
        :hover {
            color: black;
        }
    }
`

const H4 = styled.h4 `
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: whitesmoke; 
    padding-bottom: .5rem;
    padding-left: 1rem;
`
const P = styled.p `
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1rem;
    color: whitesmoke; 
    padding-bottom: .5rem;
    padding-left: 1rem;
`
const H3 = styled.h3 `
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    color: whitesmoke; 
    margin: 1rem;
`
const Line = styled.div`
    border-left: .1rem solid whitesmoke;
    height: 13rem;
    position: relative;
`

const Button = styled.button`
        font-weight: 400;
        font-size: 1.5rem;
        padding: 1.3rem 2rem;
        margin-top: 1vh;
        background: rgba( 255, 255, 255, 0.10 );
        backdrop-filter: blur( 5.5px );
        -webkit-backdrop-filter: blur( 5.5px );
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
export default Footer;