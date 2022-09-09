import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Profile from './About'
import { withAuth0 } from '@auth0/auth0-react';
import WELCOME from './WELCOME';



class App extends React.Component {
  


  


 
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      
      
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element= 
              
                {isAuthenticated ?   <BestBooks /> : <WELCOME />}
            
            >
              <Route 
              exact path="/profile"
              element= { <Profile />}
              >
              </Route>
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
      
    )
  }
}

export default withAuth0(App);
