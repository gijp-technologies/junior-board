import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar";
import GoogleApi from '../GoogleApi/GoogleApi';

class Nav extends Component {
    responseGoogle = response => {
        const username = response.profileObj.name
        const email = response.profileObj.email
        axios.post('https://https://junior-board.herokuapp.com/api/tokenregister', {username:username, email:email})
 
        .then (res => {
          const token = res.data.key;
 
              localStorage.setItem('jwt', token);
              this.props.history.push('/Dashboard');
            })
        .catch(err => {
             
            })
      }
 
       componentDidMount(){
           if (localStorage.getItem('jwt')){
             this.props.history.push('/Dashboard')
           }
       }
 
    render() {
        return (
            
        <Navbar>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">user</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}
}

export default Nav;