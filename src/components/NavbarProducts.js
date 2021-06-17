//import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
// import ScrollIntoView from 'react-scroll-into-view'
// import { NavHashLink as Link } from "react-router-hash-link";
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'

const Navbar = ()=> {

    return(
        
        <Nav>
        <ul>
            <li>
                <Link 
                    to = "/" 
                    smooth = {true} 
                    duration = {700} 
                    spy = {true}  
                    offset={-150}>
                    <img width="222" height="69" src="https://www.neurocat.ai/wp-content/uploads/2018/11/neurocat_website_logo.png" class="img-fluid" alt="Neurocat" itemprop="logo" ></img>
                </Link>
            </li>
            <li>
                <Link 
                    to = "/Aidkit" 
                    smooth = {true} 
                    duration = {700} 
                    spy = {true}  
                    offset={-150} 
                    >What is aidkit
                </Link>
            </li>
            <li>
                <Link 
                    to = "/Approach" 
                    smooth = {true} 
                    duration = {700} 
                    spy = {true}  
                    offset={-110}
                    >Approach
                </Link>
            </li>

            <li>
                <Link 
                    to = "/Pricing" 
                    smooth = {true} 
                    duration = {700} 
                    spy = {true} 
                    offset={-65}
                    >Pricing
                </Link>
            </li>

            <li>
                <Link 
                    to = "/Login" 
                    smooth = {true} 
                    duration = {700} 
                    spy = {true} 
                    offset={-200}
                    >Login
                </Link>
            </li>
            
            <li>
                <Link 
                    to = "/FAQ" 
                    smooth = {true} 
                    duration = {700} 
                    spy = {true} 
                    offset={-200}
                >FAQ
            </Link>
            </li>
        </ul>
    </Nav>
    )
}

const Nav = styled.nav`
    min-height: 7vh;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background: #3c8893;
    overflow: hidden; 
    padding: 1rem 15rem;
    box-shadow:  0 8px 6px -6px #4d676b;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    /* @media (max-width: 768px){
        display: none;
    } */
    a {
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        font-size: 1.2rem;
        color: whitesmoke;
        text-decoration: none;
        
    }
    ul {
        display: flex;
        list-style: none;
    }
    
    li {
        margin-bottom: 0.5rem;
        padding-left: 4rem;
        position: relative;
    }
    
`
export default Navbar;