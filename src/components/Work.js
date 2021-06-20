import styled from 'styled-components'
import Cases from '../components/Cases'
import Publications from '../components/Publications'
import PaperCuts from '../components/PaperCuts'
import News from '../components/News'

const Work = () => {
    return (
        <div>
            <Div>
            <div id = "cases">
                <Cases/>
            </div> 
            <div id="public">
                <Publications/>
            </div>
            <div id="paper">
                <PaperCuts/>
            </div>
            <div id="news">
                <News/>
            </div>
            </Div>
        </div>
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

// const Div3 = styled.div`
//     width: 100vw;
//     height: 250vh;
//     box-shadow: 1px 3px 32px -7px rgba( 31, 38, 135, 0.37 );
//     backdrop-filter: blur( 2.5px );
//     -webkit-backdrop-filter: blur( 2.5px );
//     border-radius:10px;
//     text-align: center;
//     /* margin: 1rem; */
//     background: rgba( 31, 38, 135, 0.37 ); 
//     overflow: hidden;
//     img {
        
//         height: 50vh;
//         width: 80vw;
//         margin-top: 2rem; 
//     }
// `
// const H2 = styled.h2 `
//     font-family: 'Rubik', sans-serif;
//     font-weight: 700;
//     font-size: 4rem;
//     color: whitesmoke; 
//     padding-top: 5rem;
//     margin-bottom: 4rem;
// `

// const H3 = styled.h3 `
//     margin: 4rem 1rem 2rem 0rem;
//     font-family: 'Rubik', sans-serif;
//     font-weight: 500;
//     font-size: 2.5rem;
//     color: whitesmoke; 
// `
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

// const Div =styled.div `
//     text-align: center;
//     background: #3c8893;
//     height: 65vh;
// `

// const Button = styled.button`
//         font-weight: 400;
//         font-size: 1.5rem;
//         padding: 1.3rem 2rem;
//         margin-top: 1vh;
//         background: rgba( 255, 255, 255, 0.10 );
//         backdrop-filter: blur( 2.5px );
//         -webkit-backdrop-filter: blur( 2.5px );
//         font-family: 'Roboto', sans-serif;
//         font-weight: 500;
//         color: whitesmoke;
//         cursor: pointer;
//         border: 1px solid whitesmoke;
//         transition: all 0.5s ease;
//         outline: none;
//         border-radius: 2px;
//     &:hover {
//         background-color: #23282db9;
//         color: #4bb8b4;
//     }
// `

// const H2 = styled.h2 `
//     font-family: 'Rubik', sans-serif;
//     font-weight: 700;
//     font-size: 4rem;
//     color: whitesmoke; 
//     padding-top: 5rem;
//     margin-bottom: 3rem;
// `
// const H3 = styled.h3 `
//     font-family: 'Rubik', sans-serif;
//     font-weight: 400;
//     font-size: 2.5rem;
//     color: whitesmoke; 
//     padding-top: 1rem;
//     margin-bottom: 2rem;
// `

// const Divf = styled.div`
//     position: relative;
//     z-index: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     background: #3c8893;
// `

export default Work;