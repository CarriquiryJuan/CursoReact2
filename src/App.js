import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';


class App extends Component {
  /*return (
    <Router>
      <div className="App">
          <Link to="/customers" >Customers</Link>
          <Link to="/customers/30000000" >Customers 30.000.000</Link>
      </div>
    </Router>
  );*/

renderHome = () => <h1> Home </h1> ;
renderCustomerContainer = () => <h1> renderCustomerContainer </h1> ;
renderCustomerListContainer = () => <h1> Customer List Container </h1> ;
renderCustomerNewContainer = () => <h1> Customer New Container </h1> ;

  render(){
  return (
    <Router>
        <div>
          <Route exact path="/" component={HomeContainer}></Route>
          <Route exact path="/customers" component={CustomersContainer}></Route>
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer}></Route>
            <Route path="/customers/:dni" component={this.renderCustomerContainer}></Route>
          </Switch>
       
        </div>
    </Router>
  )
}
}

export default App;
