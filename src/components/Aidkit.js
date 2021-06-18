import aidkit from '../assets/aidkit.png'
import test from '../assets/test.png'
import why from '../assets/why.png'
import Video from '../components/Video'
import Approach from '../components/Approach'
import add from '../assets/add.png'
import Pricing from './Pricing'
import Faq from '../components/Faq'

const Aidkit = () => {
    return (
        <>
            <section id = "aidkit" >
                <div>
                    <img src={aidkit} alt="people" />
                        <h2>aidkit and how it can help companies</h2>
                        <p>
                            Save time, money and stress during your AI analysis by using the biggest collection of optimization, vulnerability detection and debugging tools
                        </p>
                </div>
                <div>
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
            </section>
            <section id = "approach">
                <Approach/>
            </section>
            <section id="pricing">
                <Pricing/>
            </section>
            <section id="faq">
                <Faq/>
            </section>
        </>
    )
}

export default Aidkit;