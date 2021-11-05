import './Nav.css';

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-bar">
      <Link to="/" style={{ color: '#000000' }}>Home</Link>
      <Link to="/login" style={{ color: '#000000' }}>Login</Link>
      <Link to="/register" style={{ color: '#000000' }}>Register</Link>
      <Link to="/posts" style={{ color: '#000000' }}>Posts</Link>
      <Link to="/new" style={{ color: '#000000' }}>New Post</Link>
      </div>
    </nav>
  );
};

export default Nav;