import welcome from "../images/pupeyes.jpeg";
import './Home.css';

const Home = (props) => {


  return (
    <section className="home">
      <img className="dog-sign" src={welcome} alt="welcome"/>
      Welcome home 
      <p>{props.user}</p>
    </section>
  );
};

export default Home;