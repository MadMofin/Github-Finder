import React, { Component, Fragment } from 'react';
import Navbar from "./components/layout/Navbar"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import User from './components/users/User';


import Home from './components/pages/Home';

import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';
class App extends Component{

  state = {
    user: {},
    loading: false
  };

  //Cuando el componente ya cargó
  /*async componentDidMount(){
    this.setState({ loading: true });
    const res = await Axios.get("https://api.github.com/users");
    this.setState({users: res.data, loading: false})
    console.log(res.data);
  }*/


render(){

  const {loading, users } = this.state;
  return (

    <GithubState>
      <AlertState>
        <Router>
          
          <div className="App">
            <Navbar title='GitHub Finder' icon='fab fa-github'/>
            <div className="container">
            <Alert/>

            <Switch> 

              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/user/:login" component={User}/>

            </ Switch>
            
            </div>
          </div>
        
        </Router>
      </AlertState>
    </GithubState>
  );
}
}

export default App;
