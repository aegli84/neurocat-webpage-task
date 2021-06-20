import Navbar from '../components/NavbarLogin'
//import About from '../components/AboutNeurocat';
//import styled from 'styled-components';
import ParticlesBackground from '../components/ParticlesBackground'
import Sections from '../components/Log';

const Login = () => {
    return (
        <>
        <ParticlesBackground/>
        <div>
            <Navbar/> 
            <Sections/>
            </div>
        </>
    )
}

export default Login;