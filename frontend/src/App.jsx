import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import WildFireDetails from './Components/WildfireDetails/WildFireDetails';
import ReportWildfire from './Components/ReportWildfire/ReportWildfire';

function App() {
  return (
    <div className="App d-flex flex-column justify-content-between">
      <BrowserRouter>
        <Header />

        <div className="router-wrapper p-3">
          <Switch>
            <Route exact path="/about" component={WildFireDetails} />
            <Route exact path="/reportwildfire" component={ReportWildfire} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile/:id" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
