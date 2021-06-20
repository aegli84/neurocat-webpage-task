//import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
// import ScrollIntoView from 'react-scroll-into-view'
import { NavHashLink as Link } from "react-router-hash-link";

const Navbar = ()=> {
    return(
        
        <Nav>
        <a href="http://localhost:3000/">
        <img width="200" height="59" src="https://www.neurocat.ai/wp-content/uploads/2018/11/neurocat_website_logo.png" class="img-fluid" alt="Neurocat" itemprop="logo" ></img>
        </a>
            <Link
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/Career"
            >Jobs</Link>
            
        </Nav>
        
)
}


const Nav = styled.nav`
    min-height: 25vh;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background: #3c8893;
    overflow: hidden; 
    padding: 1rem 15rem;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.20 ) ;
    /* box-shadow:  0 8px 6px -6px #4d676b; */
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
        font-size: 3.2rem;
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