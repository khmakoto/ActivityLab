import React from 'react';
class Button extends React.Component {
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
		 console.log( response );
		 if( response.status === "connected" ) {
				this.FB.api('/me', (response) => {
					 var message = "Welcome " + response.name;
					 this.setState({
							message: message
					 });
				})
		 }
	}

	onLogout(response) {
		 this.setState({
				message: ""
		 });
	}

  render() {

		return (
		         <div>
		            <div
									className="fb-login-button"
									data-max-rows="1"
									data-size="large"
									data-show-faces="false"
									data-auto-logout-link="true"
		            >
		            </div>
		            <div>{this.state.message}</div>
		         </div>
		      );

	}
}
export default Button;
