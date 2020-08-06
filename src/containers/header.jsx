import React, { Component } from 'react';
import { Link } from "react-router-dom";

class header extends Component {
	render() {
		return (
			<div>
				<div className="container">
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<Link className="navbar-brand" href="/">
							Mark Mooney
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item active">
								<Link to="/about" className="item">About Me</Link>
								</li>
								<li className="nav-item">
								<Link to="/portfolio" className="item">Portfolio</Link>
								</li>
								<li className="nav-item">
								<Link to="/contact" className="item">Contact</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
			</div>
		);
	}
}

export default header;