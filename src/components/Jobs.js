import styled from 'styled-components'

const Jobs = () => {
    return (
        <>
            <Div id = "approach">
            <Div3>
                <H2>Are you looking for a new challenge? </H2>
                <H3>Sales</H3>
                    
                <H3>Finance & Administration</H3>
                    
                <H3>Research Engineering</H3>
                    
            </Div3>
            </Div>
        </>
    )
}


const Div = styled.div `
    min-height: 45vh;
    padding: 4rem;
    margin-top: 7rem;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    
    
`

const Div3 = styled.div`
    width: 100vw;
    height: 80vh;
    box-shadow: 1px 3px 32px -7px rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius:10px;
    text-align: center;
    /* margin: 1rem; */
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
    font-weight: 600;
    font-size: 4rem;
    color: whitesmoke; 
    padding-top: 5rem;
    margin-bottom: 4rem;
`

const H3 = styled.h3 `
    margin: 4rem 1rem 2rem 0rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 2.5rem;
    color: whitesmoke; 
    text-decoration: underline;
    cursor: pointer;
`
// const Div4 = styled.div `
//     height: 170vh;
//     width: 105vw;
//     display: block;
//     align-items: center;
//     justify-content: center;

//     text-align: center;
//     color: whitesmoke;
//     /* margin-bottom: 1rem;
//     padding: 1rem; */
//     background: rgba( 255, 255, 255, 0.10 );
//     box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
//     backdrop-filter: blur( 2.5px );
//     -webkit-backdrop-filter: blur( 2.5px );
//     border: 1px solid rgba( 255, 255, 255, 0.18 );

    
// `
export default Jobs;