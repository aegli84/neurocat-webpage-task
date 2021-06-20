import styled from 'styled-components'

const Publications = () => {
    return (
        <div>
            <Div id = "cases">
            <H2>Own Publications</H2>
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
    margin-bottom: 8rem;
    background:  #3c8893;;
    margin-top: -8rem;
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
export default Publications;