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

		var counts = {"videos": 0, "eating": 0, "sports": 0, "social": 0, "care": 0, "household": 0};
		for (var index in user["annotations"]) {
			var annotation = user["annotations"][index];
			var label = annotation["label"];
			label = label.split("/");
			if (label.length <= 1) {
				label = "Root";
			}
			else {
				label = label[1];
			}

			counts["videos"] += 1;
			if (label == "Eating and drinking Activities") {
				counts["eating"] += 1;
			}
			else if (label == "Sports, Exercise, and Recreation") {
				counts["sports"] += 1;
			}
			else if (label == "Socializing, Relaxing, and Leisure") {
				counts["social"] += 1;
			}
			else if (label == "Personal Care") {
				counts["care"] += 1;
			}
			else if (label == "Household Activities") {
				counts["household"] += 1;
			}
			console.log(counts);
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
								<img height="100px" src={counts["videos"] >= 1 ? OneAnnotationBadge : OneAnnotationBadgeDisabled} />
								<p>Made your first annotation.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["videos"] >= 10 ? TenAnnotationsBadge : TenAnnotationsBadgeDisabled} />
								<p>Made ten annotations.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["videos"] >= 20 ? TwentyAnnotationsBadge : TwentyAnnotationsBadgeDisabled} />
								<p>Made twenty annotations.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["videos"] >= 50 ? FiftyAnnotationsBadge : FiftyAnnotationsBadgeDisabled} />
								<p>Made fifty annotations.</p>
							</center>
						</Col>
					</Row>
					<Row style={{marginTop: 15 + 'px'}}>
						<Col>
							<center>
								<img height="100px" src={counts["eating"] >= 1 ? OneFoodsBadge : OneFoodsBadgeDisabled} />
								<p>Made your first annotation in the "Eating and Drinking Activities" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["eating"] >= 10 ? TenFoodsBadge : TenFoodsBadgeDisabled} />
								<p>Made ten annotations in the "Eating and Drinking Activities" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["eating"] >= 20 ? TwentyFoodsBadge : TwentyFoodsBadgeDisabled} />
								<p>Made twenty annotations in the "Eating and Drinking Activities" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["eating"] >= 50 ? FiftyFoodsBadge : FiftyFoodsBadgeDisabled} />
								<p>Made fifty annotations in the "Eating and Drinking Activities" category.</p>
							</center>
						</Col>
					</Row>
					<Row style={{marginTop: 15 + 'px'}}>
						<Col>
							<center>
								<img height="100px" src={counts["sports"] >= 1 ? OneSportsBadge : OneSportsBadgeDisabled} />
								<p>Made your first annotation in the "Sports, Exercise and Recreation" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["sports"] >= 10 ? TenSportsBadge : TenSportsBadgeDisabled} />
								<p>Made ten annotations in the "Sports, Exercise and Recreation" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["sports"] >= 20 ? TwentySportsBadge : TwentySportsBadgeDisabled} />
								<p>Made twenty annotations in the "Sports, Exercise and Recreation" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["sports"] >= 50 ? FiftySportsBadge : FiftySportsBadgeDisabled} />
								<p>Made fifty annotations in the "Sports, Exercise and Recreation" category.</p>
							</center>
						</Col>
					</Row>
					<Row style={{marginTop: 15 + 'px'}}>
						<Col>
							<center>
								<img height="100px" src={counts["social"] >= 1 ? OneSocialBadge : OneSocialBadgeDisabled} />
								<p>Made your first annotation in the "Socializing, Relaxing and Leisure" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["social"] >= 10 ? TenSocialBadge : TenSocialBadgeDisabled} />
								<p>Made ten annotations in the "Socializing, Relaxing and Leisure" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["social"] >= 20 ? TwentySocialBadge : TwentySocialBadgeDisabled} />
								<p>Made twenty annotations in the "Socializing, Relaxing and Leisure" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["social"] >= 50 ? FiftySocialBadge : FiftySocialBadgeDisabled} />
								<p>Made fifty annotations in the "Personal Care" category.</p>
							</center>
						</Col>
					</Row>
					<Row style={{marginTop: 15 + 'px'}}>
						<Col>
							<center>
								<img height="100px" src={counts["care"] >= 1 ? OneCareBadge : OneCareBadgeDisabled} />
								<p>Made your first annotation in the "Personal Care" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["care"] >= 10 ? TenCareBadge : TenCareBadgeDisabled} />
								<p>Made ten annotations in the "Personal Care" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["care"] >= 20 ? TwentyCareBadge : TwentyCareBadgeDisabled} />
								<p>Made twenty annotations in the "Personal Care" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["care"] >= 50 ? FiftyCareBadge : FiftyCareBadgeDisabled} />
								<p>Made fifty annotations in the "Personal Care" category.</p>
							</center>
						</Col>
					</Row>
					<Row style={{marginTop: 15 + 'px', marginBottom: 15 + 'px'}}>
						<Col>
							<center>
								<img height="100px" src={counts["household"] >= 1 ? OneHouseholdBadge : OneHouseholdBadgeDisabled} />
								<p>Made your first annotation in the "Household Activities" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["household"] >= 10 ? TenHouseholdBadge : TenHouseholdBadgeDisabled} />
								<p>Made ten annotations in the "Household Activities" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["household"] >= 20 ? TwentyHouseholdBadge : TwentyHouseholdBadgeDisabled} />
								<p>Made twenty annotations in the "Household Activities" category.</p>
							</center>
						</Col>
						<Col>
							<center>
								<img height="100px" src={counts["household"] >= 50 ? FiftyHouseholdBadge : FiftyHouseholdBadgeDisabled} />
								<p>Made fifty annotations in the "Household Activities" category.</p>
							</center>
						</Col>
					</Row>
				</Container>
			</div>
	  );
	}
}
export default Profile;
