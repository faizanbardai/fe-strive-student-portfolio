import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default class StudentDetail extends Component {

  render() {
    let { name, surname, email, dob } = this.props.selectedStudent;
    return (
      <Card>
        <Card.Body>
          <Card.Title>Student detail</Card.Title>
          <ListGroup>
            <ListGroup.Item>
              <FontAwesomeIcon className="mr-2" icon={faUser} />
              {name} {surname}
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon className="mr-2" icon={faAt} />
              {email}
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon className="mr-2" icon={faCalendarAlt} />
              {dob}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}
