import styled from 'styled-components';
//import {useLocation} from 'react-router-dom'
import { NavHashLink as Link } from "react-router-hash-link";
import ScrollIntoView from 'react-scroll-into-view'

const Navbar = ()=> {

    //let Link = Scroll.Link;

    return(
        
        <Nav>
        <ScrollIntoView>
                <Link 
                
                    to = "/" 
                    >
                    
                    <img width="222" height="69" src="https://www.neurocat.ai/wp-content/uploads/2018/11/neurocat_website_logo.png" class="img-fluid" alt="Neurocat" itemprop="logo"  ></img>
                </Link>
                </ScrollIntoView>
        <ul>
            <li>
            <ScrollIntoView selector= "#cases">
                <Link 
                    to = "#cases" 
                    smooth = {true}
                    >Use Cases
                </Link>
                </ScrollIntoView>
            </li>
            <li>
            <ScrollIntoView selector= "#publications">
                <Link 
                    to = "#publications" 
                    smooth = {true}
                    >Publications
                </Link>
                </ScrollIntoView>
            </li>

            <li>
            <ScrollIntoView selector= "#paper">
                <Link 
                    to = "#paper" 
                    smooth = {true}
                    >Paper Cuts
                </Link>
                </ScrollIntoView>
            </li>

            <li>
            <ScrollIntoView>
                <Link 
                    to = "#news" 
                    smooth  = {true}
                    >News
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