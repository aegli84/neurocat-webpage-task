import styled from 'styled-components'
import Slider from '../components/Slider'
const NeuroServices = () => {
    return (
        <div>
            <Div id = "service">
                <H2>neurocat lab services</H2>
            <Slider/>
            </Div>
            
        </div>
    )
}

const Div = styled.div `
    text-align: center;
    color: whitesmoke;
    margin-bottom: 5rem;

`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: whitesmoke; 
    padding-top: 5rem;
    margin-bottom: 4rem;
`
export default NeuroServices;