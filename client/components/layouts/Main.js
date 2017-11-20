import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from  'components/home/Home.js';
import { Switch, Route } from 'react-router-dom'
import './styles/main.css';

function Main(props) {
  return (
    <main className="main_holder" >
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </main>
  );
}

export default Main;
