const port = process.env.PORT
const domain = process.env.DOMAIN
const host = process.env.NODE_ENV == 'production'? `${domain}` : `${domain}:${port}`

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './task.scss';
import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';
import { Alert } from 'reactstrap';
import YouTube from 'react-youtube';
import UserBadge from './UserBadge';


import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';



class Home extends React.Component {
	constructor(props) {
		super(props);
		//set init state
		this.state = {task: null};

		this.currentPath = "Root";
		this.data = require('../../../data/taxonomyTree.json');
		this.currentTaxonomy = this.data["Root"];
		this.selections = ["Root"];
	}

	//fetch remote task data
	componentDidMount() {
		fetch(`${host}/api/tasks/single`, {credentials: 'include'})
			.then( res => res.json())
			.then( res => {
				this.setState({task: res.task});
				console.log(this.state.task)
		});
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
		evt.preventDefault();
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
			const task = this.state.task;
			//check task state is not null
			if (!task) {
	      return <div><Alert color="light">Loading</Alert></div>
	    }

			//youtube opt
			const youtube_opts = {
	      height: '390',
	      width: '640',
	      playerVars: { // https://developers.google.com/youtube/player_parameters
	        autoplay: 1
	      }
	    };

	    return (
			<div>
				<Container>
					<Row className="mb-4">
						 <Col>
							 <UserBadge/>
						</Col>
					</Row>
					 <Row className="mb-1">
							<Col>
								<div className="embed-responsive embed-responsive-21by9">
									<YouTube
										className="embed-responsive-item"
						        videoId={task.activityNetId}
						        opts={youtube_opts}
						        onReady={this._onReady}
						      />
								</div>
							</Col>
					 </Row>
					 <Row>
							<Col>
								<span><br /></span>

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
