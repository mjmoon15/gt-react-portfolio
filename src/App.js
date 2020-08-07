import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './containers/Header/header';
import About from './containers/About/about';
import Portfolio from './containers/Portfolio/portfolio';
import Contact from './containers/Contact/contact';
import Footer from './containers/Footer/footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div>
					<Header />
					<Switch>
						<Route exact path='/' component={About}>
							<About />
						</Route>
						<Route exact path='/about' component={About}>
							<About />
						</Route>
						<Route exact path='/portfolio' component={Portfolio}>
							<Portfolio />
						</Route>
						<Route exact path='/contact' component={Contact}>
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
