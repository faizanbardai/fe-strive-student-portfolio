import React, { Component } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAt,
  faCalendarAlt,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const mapStateToProps = state => state;

class StudentDetail extends Component {
  render() {
    let { _id, name, surname, email, dob } = this.props.selectedStudent;
    return (
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>Student detail</Card.Title>
            <Button
              onClick={() => {
                this.props.deleteStudentByID(_id);
              }}
              variant="outline-info rounded-circle mb-2"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </div>
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

export default connect(mapStateToProps)(StudentDetail);
