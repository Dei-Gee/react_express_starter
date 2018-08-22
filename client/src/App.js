import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

//imported components
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import ErrorPage from './components/Error/Error';
import Header from './components/Header/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="wrapper">
              <Header />

              <div className="main-content">
                <Navigation />

                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/faq" component={FAQ} />
                  <Route component={ErrorPage} />
                </Switch>
              </div>

              <div className="footer-div">
                <Footer />
              </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
