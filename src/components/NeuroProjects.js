import styled from 'styled-components'
import nonpro from '../assets/nonpro.png'
import Din from '../components/DIN'
const NeuroProjects = () => {
    return (
        <div>
            <Div id = "projects">
            <H2>Our non-profit projects</H2>
            <img src={nonpro} alt="people" />
            </Div>
            <Din/>
        </div>
    )
}

const Div = styled.div `
    height: 95vh;
    width: 105vw;
    display: block;
    align-items: center;
    justify-content: center;

    text-align: center;
    color: whitesmoke;
    margin-top: 5rem;
    margin-bottom: 15rem;

    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    img {
        width: 45vw;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
    }
    
`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: whitesmoke; 
    padding-top: 5rem;
    margin-bottom: 4rem;
`
export default NeuroProjects;