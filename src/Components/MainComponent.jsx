import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewStudentForm from "./NewStudentForm";
import StudentList from "./StudentList";
import StudentDetail from "./StudentDetail";
import GetStudents from "../API/GetStudents";
import GetStudentByID from "../API/GetStudentByID";

export default class MainComponent extends Component {
  state = {
    students: [],
    selectedStudent: {}
  };
  updateStudentList = newStudent => {
    this.setState({ students: this.state.students.concat(newStudent) });
  };
  selectStudent = async selectedStudentID => {
    let selectedStudent = await GetStudentByID(selectedStudentID);
    this.setState({ selectedStudent });
  };
  render() {
    let { students, selectedStudent } = this.state;
    return (
      <Container fluid>
        <Container>
          <Row className="my-2">
            <Col xs={12} md={5}>
              <StudentList
                students={students}
                selectStudent={this.selectStudent}
              />
            </Col>
            <Col xs={12} md={7}>
              <NewStudentForm updateStudentList={this.updateStudentList} />
              <StudentDetail selectedStudent={selectedStudent} />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
  componentDidMount = async () => {
    this.setState({ students: await GetStudents() });
  };
}
