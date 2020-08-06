import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const about = () => {
	return (
		<div className="main">
			<Container fluid>
				<Row>
					<Col>
						<div className="container" id="aboutMe">
							<img
								src="./Assets/IMG_0558.jpg"
								class="img-fluid"
								className="float:left"
								id="mustache"
								alt="Mustaches are great"
							/>
							<p>
								Mark Mooney is a full-stack developer using MySql, Express,
								React.js, and Node.js to build responsive web applications to
								suit your goals.
								<br />
								<br />
								Mark earned a BS in Anthropology and a Masters of Historic
								Preservation from the University of Georgia, as well as
								completing the Siebel Institute of Brewing Technology's Advanced
								Brewing Theory Program. He's eager to learn and fill an
								impactful and positive role on any project.
								<br />
								<br />
								Mark spends his free time with his wife Liz and dog Zoe. He's a
								passionate cook and baker, a commercial river guide, and will be
								a dad soon!
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default about;
