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
import OneFoodsBadge from '../../../images/OneFoodsBadge.png';
import OneFoodsBadgeDisabled from '../../../images/OneFoodsBadgeDisabled.png';
import TenFoodsBadge from '../../../images/TenFoodsBadge.png';
import TenFoodsBadgeDisabled from '../../../images/TenFoodsBadgeDisabled.png';
import TwentyFoodsBadge from '../../../images/TwentyFoodsBadge.png';
import TwentyFoodsBadgeDisabled from '../../../images/TwentyFoodsBadgeDisabled.png';
import FiftyFoodsBadge from '../../../images/FiftyFoodsBadge.png';
import FiftyFoodsBadgeDisabled from '../../../images/FiftyFoodsBadgeDisabled.png';
import OneSportsBadge from '../../../images/OneSportsBadge.png';
import OneSportsBadgeDisabled from '../../../images/OneSportsBadgeDisabled.png';
import TenSportsBadge from '../../../images/TenSportsBadge.png';
import TenSportsBadgeDisabled from '../../../images/TenSportsBadgeDisabled.png';
import TwentySportsBadge from '../../../images/TwentySportsBadge.png';
import TwentySportsBadgeDisabled from '../../../images/TwentySportsBadgeDisabled.png';
import FiftySportsBadge from '../../../images/FiftySportsBadge.png';
import FiftySportsBadgeDisabled from '../../../images/FiftySportsBadgeDisabled.png';
import OneSocialBadge from '../../../images/OneSocialBadge.png';
import OneSocialBadgeDisabled from '../../../images/OneSocialBadgeDisabled.png';
import TenSocialBadge from '../../../images/TenSocialBadge.png';
import TenSocialBadgeDisabled from '../../../images/TenSocialBadgeDisabled.png';
import TwentySocialBadge from '../../../images/TwentySocialBadge.png';
import TwentySocialBadgeDisabled from '../../../images/TwentySocialBadgeDisabled.png';
import FiftySocialBadge from '../../../images/FiftySocialBadge.png';
import FiftySocialBadgeDisabled from '../../../images/FiftySocialBadgeDisabled.png';
import OneCareBadge from '../../../images/OneCareBadge.png';
import OneCareBadgeDisabled from '../../../images/OneCareBadgeDisabled.png';
import TenCareBadge from '../../../images/TenCareBadge.png';
import TenCareBadgeDisabled from '../../../images/TenCareBadgeDisabled.png';
import TwentyCareBadge from '../../../images/TwentyCareBadge.png';
import TwentyCareBadgeDisabled from '../../../images/TwentyCareBadgeDisabled.png';
import FiftyCareBadge from '../../../images/FiftyCareBadge.png';
import FiftyCareBadgeDisabled from '../../../images/FiftyCareBadgeDisabled.png';
import OneHouseholdBadge from '../../../images/OneHouseholdBadge.png';
import OneHouseholdBadgeDisabled from '../../../images/OneHouseholdBadgeDisabled.png';
import TenHouseholdBadge from '../../../images/TenHouseholdBadge.png';
import TenHouseholdBadgeDisabled from '../../../images/TenHouseholdBadgeDisabled.png';
import TwentyHouseholdBadge from '../../../images/TwentyHouseholdBadge.png';
import TwentyHouseholdBadgeDisabled from '../../../images/TwentyHouseholdBadgeDisabled.png';
import FiftyHouseholdBadge from '../../../images/FiftyHouseholdBadge.png';
import FiftyHouseholdBadgeDisabled from '../../../images/FiftyHouseholdBadgeDisabled.png';

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
								<p>Annotated twenty videos.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={FiftyAnnotationsBadge} />
								<p>Annotated fifty videos.</p>
							</center>
						</Col>
					</Row>
					<Row style={{marginTop: 15 + 'px'}}>
						<Col>
							<center>
								<img height="100px" src={OneFoodsBadge} />
								<p>Annotated your first video in the "Eating and Drinking Activities" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TenFoodsBadgeDisabled} />
								<p>Annotated ten videos in the "Eating and Drinking Activities" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TwentyFoodsBadgeDisabled} />
								<p>Annotated twenty videos in the "Eating and Drinking Activities" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={FiftyFoodsBadgeDisabled} />
								<p>Annotated fifty videos in the "Eating and Drinking Activities" category.</p>
							</center>
						</Col>
					</Row>
					<Row style={{marginTop: 15 + 'px'}}>
						<Col>
							<center>
								<img height="100px" src={OneSportsBadge} />
								<p>Annotated your first video in the "Sports, Exercise and Recreation" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TenSportsBadge} />
								<p>Annotated ten videos in the "Sports, Exercise and Recreation" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TwentySportsBadgeDisabled} />
								<p>Annotated twenty videos in the "Sports, Exercise and Recreation" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={FiftySportsBadgeDisabled} />
								<p>Annotated fifty videos in the "Sports, Exercise and Recreation" category.</p>
							</center>
						</Col>
					</Row>
					<Row style={{marginTop: 15 + 'px'}}>
						<Col>
							<center>
								<img height="100px" src={OneSocialBadge} />
								<p>Annotated your first video in the "Socializing, Relaxing and Leisure" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TenSocialBadge} />
								<p>Annotated ten videos in the "Socializing, Relaxing and Leisure" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TwentySocialBadge} />
								<p>Annotated twenty videos in the "Socializing, Relaxing and Leisure" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={FiftySocialBadgeDisabled} />
								<p>Annotated fifty videos in the "Personal Care" category.</p>
							</center>
						</Col>
					</Row>
					<Row style={{marginTop: 15 + 'px'}}>
						<Col>
							<center>
								<img height="100px" src={OneCareBadge} />
								<p>Annotated your first video in the "Personal Care" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TenCareBadge} />
								<p>Annotated ten videos in the "Personal Care" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TwentyCareBadgeDisabled} />
								<p>Annotated twenty videos in the "Personal Care" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={FiftyCareBadgeDisabled} />
								<p>Annotated fifty videos in the "Personal Care" category.</p>
							</center>
						</Col>
					</Row>
					<Row style={{marginTop: 15 + 'px', marginBottom: 15 + 'px'}}>
						<Col>
							<center>
								<img height="100px" src={OneHouseholdBadge} />
								<p>Annotated your first video in the "Household Activities" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TenHouseholdBadgeDisabled} />
								<p>Annotated ten videos in the "Household Activities" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={TwentyHouseholdBadgeDisabled} />
								<p>Annotated twenty videos in the "Household Activities" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={FiftyHouseholdBadgeDisabled} />
								<p>Annotated fifty videos in the "Household Activities" category.</p>
							</center>
						</Col>
					</Row>
				</Container>
			</div>
	  );
	}
}
export default Profile;
