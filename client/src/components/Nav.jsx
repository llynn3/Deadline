import './Nav.css';
import { logout } from "../services";
import { Link } from "react-router-dom";
import pawprint from "../images/small-blue-paw-print.jpeg";

const Nav = (props) => {
  const handleClick = async () => {
    await logout();
    props.setUser(null);
  }

  return (
    <nav>
      <div className="nav-bar">
        <img src={pawprint} alt="pawprint" height="45" />
      <Link to="/home">Home
      {/* <h4 style={{color: "#4895ef"}}>{user.username}!</h4> */}
      </Link>
      {props.user ? (
        <>
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