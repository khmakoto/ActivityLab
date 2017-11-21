import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from  'components/home/Home.js';
import Profile from  'components/profile/Profile.js';
import Task from  'components/task/Task.js';
import { Switch, Route } from 'react-router-dom'
import './styles/main.css';

function Main(props) {
  return (
    <main className="main_holder" >
      <Switch>
        <Route exact path='/' component={Home}/>
				<PrivateRoute path="/profile" component={Profile}/>
				<PrivateRoute path="/task" component={Task}/>
      </Switch>
    </main>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    true ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


export default Main;
