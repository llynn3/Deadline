import { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../services";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      username,
      password,
    };
    const user = await login(userInfo);
    props.setUser(user);
    history.push("/home")
  };

  return (
    <section>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in!</button>
      </form>
    </section>
  );
};

export default Login;