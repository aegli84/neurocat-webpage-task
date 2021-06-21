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


export default Work;