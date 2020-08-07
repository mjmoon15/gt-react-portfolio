import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DailyPlanner from './dailyPlanner'
import CatsAgainst from './catsAgainst'

const portfolio = () => {
	return (
		<div>
			<Container fluid="md">
				<Row>
					<Col>
						<div className="row">
                            <DailyPlanner />
                            <CatsAgainst />
							
						</div>
                        
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default portfolio;
