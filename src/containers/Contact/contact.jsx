import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './contact.css';
import IMG_0665 from './IMG_0665.jpeg'


const contact = () => {
	return (
		<div className="main">
			<Container fluid>
				<Row>
					<Col>
						<div className="row">
							<div className="col-sm-4">
								<div className="card">
									<div className="card-body">
										<h5 className="card-title">Contact Me</h5>
										<a href="https://github.com/mjmoon15">
											Mark's github profile can be accessed here.
										</a>
										<br />
										<br />
										<a href="https://www.linkedin.com/in/mark-mooney-5588a350/">
											Mark's LinkedIn profile can be accessed here.
										</a>
										<br />
										<br />
										<a href="https://github.com/mjmoon15/gt-bootstrap-portfolio/blob/master/Resume-Mark-Mooney.pdf">
											Mark's resume can be accessed here.
										</a>
										<br />
										<br />
										<p>
											<a href="mailto:mjmoon15@gmail.com">Send me email</a>
										</p>
										<br />
										<br />
										<p>Want to chat? Call me at 770-361-6366.</p>
									</div>
								</div>
							</div>
							<div className="col-sm-8">
							<img 
							src={IMG_0665}
							alt='Hold your breath'
							className='breath'
							></img>
								
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default contact;
