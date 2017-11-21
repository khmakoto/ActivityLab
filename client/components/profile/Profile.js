import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
class Home extends React.Component {
	constructor(props) {
    super(props);
  }
	render() {
	  return (
			<div>
				<Container>
					 <Row>
							<Col>
							 <h1>Profile</h1>
						 </Col>
					</Row>

				</Container>
			</div>
	  );
	}
}
export default Home;
