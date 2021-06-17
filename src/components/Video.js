import PropTypes from "prop-types";
import styled from 'styled-components';

const Video = ({ embedId }) => (
    <Div className="video-responsive">
        <IFRAME
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    </Div>
);


Video.propTypes = {
    embedId: PropTypes.string.isRequired
    };

const Div = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15vw;
    margin-right: 15vw;
    overflow: hidden;
    padding-bottom: 36.25%;
    position: relative;
    height: 0;
`

const IFRAME = styled.iframe `
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
`
export default Video;