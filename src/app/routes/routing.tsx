import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutUs from "../components/about-us/AboutUs";
import Crud from "../components/crud/Crud";
import Tasks from "../components/tasks/Tasks";


export default function Routing() {
  return (
    
      <div>
        <nav>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul> */}
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Crud} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/tasks" component={Tasks} />
        </Switch>
      </div>
    
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About Us</h2>;
}
