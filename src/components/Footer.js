import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div>
                <h4>Address</h4>
                    <p>
                        IGZ Berlin-Adlershof
                        Rudower Chaussee 29
                        12489 Berlin
                        Germany
                    </p>
                <h4>Email</h4>
                    <p>
                        meow@neurocat.ai
                    </p>
                    <h4>Phone</h4>
                    <p>+49 (0) 30 340 65 918</p>
                    <p>Skype: neurocat GmbH</p>
            </div>
            <div>
                <h4>Social Media</h4>
                    <a href="https://www.google.com/search?q=facebook&oq=facebook&aqs=chrome..69i57j35i39j0i67l7.1345j0j15&sourceid=chrome&ie=UTF-8"><FaFacebook/></a>
                    <a href="https://www.google.com/search?q=facebook&oq=facebook&aqs=chrome..69i57j35i39j0i67l7.1345j0j15&sourceid=chrome&ie=UTF-8"><FaLinkedin/></a>
                    <a href="https://www.google.com/search?q=facebook&oq=facebook&aqs=chrome..69i57j35i39j0i67l7.1345j0j15&sourceid=chrome&ie=UTF-8"><FaYoutube/></a>
            </div>
            <div>
                <button>Contact Form</button>
            </div>
        </>
    )
}

export default Footer;