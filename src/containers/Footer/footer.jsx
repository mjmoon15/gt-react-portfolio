import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'

const footer = () => {
	return (
		<div className="footer">
			<Container fluid>
				<Row>
					<Col>
                    <p>&#169; Mark Mooney</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default footer;
