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
import addBook from './addBook'



class App extends React.Component {
  


  


 
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element= 
              {
                <>
              
              <BestBooks /> 
              </>}
            >
              <Route 
              exact path="/profile"
              element= {<Profile/>}
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

export default App;
