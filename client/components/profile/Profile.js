const port = process.env.PORT
const domain = process.env.DOMAIN
const host = process.env.NODE_ENV == 'production'? `${domain}` : `${domain}:${port}`

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Alert } from 'reactstrap';
class Profile extends React.Component {
	constructor(props) {
    super(props);
		this.state = {user: null};
  }

	componentDidMount() {
		fetch(`${host}/api/users/me`, {credentials: 'include'})
			.then( res => res.json())
			.then( res => {
				this.setState({user: res});
		});
	}



	render() {

		const user = this.state.user;

		if (!user) {
      return <div><Alert color="light">Loading</Alert></div>
    }

	  return (
			<div>
				<Container>
					 <Row>
							<Col>
							 <h1>PROFILE</h1>
						 </Col>
					</Row>

					<Row>
						<Col>
							{user.facebook.name}
							<br/>
							{user.facebook.email}
						</Col>
				 </Row>
				</Container>
			</div>
	  );
	}
}
export default Profile;
