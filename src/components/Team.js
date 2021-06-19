import team from '../assets/team.jpg'
import styled from 'styled-components'

const Team = () => {
    return (
        <>
        <Div>
        <Card className = "team" id = "team">
        <img src={team} alt="people" />
        <div>
            <H2>Our Team</H2>
            <P>
                Our team of 25 mathematicians, computer scientists and industrial engineers brings together the best of both worlds, combining academic with application perspectives and experiences. 
            </P>
            <P>
                With different backgrounds, skill sets and a unifying desire to grow, learn and understand the world through modern technology our team is the essence of neurocat.
            </P> 
            <P>
                We are based in the innovation and business incubator Berlin-Adlershof which gives us, together with its close proximity to the Humboldt-University of Berlin, the opportunity to build a strong network of like-minded people.
            </P>
            </div>
        </Card>
        </Div>
        </>
    )
}

const Div = styled.div `
    margin-top: 15rem;
`

const Card = styled.div `
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100vw;
    height: 80vh;
    box-shadow: 1px 3px 32px -7px rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius:10px;
    text-align: center;
    margin: 7rem;
    overflow: hidden;
    img {
        height: 80vh;
        width: 47vw;
        
    }
`
const H2 = styled.h3 `
    /* padding: 0 0 2rem 10rem; */
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    color: whitesmoke; 
    padding-top: 4rem;
    margin-right: 8rem;
    margin-bottom: 1rem;
`
const P = styled.p `
    /* margin: 1rem 5rem 1rem 14rem; */
    /* padding: 0 0 2rem 10rem; */
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;  
    color: whitesmoke;
    padding: 1.2rem;
    margin-right: 8rem;
`
export default Team;