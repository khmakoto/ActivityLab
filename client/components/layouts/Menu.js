import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import FacebookButton from 'components/facebook/Button.js';

import './styles/menu.css';

class Menu extends React.Component {

	constructor(props) {
    super(props);
		this.checkLoginState = this.checkLoginState.bind(this)
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
    };

  }


	componentDidMount() {
  }

	checkLoginState() {

	}


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
		console.log('render')
    return (
			<Navbar color="faded" light expand="md">
				<NavbarBrand tag={Link} to="/">ActivityLab</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink tag={Link} to="/task">Task</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/profile">Profile</NavLink>
						</NavItem>
						<NavItem>
							<FacebookButton fb={FB} />
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
    );
  }
}







export default Menu;
