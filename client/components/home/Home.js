import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './home.scss';
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Alert } from 'reactstrap';

class Home extends React.Component {
	constructor(props) {
    super(props);
		if(props.location.state && props.location.state.alert_message)
			this.state = { visible: true, alert_message: props.location.state.alert_message };
		else
			this.state = { visible: false, alert_message: '' };

		this.onDismiss = this.onDismiss.bind(this);
  }
	//hanele alert toggle
	onDismiss() {
    this.setState({ visible: false });
  }

	render() {
	  return (
				<Container>
	      	<Row>
		        <Col>
							<Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>{this.state.alert_message}</Alert>
							<Jumbotron>
								<center>
									<h1 className="display-4">Welcome to ActivityLab!</h1>
								</center>
				        <p className="lead">
									ActivityLab is a social video annotation challenge in which you can annotate videos based on the activities
									being performed in them and earn badges for your work.
								</p>
								<p className="lead">
									You can then go ahead and challenge your friends to see who can get the most badges faster! All while
									contributing to the fostering of research in computer vision!
								</p>
								<p className="lead">Below is a set of instructions to give you a sense of what is expected:</p>
								<ol className="lead">
									<li>You are to watch a video in which one or more activities are happening.</li>
									<li>
										For each of these activities, select the start and end times in which they happen and select the correct
										label that represents them from the ones presented as specifically as possible. Then click the "Add" button to add
										register the specified segment times with the specified label.
									</li>
									<li>
										If you select either the incorrect label or the incorrect segment times, you can delete the segment by
										clicking on the "Delete" button to the left of the segment you want to delete.
									</li>
									<li>
										Once you have specified all the segments of a video, click the "Submit" button to automatically be taken
										to the next video.
									</li>
									<li>Keep playing so that you can get those achievements!</li>
								</ol>
				        <hr className="my-5" />
				        <p className="lead">
									<Button outline color="primary" size="lg" tag={Link} to="/task">Go!</Button>
				        </p>
				      </Jumbotron>
						</Col>
					</Row>
			</Container>
	  );
	}
}
export default Home;
