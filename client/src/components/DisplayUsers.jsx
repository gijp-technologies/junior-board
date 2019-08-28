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
                        <Card style={{ width: '28rem' }}>
                            <Card.Body>
                                <row>
                                    <Card.Title className="card-info" as="h4">{name ? name : 'No Name Found'} </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted card-info" as="h5">{company ? company : 'No Company Found'}</Card.Subtitle>
                                    <Card.Text className="card-info">
                                        <p>{position ? position : 'No Position Found'}</p>
                                    </Card.Text>
                                </row>
                            </Card.Body>
                        </Card>
                    ))}
                </div> : null}
            </div>
        );
    }
}

export default DisplayUser;
