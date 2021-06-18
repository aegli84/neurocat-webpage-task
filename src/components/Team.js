import team from '../assets/team.jpg'


const Team = () => {
    return (
        <>
        <div className = "team" id = "team">
            <h2>Our Team</h2>
            <p>
                Our team of 25 mathematicians, computer scientists and industrial engineers brings together the best of both worlds, combining academic with application perspectives and experiences. With different backgrounds, skill sets and a unifying desire to grow, learn and understand the world through modern technology our team is the essence of neurocat. We are based in the innovation and business incubator Berlin-Adlershof which gives us, together with its close proximity to the Humboldt-University of Berlin, the opportunity to build a strong network of like-minded people.
            </p>
            <img src={team} alt="people" />
        </div>
        </>
    )
}

export default Team;