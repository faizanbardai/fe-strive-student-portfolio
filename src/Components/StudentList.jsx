import React, { Component } from "react";
import { ListGroup, Card } from "react-bootstrap";

export default class StudentList extends Component {
  
  render() {
    let { students, selectStudent } = this.props;
    return (
      <Card className="">
        <Card.Body>
          <Card.Title>Students</Card.Title>
          <ListGroup
            variant="flush"
            className="overflow-auto"
            style={{ "max-height": "500px" }}
          >
            {students &&
              students.length > 0 &&
              students.map(student => (
                <ListGroup.Item key={student.ID} data-id={student.ID} action onClick={(e) => selectStudent(e.target.dataset.id)}>
                  {student.fullName}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
  
}
