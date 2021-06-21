import styled from 'styled-components';
import { NavHashLink as Link } from "react-router-hash-link";
import ScrollIntoView from 'react-scroll-into-view'

const Navbar = ()=> {

    return(
        <Nav>
            <ScrollIntoView>
                <Link to = "/">
                    <img width="200" height="59" src="https://www.neurocat.ai/wp-content/uploads/2018/11/neurocat_website_logo.png" class="img-fluid" alt="Neurocat" itemprop="logo"  ></img>
                </Link>
            </ScrollIntoView>
        <ul>
            <li>
            <ScrollIntoView selector= "#offerings">
                <Link 
                    to = "#offerings" 
                    smooth = {true}
                    >Offerings
                </Link>
                </ScrollIntoView>
            </li>
            <li>
            <ScrollIntoView selector= "#service">
                <Link 
                    to = "#service" 
                    smooth = {true}
                    >Service Projects
                </Link>
                </ScrollIntoView>
            </li>

            <li>
            <ScrollIntoView selector= "#projects">
                <Link 
                    to = "#projects" 
                    smooth = {true}
                    >Non-profit Projects
                </Link>
                </ScrollIntoView>
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