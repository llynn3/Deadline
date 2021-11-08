import './Nav.css';
import { logout } from "../services";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const handleClick = async () => {
    await logout();
    props.setUser(null);
  }

  return (
    <nav>
      <div className="nav-bar">
      <Link to="/">Home
      {/* <h4 style={{color: "#4895ef"}}>{user.username}!</h4> */}
      </Link>
      {props.user ? (
        <>
        <Link to="/posts">Posts</Link>
        <Link to="/new">New Post</Link>
        <button onClick={handleClick}>Log out</button>
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