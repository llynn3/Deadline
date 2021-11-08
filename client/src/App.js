import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./screens/Landing";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Posts from "./screens/Posts";
import PostDetails from "./screens/PostDetails";
import EditPost from "./screens/EditPost";
import AddPost from "./screens/AddPost";
import Footer from "./screens/Footer";
import './App.css';
import './components/Nav.css';

function App() {
  const [user, setUser] = useState(null);
  // console.log(user)

  return (
    <div className="App">
      <Switch>
        <main>
          <Route exact path="/">
            <Nav user={user} setUser={setUser} />
            {/* <Landing /> */}
          </Route>
          <Route path="/home">
            <Nav user={user} />
            <Home />
          </Route>
          <Route path="/login">
          <Nav user={user} />
            <Login setUser={setUser} />
          </Route>
          <Route path="/register">
            <Nav user={user} />
            <Register setUser={setUser} />
          </Route>
          <Route exact path="/posts">
            <Nav user={user} />
            <Posts user={user} setUser={setUser} />
          </Route>
          <Route path="/new">
          <Nav user={user} />
            <AddPost />
          </Route>
          <Route path="/comments/:id">
            <Nav user={user} />
            <PostDetails user={user} setUser={setUser}/>
          </Route>
          <Route path="/posts/edit/:id">
            <Nav user={user} />
            <EditPost user={user} setUser={setUser} />
          </Route>
          <Footer />
        </main>
      </Switch>
    </div>
  );
}

export default App;