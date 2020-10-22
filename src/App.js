import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import {StarCard} from "./components/star-card";
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Breadcrumbs} from "./components/breadcrumbs";
import {AccountPage} from "./components/account-page";

function App() {
  return (
    <div className="App">
      <Router>

        <Header/>

        <Breadcrumbs/>

        <Switch>
          <Route path="/star-card">
            <StarCard/>
          </Route>
          <Route path="/account-page">
            <AccountPage/>
          </Route>
        </Switch>

        <Footer/>

      </Router>
    </div>
  );
}

export default App;
