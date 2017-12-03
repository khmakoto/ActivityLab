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
    return (	<div className="d-flex flex-row">
								<div className="p-2">
									<Button outline color="primary" onClick={this.handleClick} >Set {this.props.type} time</Button>
								</div>
								<div className="p-2">{this.props.type} at: {this.props.time && <span>{this.props.time}</span>} sec</div>
							</div>
					 );
  }
}
export default TimeButton;
