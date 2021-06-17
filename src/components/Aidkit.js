import aidkit from '../assets/aidkit.png'
import test from '../assets/test.png'
import add from '../assets/add.png'
import why from '../assets/why.png'
import customers from '../assets/customers.png'
import robust from '../assets/robust.png'
import functionality from '../assets/functionality.png'
import explain from '../assets/explain.png'
import faq from '../assets/faq.png'
import Video from '../components/Video'
import Form from '../components/Form'

const Aidkit = () => {
    return (
        <>
        <div id = "aidkit">
        <img src={aidkit} alt="people" />
            <h2>aidkit and how it can help companies</h2>
            <p>
                Save time, money and stress during your AI analysis by using the biggest collection of optimization, vulnerability detection and debugging tools
            </p>
        </div>
        <div id = "aidkit">
        <h2>Aidkit explained</h2>
            <Video embedId="GdVPn0mQp2k"/>
        </div>

        <div>
        <img src={test} alt="people" />
            <h2>Tesbed & Monitor</h2>
        </div>
        <div>
            <h2>AddOn Protect & Explain</h2>
            <img src={add} alt="people" />
        </div>
        <div>
            <h2>Why choose aidkit</h2>
            <img src={why} alt="people" />
        </div>
        <div id = "approach">
            <h3>Features of aidkit: </h3>
            <h3>Functionality</h3>
            <img src={functionality} alt="people" />
            <h3>Explainability</h3>
            <img src={explain} alt="people" />
            <h3>Robustness</h3>
            <img src={robust} alt="people" />
        </div>
        <div>
            <h2>How does it work</h2>
            <img src={add} alt="people" />
        </div>
        <div>
            <h2>Current Customers</h2>
            <img src={customers} alt="people" />
        </div>
        
        <div id = "pricing">
            <h2>Pricing</h2>
                <Form/>     
        </div>

        <div>
            <h2>FAQ</h2>
            <img src={faq} alt="people" />
        </div>
        </>
    )
}

export default Aidkit;