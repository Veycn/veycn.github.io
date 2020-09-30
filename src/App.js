import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
function App() {
  return (
    <Router>
      <Route path='/' exact component={Home}></Route>
      <Route path='/about' component={About}></Route>
    </Router>
  );
}

export default App;
