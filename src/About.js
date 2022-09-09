import { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {

  render() {
    const { user } = this.props.auth0;
    /* TODO: render information about the developers */
    return<>
    
    <p>Profile page coming soon</p>
    
    
    </>
     
  }
};

export default withAuth0(Profile);
