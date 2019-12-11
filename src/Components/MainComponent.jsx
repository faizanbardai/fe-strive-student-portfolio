import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewStudentForm from "./NewStudentForm";
import StudentList from "./StudentList";
import StudentDetail from "./StudentDetail";
import GetStudents from "../API/GetStudents";

export default class MainComponent extends Component {
  state = {
    students: []
  };
  updateStudentList = newStudent => {
    this.setState({students: this.state.students.concat(newStudent)});
  };
  render() {
    return (
      <Container fluid>
        <Container>
          <Row className="my-2">
            <Col xs={12} md={6}>
              <StudentList students={this.state.students}/>
            </Col>
            <Col xs={12} md={6}>
              <NewStudentForm updateStudentList={this.updateStudentList}/>
              <StudentDetail />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
  componentDidMount = async () => {
    this.setState({ students: await GetStudents() });
    console.log(this.state.students);
  };
}
