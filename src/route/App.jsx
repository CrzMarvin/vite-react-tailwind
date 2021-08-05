import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from './pages/Home'
// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/home/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/home/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/home/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/mdx">Super Markdown</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/home/:id" children={<Child />} />
          <Route path="/mdx" children={<Home />} />
        </Switch>
      </div>
    </Router>
  );
}

function Child(props) {
  // We can use the `useLocation` hook here to access
  // the dynamic pieces of the URL.
  let res = useLocation();
  console.log('res', res);
  console.log('props', props);
  return (
    <div>
      <h3>ID: {res.id}</h3>
      <div className="relative h-96 w-[900px] border">
        <div className="absolute top-3 left-3 w-48 h-48 rounded-full bg-blue-400 mix-blend-soft-light animate-blob filter blur-xl "></div>
        <div className="absolute top-3 left-24 w-52 h-52 rounded-full bg-yellow-400 mix-blend-soft-light animate-blob filter blur-xl animation-delay-2000"></div>
        <div className="absolute top-10 left-16 w-40 h-40 rounded-full bg-green-400 mix-blend-soft-light animate-blob filter blur-2xl animation-delay-5000"></div>
      </div>
    </div>
  );
}
