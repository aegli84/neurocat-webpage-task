import customers from '../assets/customers.png'
import robust from '../assets/robust.png'
import functionality from '../assets/functionality.png'
import explain from '../assets/explain.png'
import add from '../assets/add.png'

const Approach = () => {
    return (
        <>
            <div id = "approach">
                <h3>Features of aidkit: </h3>
                <h3>Functionality</h3>
                    <img src={functionality} alt="" />
                <h3>Explainability</h3>
                    <img src={explain} alt="" />
                <h3>Robustness</h3>
                    <img src={robust} alt="" />
            </div>
            <div>
                <h2>How does it work</h2>
                <img src={add} alt="" />
            </div>
            <div>
                <h2>Current Customers</h2>
                <img src={customers} alt="" />
            </div>
        </>
    )
}

export default Approach;