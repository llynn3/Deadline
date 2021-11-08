import welcome from "../images/pupeyes.jpeg";
import './Home.css';

const Home = (props) => {


  return (
    <section className="home">
      <img className="dog-sign" src={welcome} alt="welcome"/><br/>
      Welcome home 
    </section>
  );
};

export default Home;