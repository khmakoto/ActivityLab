const port = process.env.PORT
const domain = process.env.DOMAIN
const host = process.env.NODE_ENV == 'production'? `${domain}` : `${domain}:${port}`
import Auth from  'components/facebook/Auth.js';
import React from 'react';
import { NavLink } from 'reactstrap';

class Button extends React.Component {
	constructor(props) {
    super(props);
		this.state = {isAuthenticated:false};
  }
	componentDidMount() {
		Auth.isAuthenticated().then( res => {
				this.setState({isAuthenticated: res.isAuthenticated});
		});
  }

  render() {

		const isAuthenticated = this.state.isAuthenticated;
	  let button = null;
	  if (!isAuthenticated)
	  	button = <NavLink href="/auth/facebook">Log In</NavLink>;
	  else
	    button = <NavLink href="/auth/facebook/logout">Log out</NavLink>;
		return (<span>{button}</span>);
	}
}
export default Button;

/* old code

constructor(props) {
	super(props);
	this.FB = props.fb;
	this.onLogout = this.onLogout.bind(this);
	this.onStatusChange = this.onStatusChange.bind(this);
	this.state = {
		 message: ""
	};
}
componentDidMount() {
	 this.FB.Event.subscribe('auth.logout', this.onLogout);
	 this.FB.Event.subscribe('auth.statusChange', this.onStatusChange);
}
onStatusChange(response) {
	 if( response.status === "connected" ) {
			console.log(response)
			let promise= new Promise( (resolve, reject)=>{
				this.FB.api('/me', (response) => {
					console.log(response)
					resolve(response)
				})
			})
			promise.then( response => fetch(`${host}/api/users/`) )
						 .then( response => console.log(response) )
	 }
}
onLogout(response) {
	 this.setState({
			message: ""
	 });
}

<div
	className="fb-login-button"
	data-max-rows="1"
	data-size="large"
	data-show-faces="false"
	data-auto-logout-link="true"
	data-scope="user_about_me"
>
</div>
*/
