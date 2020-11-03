import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Photo from './pages/Photo'
import Tags from './pages/Tags'
import Contact from './pages/Contact'
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'
function App() {
  return (
    <div className="app global-bg">

      <Router>
        <Header></Header>
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/photos" component={Photo}></Route>
          <Route path="/tags" component={Tags}></Route>
          <Route path="/contact" component={Contact}></Route>
        </div>
        
      </Router>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
