import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const { isEmpty } = require('lodash');



class DisplayUser extends Component {
    render() {
        const allUsers = this.props.users;
        console.log(allUsers);
        const users = !isEmpty(allUsers) ? allUsers : [];

        return (
            // <div className="users">
            //     {!isEmpty(users) ? <Table>
            //         <TableHead>
            //             <TableRow>
            //                 <TableCell>Name</TableCell>
            //                 <TableCell align="right">Company</TableCell>
            //                 <TableCell align="right">Position</TableCell>
            //             </TableRow>
            //         </TableHead>
            //         <TableBody>
            //             {users.map(({ name, position, company }, key) => (
            //                 <TableRow key={key}>
            //                     <TableCell component="th" scope="row"> {name ? name : 'No Name Found'} </TableCell>
            //                     <TableCell align="right">{company ? company : 'No Company Found'}</TableCell>
            //                     <TableCell align="right">{position ? position : 'No Position Found'}</TableCell>
            //                 </TableRow>
            //             ))}
            //         </TableBody>
            //     </Table> : null}
            // </div>

            <div>
                {users.map((dev, key) =>
                    <Card style={{ width: '28rem' }}>
                        <Card.Body>
                            <row>
                                {/* IMAGE GOES HERE: */}
                                <div className="image-placeholder"><img src={dev.picture} alt={dev.firstName}></img></div>
                                <Card.Title className="card-info" as="h4">{dev.firstName + " " + dev.lastName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted card-info" as="h5">{dev.city + ", " + dev.state}</Card.Subtitle>
                                <Card.Text className="card-info">
                                    Phone: {" " + dev.phone}
                                    <br />
                                    Email: {" " + dev.email}
                                </Card.Text>
                            </row>
                            <row>
                                <Card.Text className="skillset">
                                    Skills: {" " + dev.skillset}
                                </Card.Text>
                                <div className="card-footer">
                                    <Card.Link href={dev.link1} className={dev.link1 ? '' : 'emptyLink'} target="blank">LinkedIn</Card.Link>
                                    <Card.Link href={dev.link2} className={dev.link2 ? '' : 'emptyLink'} target="blank">Github</Card.Link>
                                    <Card.Link href={dev.link3} className={dev.link3 ? '' : 'emptyLink'} target="blank">Portfolio</Card.Link>
                                </div>
                            </row>
                        </Card.Body>
                    </Card>
                )}
            </div>
        );
    }
}

export default DisplayUser;
