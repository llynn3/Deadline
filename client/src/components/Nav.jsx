import './Nav.css';
import { logout } from "../services";
import { Link, useHistory } from "react-router-dom";
import pawprint from "../images/small-blue-paw-print.jpeg";

const Nav = (props) => {
  const history = useHistory();

  const handleClick = async () => {
    await logout();
    props.setUser(null);
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-bar">
        <Link to="/">
        <img src={pawprint} alt="pawprint" height="45" />
        </Link>
      {props.user ? (
        <>
      <Link to="/home">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/new">New Post</Link>
        <button className="logout-button" onClick={handleClick}>Log out</button>
        </>
      ) : (
        <>
      <Link to="/register">Register</Link>
      <Link to="/login" >Login</Link>
      </>)}
      </div>
    </nav>
  );
};

export default Nav;