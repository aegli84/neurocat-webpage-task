import styled from 'styled-components'
// import Cases from '../components/Cases'
// import Publications from '../components/Publications'
// import PaperCuts from '../components/PaperCuts'
// import News from '../components/News'
import NeuroLabs from './NeuroLabs'
import NeuroServices from './NeuroServices'
import NeuroProjects from './NeuroProjects'

const Lab = () => {
    return (
        <div>
            <Div>
            <div id = "cases">
                <NeuroLabs/>
            </div> 
            <div id="public">
                <NeuroServices/>
               
            </div>
            <div id="paper">
                <NeuroProjects/>
                
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

export default Lab;