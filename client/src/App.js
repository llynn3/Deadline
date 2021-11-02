import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./screens/Home";
import Login from "./screens/Login";
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Nav />
      <Switch>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;