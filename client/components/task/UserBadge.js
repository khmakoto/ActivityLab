import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Badge } from 'reactstrap';

class UserBadge extends React.Component {
  render() {
    return (
							<div>
								<Badge color="primary">You beat 40% users</Badge>
								<Badge color="danger">Today's MVP</Badge>
								<Badge color="success">102 achievements</Badge>
							</div>
						);
  }
}

export default UserBadge;
