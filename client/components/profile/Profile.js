const port = process.env.PORT
const domain = process.env.DOMAIN
const host = process.env.NODE_ENV == 'production'? `${domain}` : `${domain}:${port}`

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Alert } from 'reactstrap';
import YouTube from 'react-youtube';

// Import images
import OneAnnotationBadge from '../../../images/OneAnnotationBadge.png';
import OneAnnotationBadgeDisabled from '../../../images/OneAnnotationBadgeDisabled.png';
import TenAnnotationsBadge from '../../../images/TenAnnotationsBadge.png';
import TenAnnotationsBadgeDisabled from '../../../images/TenAnnotationsBadgeDisabled.png';
import TwentyAnnotationsBadge from '../../../images/TwentyAnnotationsBadge.png';
import TwentyAnnotationsBadgeDisabled from '../../../images/TwentyAnnotationsBadgeDisabled.png';
import FiftyAnnotationsBadge from '../../../images/FiftyAnnotationsBadge.png';
import FiftyAnnotationsBadgeDisabled from '../../../images/FiftyAnnotationsBadgeDisabled.png';
import OneSportsBadge from '../../../images/OneSportsBadge.png';
import OneSportsBadgeDisabled from '../../../images/OneSportsBadgeDisabled.png';
import TenSportsBadge from '../../../images/TenSportsBadge.png';
import TenSportsBadgeDisabled from '../../../images/TenSportsBadgeDisabled.png';
import TwentySportsBadge from '../../../images/TwentySportsBadge.png';
import TwentySportsBadgeDisabled from '../../../images/TwentySportsBadgeDisabled.png';
import FiftySportsBadge from '../../../images/FiftySportsBadge.png';
import FiftySportsBadgeDisabled from '../../../images/FiftySportsBadgeDisabled.png';

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
				<Container style={{marginTop: 50 + 'px'}}>
					<Row>
						<Col>
							<h1>BADGES</h1>
						</Col>
					</Row>
					<Row style={{marginTop: 15 + 'px'}}>
						<Col>
							<center>
								<img height="100px" src={OneAnnotationBadge} />
								<p>Annotated your first video.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TenAnnotationsBadge} />
								<p>Annotated ten videos.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TwentyAnnotationsBadge} />
								<p>Annotated ten videos.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={FiftyAnnotationsBadgeDisabled} />
								<p>Annotated fifty videos.</p>
							</center>
						</Col>
					</Row>
					<Row style={{marginTop: 15 + 'px'}}>
						<Col>
							<center>
								<img height="100px" src={OneSportsBadge} />
								<p>Annotated your first video.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TenSportsBadge} />
								<p>Annotated ten videos.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TwentySportsBadgeDisabled} />
								<p>Annotated ten videos.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={FiftySportsBadgeDisabled} />
								<p>Annotated fifty videos.</p>
							</center>
						</Col>
					</Row>
				</Container>
			</div>
	  );
	}
}
export default Profile;
