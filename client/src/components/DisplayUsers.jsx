
import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Card from "react-bootstrap/Card";

const { isEmpty } = require('lodash');



class DisplayUser extends Component {
    render() {
        const allUsers = this.props.users;
        const users = !isEmpty(allUsers) ? allUsers : [];

        return (
            <div className="users">
                {!isEmpty(users) ? <div>
                    {users.map(({ firstName, lastName, email, phone, city, state, picture, link1, link2, link3, skillset }, key) => (
                        <div>
                            <img source={picture ? picture : ''} alt={firstName ? firstName : '<No First Name Given>'}></img>
                            <h2>{firstName ? firstName : '<No First Name Given>'} {lastName ? lastName : '<No Last Name Given>'}</h2>
                            <h3>{email ? email : 'No Email Given'}</h3>
                            <h3>{phone ? phone : 'No Phone Number Given'}</h3>
                            <h4>{city ? city : 'No City Given'}, {state ? state : 'No State Given'}</h4>
                            <a href={link1 ? link1 : ''} target="_blank">LinkedIn</a>
                            <a href={link2 ? link2 : ''} target="_blank">Github</a>
                            <a href={link3 ? link3 : ''} target="_blank">Portfolio</a>
                            <br/>
                            <p>{skillset ? skillset : 'No skillset description given.'}</p>
                        </div>
                    ))}
                </div> : null}
            </div>
        );
    }
}

export default DisplayUser;