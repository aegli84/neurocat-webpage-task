import customers from '../assets/customers.png'
import robust from '../assets/robust.png'
import functionality from '../assets/functionality.png'
import explain from '../assets/explain.png'
import add from '../assets/add.png'
import styled from 'styled-components'

const Approach = () => {

    return (
        <>
            <Div id = "approach">
            <Div3 >
                <H2>Features of aidkit: </H2>
                <H3>Functionality</H3>
                    <img src={functionality} alt="" />
                <H3>Explainability</H3>
                    <img src={explain} alt="" />
                <H3>Robustness</H3>
                    <img src={robust} alt="" />
            </Div3>
            </Div>
            <div>
                <Div4>
                    <H2>How does it work?</H2>
                    <img src={add} alt="" />
                    <H2>Current Customers</H2>
                    <img src={customers} alt="" />
                </Div4>
            </div>
        </>
    )
}


const Div = styled.div `
    min-height: 45vh;
    padding: 4rem;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
`

const Div3 = styled.div`
    width: 100vw;
    height: 250vh;
    box-shadow: 1px 3px 32px -7px rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius:10px;
    text-align: center;
    background: rgba( 31, 38, 135, 0.37 ); 
    overflow: hidden;
    img {
        height: 50vh;
        width: 80vw;
        margin-top: 2rem; 
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

const H3 = styled.h3 `
    margin: 4rem 1rem 2rem 0rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
    color: whitesmoke; 
`
const Div4 = styled.div `
    height: 170vh;
    width: 105vw;
    display: block;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: whitesmoke;
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`
export default Approach;