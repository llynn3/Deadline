import dogslooking from "../images/dogslooking.jpeg";
import dogbanner from "../images/dogbanner.jpg";
import dogslookingover from "../images/dog-banner-looking-over.jpg";
import './Landing.css';

const Landing = () => {
    return (
        <div>
            <img className="banner" src={dogslookingover} alt="banner" height="300" width="1000" />
            <p className="landing-page">Welcome to Pawprint!</p><br/>
            <p className="description">Designed to interact with other dog owners and share your own content of your furry loved ones.</p>
            <img clasName="dogs-looking" src={dogslooking} alt="dogslooking"/>
        </div>
    );
};

export default Landing;