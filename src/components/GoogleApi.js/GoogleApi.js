// Libraries
import React from 'react';

// Components
import {GoogleLogin} from 'react-google-login';

class GoogleApi extends React.Component {
    render() {
       return (
         <GoogleLogin
           clientId="348336394976-l8e5k1jb0i3h8emk1imu7e8nte28aok6.apps.googleusercontent.com"
           onSuccess={this.props.responseGoogle}
           onFailure={this.props.responseGoogle}
           theme='dark'
         />
       );
  }
}

  export default GoogleApi;