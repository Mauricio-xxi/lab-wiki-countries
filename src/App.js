import React, { Component } from "react";
import data from "./data/countries.json";
import { Switch, Route, Link} from "react-router-dom";
import Card from './components/Card'
import "./App.css";


class App extends Component {
  state = {
    data
  };

  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div
                className="col-5"
                style={{ maxHeight: "90vh", overflow: "scroll" }}
              >
                <div className="list-group">
                {this.state.data.map((country, index)=>{ return(
                  <Link to = {country.cca3}
                    className="list-group-item list-group-item-action"
                    key = {index}
                  >
                    {country.flag} {country.name.common}
                  </Link>
                )})}
                </div>
              </div>
              <Switch>
                  <Route path="/:id" component={Card}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
