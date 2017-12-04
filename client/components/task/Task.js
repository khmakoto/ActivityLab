const port = process.env.PORT
const domain = process.env.DOMAIN
const host = process.env.NODE_ENV == 'production'? `${domain}` : `${domain}:${port}`

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './task.scss';
import { Link } from 'react-router-dom'

import YouTube from 'react-youtube';
import UserBadge from './UserBadge';
import CustomizedYouTube from './CustomizedYouTube';
import TimeButton from './TimeButton'
import Segments from './Segments'
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardHeader } from 'reactstrap';
import { Alert } from 'reactstrap';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';



class Home extends React.Component {
	constructor(props) {
		super(props);
		//set init state
		this.state = {task: null, player: null,  start_time: 0, end_time: 0, annotations:[], visible: false, alert_message: ''};
		this.handleYouTubeReady = this._handleYouTubeReady.bind(this)
		this.handleTimeSet = this._handleTimeSet.bind(this)
		this.handleAdd = this._handleAdd.bind(this)
		this.handleSubmit = this._handleSubmit.bind(this)
		this.onDismiss = this.onDismiss.bind(this);
		this.handleDelete = this._handleDelete.bind(this);

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
			});
	}
	//handle youtube pause
	_handleYouTubeReady(player) {
		this.setState({ player: player });
  }
	//handle time button
	_handleTimeSet(type){
		if(type == "start")
			this.setState((prevState, props) => {
			  return {start_time: prevState.player.getCurrentTime()};
			});
		else if(type == "end")
			this.setState((prevState, props) => {
				return {end_time: prevState.player.getCurrentTime()};
			});
	}
	//handle add segment
	_handleAdd(){
		this.setState((prevState) => {
			if(prevState.end_time > prevState.start_time){
				var timestamp = (new Date()).getTime();
				return { annotations: [...prevState.annotations, { "id": timestamp , "label": this.currentPath, "segment":[prevState.start_time, prevState.end_time] }] };
			}else
				this.setState({ visible: true, alert_message: "End time should be later than start time" });
		});
	}
	//hanele submit annotation
	_handleSubmit(){
		if(this.state.annotations.length == 0){
			this.setState({ visible: true, alert_message: "Please add at least one segment" });
		}else{
			const annotations = this.state.annotations.map( seg  => {
				let obj = Object.assign({}, {'task': this.state.task.id, 'label': seg.label, "segment": seg.segment});
				return obj
			});
			const data = Object.assign({}, {"annotations": annotations});
			fetch(`${host}/api/tasks/add`,
			           { credentials: 'include',
									 method: 'POST',
			             headers: {
			               'Accept': 'application/json, text/plain, */*',
			               'Content-Type': 'application/json'
			             },
			             body: JSON.stringify(data)})
			      .then(res => res.json())
						.then(res => this.setState({task: null}) )					
			      .then(res => {
							fetch(`${host}/api/tasks/single`, {credentials: 'include'})
								.then( res => res.json())
								.then( res => {
										this.setState({task: res.task,
										player: null,
										start_time: 0, end_time: 0,
										annotations:[],
										visible: false, alert_message: ''
									});
								});
						})
		}
	}
	//hanele alert toggle
	onDismiss() {
    this.setState({ visible: false });
  }
	//hanele alert toggle
	_handleDelete(id){
		this.setState((prevState) => {
				const new_annotations = prevState.annotations.filter( seg => seg.id !== id );
				return { annotations: new_annotations };
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

	    return (
			<div>
				<Container>
					 <Row className="mb-2">
							<Col>
								<div className="embed-responsive embed-responsive-21by9">
									<CustomizedYouTube videoId={task.activityNetId} onYouTubeReady={this.handleYouTubeReady} />
								</div>
							</Col>
					 </Row>
					 <Row className="mb-2">
							<Col>
								<Card body outline color="secondary">
									<Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>{this.state.alert_message}</Alert>
									<CardTitle>Pleas add segment</CardTitle>
	 								<CardBody>
										<Row className="mb-2">
			 								<Col>
												<TimeButton type='start' time={this.state.start_time} onTimeSet={this.handleTimeSet} />
											</Col>
											<Col>
												<TimeButton type='end' time={this.state.end_time} onTimeSet={this.handleTimeSet} />
											</Col>
										</Row>

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
										 <Button outline color="primary" onClick={this.handleAdd}>Add</Button>
					        </CardBody>
					      </Card>
							</Col>
					 </Row>
					 <Row className="mb-4">
							<Col>
								<Card body outline color="secondary">
									<CardTitle>Segments</CardTitle>
	 								<CardBody>
										<Segments annotations={this.state.annotations} onSegmentDelete={this.handleDelete}  />
									</CardBody>
								</Card>
						 </Col>
					</Row>
					<Row className="mb-5">
						 <Col>
							 <Button color="primary" size="lg" block onClick={this.handleSubmit}>Submit & Next</Button>
						</Col>
				 </Row>
				</Container>
			</div>
	  );
	}
}
export default Home;
