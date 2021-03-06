import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import FacebookButton from 'components/facebook/Button.js';
import Auth from  'components/facebook/Auth.js';

import './styles/menu.css';

class Menu extends React.Component {

	constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
		this.state = {isAuthenticated:false};
  }

	componentDidMount() {
		Auth.isAuthenticated().then( res => {
				this.setState({isAuthenticated: res.isAuthenticated});
		});
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
						{ this.state.isAuthenticated && <NavItem><NavLink tag={Link} to="/profile">Achievements</NavLink></NavItem>}
						<NavItem>
							<FacebookButton />
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
    );
  }
}







export default Menu;
