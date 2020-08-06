import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
	return (
		<div className="App"> 
		<div className="navigation">
		  <div className="navigation-sub">
			<Link to="/about" className="item">About Me</Link>
			<Link to="/portfolio" className="item">Portfolio</Link>
			<Link to="/contact" className="item">Contact</Link>
		  </div>
		</div>
	  </div>
	);
};

export default header;