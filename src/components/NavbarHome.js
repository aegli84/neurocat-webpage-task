import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import ScrollIntoView from 'react-scroll-into-view'
import { NavHashLink as Link } from "react-router-hash-link";

const Navbar = ()=> {
    return(
        
        <Nav>
            <Link to = "/">
                <img width="200" height="59" src="https://www.neurocat.ai/wp-content/uploads/2018/11/neurocat_website_logo.png" class="img-fluid" alt="Neurocat" itemprop="logo"></img>
            </Link>
        <NavLink
                exact
                className = "nav-item" 
                activeClassName="active"
                to = "/"
            >Home</NavLink>

            <NavLink
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/Products"
            >Products</NavLink>
            <NavLink
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/Resources"
            >Resources</NavLink>
            <ScrollIntoView selector= "#team">
            <Link 
            
                smooth = {true}
                to = "#Team"
            >Team</Link>
            </ScrollIntoView>
            <NavLink
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/Career"
            >Career</NavLink>

        <ScrollIntoView selector =  "#contact">
            <Link
                smooth = {true}
                to = "#Contact"
            >Contact</Link>
            </ScrollIntoView>
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
    padding: 1rem 7rem;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.20 ) ;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
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