import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button } from 'reactstrap';
import { Badge } from 'reactstrap';

class Segments extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this._handleClick.bind(this)
	}
	_handleClick(id) {
  	this.props.onSegmentDelete(id);
  }


  render() {
		const prop = this.props;
    return (
							<ListGroup>
								{prop.annotations.map((seg) =>
					        <ListGroupItem key={seg.id}>
										<Button outline color="danger" className="mr-3" onClick={()=>this.handleClick(seg.id)}>Delete</Button>
										<Badge color="secondary">{seg.label.split("/")[seg.label.split("/").length - 1]}</Badge> {seg.segment[0].toFixed(3)} sec ~ {seg.segment[1].toFixed(3)} sec
									</ListGroupItem>
					      )}
							</ListGroup>
					 );
  }
}
export default Segments;
