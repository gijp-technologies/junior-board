
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
                            {/* <h2>{name ? name : 'No Name Found'}</h2>
                            <h3>{company ? company : 'No Company Found'}</h3>
                            <p>{position ? position : 'No Position Found'}</p>
                            <br/> */}

                            <Card style={{ width: '28rem' }}>
                                <Card.Body>
                                    <row>
                                        <Card.Title className="card-info" as="h4">{name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-info" as="h5">{company}</Card.Subtitle>
                                        <Card.Text className="card-info">
                                            Position: {position}
                                        </Card.Text>
                                    </row>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div> : null}
            </div>
        );
    }
}

export default DisplayUser;