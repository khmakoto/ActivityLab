import React from 'react';
import Menu from 'components/layouts/Menu.js';
import Main from 'components/layouts/Main.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export class Layout extends React.Component {

	constructor(props) {
    super(props);
  }

  render() {
		return (
			<div>
				<Menu/>
      	<Main/>
			</div>
    );
  }
}

export default Layout;
