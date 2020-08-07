import React, { Component } from 'react';
import dailyPlannerPic from './dailyPlanner.png';
import { Card } from 'react-bootstrap';

class DailyPlanner extends Component {
	render() {
		return (
			<div>
					<Card style={{ width: '18rem' }}>
						<Card.Img
							className="projectCard"
							variant="top"
							src={dailyPlannerPic}
							alt="RPS"
						/>
						<Card.Body>
							<Card.Title>Daily Planner</Card.Title>
							<Card.Text>
								<div>
									<div
										class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
										//style="height: 130em"
									>
										<a href="https://mjmoon15.github.io/gt-daily-planner/">
											The Daily Planner can be accessed here.
										</a>
										<br />

										<a href="https://github.com/mjmoon15/gt-daily-planner">
											The Daily Planner github repo can be accessed here.
										</a>
									</div>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
			</div>
		);
	}
}

export default DailyPlanner;
