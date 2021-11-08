import './Nav.css';
import { logout } from "../services";
import { Link } from "react-router-dom";

const Nav = () => {
  const handleClick = async () => {
    await logout();
    props.setUser(null);
  }

  return (
    <nav>
      <div className="nav-bar">
      <Link to="/">Home</Link>
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