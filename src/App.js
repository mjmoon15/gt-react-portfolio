import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './containers/header'
import About from './containers/about'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'
import Footer from './containers/footer'

function App() {
  return (
    <Router>
    <div>
      
        <Header />
        
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
       
        <Footer />
      
    </div>
  </Router>
  );
}

export default App;
