import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Posts from "./screens/Posts";
import AddPost from "./screens/AddPost";
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} />
      <Switch>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/register">
            <Register setUser={setUser} />
          </Route>
          <Route path="/posts">
            <Posts user={user} setUser={setUser} />
          </Route>
          <Route path="/new">
            <AddPost />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;