import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './styles/menu.css';

class Menu extends React.Component {

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
    );
  }
}

export default Menu;
