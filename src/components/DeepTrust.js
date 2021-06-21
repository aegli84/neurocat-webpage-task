import styled from 'styled-components'

const Trust = () => {
    return (
        <div>
        <H2>Why DeepTrust?</H2>
            <Div id = "cases">
            <Card>
                <div>
                    <H4>
                        Seal of Approval
                    </H4>
                </div>
            </Card>
            <Card>
                <div>
                    <H4>
                        Best Protection
                    </H4>
                </div>
            </Card>
            <Card>
                <div>
                    <H4>
                        Competitive Advantage
                    </H4>
                </div>
            </Card>
            <Card>
                <div>
                    <H4>
                        Independent Team
                    </H4>
                </div>
            </Card>
            </Div>
            <Div2>
                <H2>
                    Product
                </H2>
            </Div2>
        </div>
    )
}

const Div = styled.div `
    height: 40vh;
    width: 105vw;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    text-align: center;
    color: whitesmoke;
    margin-top: 4rem;
    margin-bottom: 5rem;
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );

`

const H2 = styled.h2 `
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: whitesmoke; 
    padding-top: 5rem;
    margin-bottom: 4rem;
    text-align: center;
`

const Card = styled.div `
    width: 20vw;
    height: 30vh;
    box-shadow: 1px 3px 32px -7px rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius:10px;
    padding: 4rem;
    margin: 1.5rem;
    background: rgba( 31, 38, 135, 0.37 ); 
    overflow: hidden;
`

const H4 = styled.h4 `
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 2.2rem;
    color: whitesmoke; 
`


const Div2 =styled.div `
    text-align: center;
    background: #3c8893;
    height: 60vh;
    border: 1px solid rgba( 255, 255, 255, 0.20 );
    margin-top: -5rem;
`

export default Trust;