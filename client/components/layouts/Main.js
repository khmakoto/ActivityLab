import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from  'components/home/Home.js';
import Auth from  'components/facebook/Auth.js';
import Profile from  'components/profile/Profile.js';
import Task from  'components/task/Task.js';
import { Switch, Route, Redirect } from 'react-router-dom'
import './styles/main.css';



class Main extends React.Component {
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

	  return (
			<main className="main_holder" >
	      <Switch>
	        <Route exact path='/' component={Home}/>
					<Route path="/task" component={Task} />
					<PrivateRoute path="/profile" component={Profile} isAuthenticated={this.state.isAuthenticated}/>
	      </Switch>
	    </main>
		);
	}
}


/*
function Main(props) {
  return (
    <main className="main_holder" >
      <Switch>
        <Route exact path='/' component={Home}/>
				<PrivateRoute path="/profile" component={Profile} isAuthenticated={true}/>
				<PrivateRoute path="/task" component={Task}/>
      </Switch>
    </main>
  );
}
*/

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) =>{
	return (
	  <Route {...rest} render={ props => (
	    isAuthenticated ? (
	      <Component {...props}/>
	    ) : (
	      <Redirect to={{
	        pathname: '/',
	        state: { from: props.location }
	      }}/>
	    )
	  )}/>
)}


export default Main;
