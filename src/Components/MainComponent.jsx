import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputForm from "./InputForm";
import StudentList from "./StudentList";
import StudentDetail from "./StudentDetail";

export default class MainComponent extends Component {
  render() {
    return (
      <Container fluid>
        <Container>
          <Row className="my-2">
            <Col xs={12} md={6}>
              <StudentList />
            </Col>
            <Col xs={12} md={6}>
              <InputForm />
              <StudentDetail />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
