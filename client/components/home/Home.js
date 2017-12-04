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
				        <h1 className="display-3">Hello, Challenger!</h1>
				        <p className="lead">This is a social annotation challenge.</p>
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
