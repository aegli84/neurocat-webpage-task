import styled from 'styled-components'

const Cases = () => {
    return (
        <div>
            <Div id = "cases">
                <H2>Use Cases</H2>
            </Div>
        </div>
    )
}

const Div = styled.div `
    height: 70vh;
    width: 105vw;
    display: block;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: whitesmoke;
    margin-top: 5rem;
    margin-bottom: 8rem;
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: whitesmoke; 
    padding-top: 5rem;
    margin-bottom: 4rem;
`
export default Cases;