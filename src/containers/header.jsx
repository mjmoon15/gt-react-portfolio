import React, { Component } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

class header extends Component {
	render() {
		return (
			<div>
				<Container fluid>
					<Row>
						<Col>
							<Navbar bg="light" expand="lg">
								<Navbar.Brand href="#/about">Mark Mooney</Navbar.Brand>
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<Navbar.Collapse id="basic-navbar-nav">
									<Nav className="mr-auto">
										<Nav.Link href="#/portfolio">Portfolio</Nav.Link>
										<Nav.Link href="#/contact">Contact</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default header;
