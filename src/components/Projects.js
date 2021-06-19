import neuro from '../assets/neuro.png'
import customers from '../assets/customers.png'
import styled from 'styled-components'

const Projects = () => {
    return(
        <>
        <Div>
            <Div1>
                <img 
                    src="https://www.neurocat.ai/wp-content/uploads/2018/11/cat.png" alt="neurocat">
                </img>
                <div>
                
                    <H3>neurocat's past industry projects / outcomes / partners</H3>
                    <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam assumenda quas adipisci dolorem voluptate saepe dolores amet id odio quaerat</P>
                </div>
            </Div1>
        <Div2>
            <div>
                <H4>neurocat's work with DIN Standard</H4>
                <P1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam assumenda quas adipisci dolorem voluptate saepe dolores amet id odio quaerat</P1>
            </div>
                <img 
                    src={neuro} alt="nurocat">
                </img>
        </Div2>
            <div>
                <H2>Customer Voice</H2>
                <img 
                    src={customers} alt="nurocat">
                </img>
            </div>
            </Div>
        </>
    )
}


const Div = styled.div `
    display: block;
    justify-content: center;
    text-align: center;
    width: 100vw;
    height: 145vh;
    box-shadow: 1px 3px 32px -7px rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    /* margin: 1rem 2rem 3rem 7rem; */
    margin: 7rem 0;
    padding: 5rem;
    background: rgba( 31, 38, 135, 0.37 ); 
    /* border-top: 1px solid rgba( 255, 255, 255, 0.20 );
    border-bottom: 1px solid rgba( 255, 255, 255, 0.20 ); */
    /* overflow: hidden; */
    
`

const Div1 = styled.div `
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
    text-align: center;
    img {
        height: 35vh;
        width: 25vw;
        /* margin-right: -5rem; */
        padding-left: 6rem;
        
    }
`
const H3 = styled.h3 `
    margin: 4rem 1rem 2rem 10rem;
    /* padding: 0 0 2rem 10rem; */
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 2.5rem;
    color: whitesmoke; 
`
const P = styled.p `
    margin: 1rem 5rem 1rem 14rem;
    /* padding: 0 0 2rem 10rem; */
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;  
    color: whitesmoke;
`

const Div2 = styled.div `
    display: flex;
    justify-content: center;
    text-align: center;
`

const H4 = styled.h3 `
    margin: 3rem 10rem 2rem 2rem;
    /* padding: 0 0 2rem 10rem; */
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 2.5rem;
    color: whitesmoke; 
`

const P1 = styled.p `
    margin: 1rem 10rem 1rem 1rem;
    /* padding: 0 0 2rem 10rem; */
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;  
    color: whitesmoke;
`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 3.5rem;
    color: whitesmoke; 
    margin: 2rem;
`
export default Projects;