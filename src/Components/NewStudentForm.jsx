import React, { Component } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import PostStudents from "../API/PostStudent";

export default class NewStudentForm extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    dob: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    let newStudent = await PostStudents(this.state);
    this.setState({
      name: "",
      surname: "",
      email: "",
      dob: ""
    });
    this.props.updateStudentList(newStudent);
  };
  render() {
    let { name, surname, email, dob } = this.state;
    return (
      <Card className="mb-2">
        <Card.Body>
          <Card.Title>Add a new student</Card.Title>
          <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Form.Label>First Name</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  name="name"
                  value={name}
                  placeholder="First name"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Last Name</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  name="surname"
                  value={surname}
                  placeholder="Last name"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  name="email"
                  value={email}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Date of birth</Form.Label>
              </Col>
              <Col>
                <Form.Control name="dob" value={dob} type="date" required />
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
