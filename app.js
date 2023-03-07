import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
            <ul>
              {data.map(item => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
