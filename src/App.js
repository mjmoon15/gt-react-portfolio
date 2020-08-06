import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './containers/header';
import About from './containers/about';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Footer from './containers/footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<Switch>
						<Route exact path="/" component={About}>
							<About />
						</Route>
						<Route exact path="/about" component={About}>
							<About />
						</Route>
						<Route exact path="/portfolio" component={Portfolio}>
						<Portfolio />
            </Route>
						<Route exact path="/contact" component={Contact}>
							<Contact />
						</Route>
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
