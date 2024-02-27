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
            Hi, I am <span className="font-semibold">Barna</span> 👋
            <br />
            A Software Engineer based in London.
        </h1>
    ),
    2: (
        <InfoBox
            text="IM SMART (complete this section at HomeInfo.jsx)"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="IVE MADE STUFF"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="HIRE ME"
            link="/contact"
            btnText="Let's talk"
        />
    ),
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;