import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Navbar = ()=> {
    return(
        
        <Nav>
        <a href="http://localhost:3000/">
        <img width="222" height="69" src="https://www.neurocat.ai/wp-content/uploads/2018/11/neurocat_website_logo.png" class="img-fluid" alt="Neurocat" itemprop="logo" ></img>
        </a>
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
            <NavLink
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/Team"
            >Team</NavLink>
            <NavLink
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/Career"
            >Career</NavLink>
            <NavLink
                exact
                className = "nav-item"
                activeClassName="active" 
                to = "/Contact"
            >Contact</NavLink>
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