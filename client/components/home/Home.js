import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './home.scss';
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class Home extends React.Component {
	constructor(props) {
    super(props);
  }
	render() {
	  return (
				<Container>
	      	<Row>
		        <Col>
				      <Jumbotron>
				        <h1 className="display-3">Hello, Challenger!</h1>
				        <p className="lead">This is a social annotation challenge.</p>
				        <hr className="my-2" />
				        <p className="lead">
				          <Button color="primary">Play</Button>
				        </p>
				      </Jumbotron>
						</Col>
					</Row>
			</Container>
	  );
	}
}
export default Home;
