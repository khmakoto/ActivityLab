import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button } from 'reactstrap';

class Segments extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this._handleClick.bind(this)
	}
	_handleClick(e) {
		console.log(e)
  	//this.props.onTimeSet(this.props.type);
  }


  render() {
		const prop = this.props;
    return (
							<ListGroup>
								{prop.annotations.map((seg) =>
					        <ListGroupItem key={seg.id}>
										<Button outline color="danger" className="mr-3" onClick={this.handleClick(seg.id)}>Delete</Button>
										{seg.label} {seg.segment[0].toFixed(3)} sec ~ {seg.segment[1].toFixed(3)} sec
									</ListGroupItem>
					      )}
							</ListGroup>
					 );
  }
}
export default Segments;
