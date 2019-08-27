import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const { isEmpty } = require('lodash');



class DisplayUser extends Component {
    render() {
        const allUsers = this.props.users;
        const users = !isEmpty(allUsers) ? allUsers : [];

        console.log("This is the users props value below.");
        console.log(this.props.users);

        console.log("This is the allUsers const value below.");
        console.log(allUsers);

        console.log("This is the users const value below.");
        console.log(users);

        return (
            <div className="users">
                {!isEmpty(users) ? <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(({ firstName, lastName, email, phone, city, state, picture, link1, link2, link3, skillset }, key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row"> {firstName ? firstName : 'No First Name Found'} </TableCell>
                                <TableCell align="right">{lastName ? lastName : 'No Last Name Found'}</TableCell>
                                <TableCell align="right">{email ? email : 'No Email Found'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> : null}
            </div>
        );
    }
}

export default DisplayUser;
