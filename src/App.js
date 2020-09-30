import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header"
function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
