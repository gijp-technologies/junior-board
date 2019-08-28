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
                    {users.map(({ name, position, company }, key) => (
                        <div>
                            <h2>{name ? name : 'No Name Found'}</h2>
                            <h3>{company ? company : 'No Company Found'}</h3>
                            <p>{position ? position : 'No Position Found'}</p>
                            <br/>
                        </div>
                    ))}
                </div> : null}
            </div>
        );
    }
}

export default DisplayUser;
