import { Link } from "react-router-dom";
import { arrow } from "../assets/icons/";

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
);

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I'm <span className="font-semibold">Barna</span> 👋
            <br />
            A Software Engineer based in London
        </h1>
    ),
    2: (
        <InfoBox
            text={
                <p>
                    Worked with various companies <br />
                    and gathered many skills along the way
                </p>
            }
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text={
                <p>
                    Guiding projects to success has been a thrilling journey. <br />
                    Curious about the impact?
                </p>
            }
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text={
                <p>
                    Need a project done or looking for a dev? <br />
                    I'm just a few keystrokes away!
                </p>
            }
            link="/contact"
            btnText="Let's talk"
        />
    ),
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;