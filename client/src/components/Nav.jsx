import './Nav.css';
import { logout } from "../services";

import { Link } from "react-router-dom";

const Nav = () => {
  const handleClick = async (e) => {
    e.preventDefault();
    await logout();
  }

  return (
    <nav>
      <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/login" >Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/new">New Post</Link>
      <button onClick={handleClick}>Log out</button>
      </div>
    </nav>
  );
};

export default Nav;