import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/new">New Post</Link>
    </nav>
  );
};

export default Nav;