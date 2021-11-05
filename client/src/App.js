import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Posts from "./screens/Posts";
import PostDetails from "./screens/PostDetails";
import EditPost from "./screens/EditPost";
import AddPost from "./screens/AddPost";
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  // console.log(user)

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
          <Route exact path="/posts">
            <Posts user={user} setUser={setUser} />
          </Route>
          <Route path="/new">
            <AddPost />
          </Route>
          <Route path="/comments/:id">
            <PostDetails user={user} setUser={setUser}/>
          </Route>
          <Route path="/posts/edit/:id">
            <EditPost user={user} setUser={setUser} />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;