import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './task.scss';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Badge } from 'reactstrap';
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.currentPath = "Root";
		this.data = require('../../../data/taxonomyTree.json');
		this.currentTaxonomy = this.data["Root"];
		this.selections = ["Root"];
	}
	
	clickOption(evt) {
		var selectMulti = document.getElementById("exampleSelectMulti");
		var selected = selectMulti.options[selectMulti.selectedIndex].value;
		selectMulti.selectedIndex = 0;

		if (selected != "None") {
			this.currentPath += "/" + selected;
			this.getCurrentTaxonomy();
		}
	}

	getCurrentTaxonomy(current) {
		this.selections = this.currentPath.split("/");
		var tree = this.data;
		for (var i = 0; i < this.selections.length - 1; i++) {
			tree = tree[this.selections[i]];
		}
		if (Object.keys(tree).length == 0) {
			this.currentTaxonomy = tree;
		}
		else {
			this.currentTaxonomy = tree[this.selections[this.selections.length - 1]];
		}
		this.forceUpdate();
	}

	returnSelection(evt) {
		var untilSelection = evt.currentTarget.id;
		var newPath = "";
		for (var i = 0; i < this.selections.length; i++) {
			newPath += this.selections[i];
			if (this.selections[i] == untilSelection) {
				break;
			}
			newPath += "/";
		}
		this.currentPath = newPath;
		this.getCurrentTaxonomy();
	}

	render() {
	    return (
			<div>
				<Container>
					<Row>
						 <Col>
							 <Badge color="primary">You beat 40% users</Badge>
							 <Badge color="danger">Today's MVP</Badge>
							 <Badge color="success">102 achievements</Badge>
							 <span><br /><br /></span>
						</Col>
					</Row>

					 <Row>
							<Col>
								<iframe width="320" height="240" src="https://www.youtube.com/embed/5n7NCViB5TU">
								</iframe><span><br /><br /></span>
							</Col>
					 </Row>

					 <Row>
							<Col>
								<Form>
								<FormGroup>
									<Breadcrumb id="currentPath">
									{
										this.selections.map(selection => (
											<BreadcrumbItem><a id={selection} href="#" onClick={(e) => this.returnSelection(e)}>{selection}</a></BreadcrumbItem>
										))
									}
									</Breadcrumb>
												<Input type="select" name="selectMulti" id="exampleSelectMulti" onChange={(e) => this.clickOption(e)}>
													<option value="None" selected>None</option>
													{
														Object.keys(this.currentTaxonomy).map(key => (
															<option value={key}>{key}</option>
														))
													}
												</Input>
								 </FormGroup>
								 </Form>
								 <Button outline color="primary">Add Label</Button><span><br /><br /></span>

							</Col>
					 </Row>
					 <Row>
							<Col>
								<h5>Segments</h5>
						 </Col>
					</Row>
					 <Row>
							<Col>
							 <ListGroup>
								 <ListGroupItem>Discus throw 24.25018sec ~ 38.08036sec</ListGroupItem>
								 <ListGroupItem>Discus throw 97.00073sec ~ 106.284sec</ListGroupItem>
							 </ListGroup>
						 </Col>
					</Row>

				</Container>
			</div>
	  );
	}
}
export default Home;
