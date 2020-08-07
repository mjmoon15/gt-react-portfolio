import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import cats_against_banana_trees_welcome from './cats_against_banana_trees_welcome.png';

class CatsAgainst extends Component {
	render() {
		return (
			<div>
				<Card style={{ width: '18rem' }}>
					<Card.Img
						className="projectCard"
						variant="top"
						src={cats_against_banana_trees_welcome}
						alt="RPS"
					/>
					<Card.Body>
						<Card.Title>Cats Against Banana Trees</Card.Title>
						<Card.Text>
							<div>
								<div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
									<a href="https://catsagainstbananatrees.herokuapp.com">
										Cats Against Banana Trees can be accessed here.
									</a>
									<br />

									<a href="https://github.com/mjmoon15/cats-against-bananahammocks">
										The Cats Against Banana Trees github repo can be accessed
										here.
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

export default CatsAgainst;
