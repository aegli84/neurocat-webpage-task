import Navbar from '../components/NavbarLabs'
//import About from '../components/AboutNeurocat';
//import styled from 'styled-components';
import ParticlesBackground from '../components/ParticlesBackground'
import Lab from '../components/AboutLabs'

const Labs = () => {
    return (
        <>
        <ParticlesBackground/>
        <div>
            <Navbar/> 
            <Lab/>
            </div>
        </>
    )
}

export default Labs;