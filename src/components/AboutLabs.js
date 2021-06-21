import styled from 'styled-components'
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