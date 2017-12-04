import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

class TimeButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this._handleClick.bind(this)
	}
	_handleClick(e) {
    this.props.onTimeSet(this.props.type);
  }
  render() {
    return (	<div className="mb-1">
									<Button outline color="success" onClick={this.handleClick} className="mr-3">Set {this.props.type} time</Button>
									<span>{this.props.type} at: {this.props.time.toFixed(3)} sec</span>
							</div>
					 );
  }
}
export default TimeButton;
