import Navbar from '../components/NavbarCareer'
import About from '../components/AboutNeurocat';
//import styled from 'styled-components';
import ParticlesBackground from '../components/ParticlesBackground'
import Jobs from '../components/Jobs'

const Career = () => {
    return (
        <>
        <ParticlesBackground/>
        <div>
            <Navbar/> 
           <Jobs/>
            </div>
        </>
    )
}

export default Career;