import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'reactstrap';


class Segments extends React.Component {
	constructor(props) {
		super(props);
		//this.handleClick = this._handleClick.bind(this)
	}
	_handleClick(e) {
    //this.props.onTimeSet(this.props.type);
  }


  render() {
		const prop = this.props;
    return (
							<ListGroup>
								{prop.annotations.map((seg) =>
					        <ListGroupItem key={seg.id}>
										{seg.label} {seg.segment[0]}sec ~ {seg.segment[1]}sec
									</ListGroupItem>
					      )}
							</ListGroup>
					 );
  }
}
export default Segments;
