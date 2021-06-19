import {motion} from 'framer-motion'
import { useState } from 'react'

const Toggle = ({children}) => {

    const [show, setShow] = useState(false);

    return (
        <motion.div  className = "eye" onClick={() => setShow(!show)}>
            {show ? children : ''}
        </motion.div>
    )
}



export default Toggle;
