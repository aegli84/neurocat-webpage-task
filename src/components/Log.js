import styled from 'styled-components'
import Trust from './DeepTrust'

const Sections = () => {
    return (
        <div>
            <Div>
            <div id = "cases">
                <Trust/>
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


export default Sections;