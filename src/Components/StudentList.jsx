import React, { Component } from "react";
import { ListGroup, Card } from "react-bootstrap";
import GetStudents from "../API/GetStudents";

export default class StudentList extends Component {
  state = {
    students: []
  };
  render() {
    let { students } = this.state;
    return (
      <Card className="">
        <Card.Body>
          <Card.Title>Students</Card.Title>
          <Card.Text>
            <ListGroup
              variant="flush"
              className="overflow-auto"
              style={{ height: "500px" }}
            >
              {students &&
                students.length > 0 &&
                students.map(student => (
                  <ListGroup.Item action>{student.name} {student.surname}</ListGroup.Item>
                ))}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  componentDidMount = async () => {
    this.setState({ students: await GetStudents() });
    console.log(this.state.students);
  };
}
