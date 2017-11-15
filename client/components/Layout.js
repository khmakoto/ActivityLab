import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Badge } from 'reactstrap';
export class Layout extends React.Component {

	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
		return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">ActivityLab</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">User: Mike</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
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
									<Breadcrumb>
						        <BreadcrumbItem><a href="#">Root</a></BreadcrumbItem>
						        <BreadcrumbItem><a href="#">Sports, Exercise, and Recreation</a></BreadcrumbItem>
						      </Breadcrumb>
												<Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
							             <option>Doing aerobics</option>
							             <option>Participating in martial arts</option>
							             <option>Playing sports</option>
							             <option>Weightlifting</option>
							             <option>Playing hockey</option>
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
export default Layout;
