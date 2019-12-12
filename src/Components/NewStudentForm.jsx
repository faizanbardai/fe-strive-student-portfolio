import React, { Component } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Card,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import PostStudents from "../API/PostStudent";
import CheckEmailAvailability from "../API/CheckEmailAvailability";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export default class NewStudentForm extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    dob: "",
    emailAvailale: true
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
      dob: "",
      emailAvailale: true
    });
    this.props.updateStudentList(newStudent);
  };
  checkEmailAvailability = async e => {
    if (e.target.checkValidity()) {
      this.setState({
        emailAvailale: await CheckEmailAvailability(e.target.value)
      });
    }
  };
  render() {
    let { name, surname, email, dob, emailAvailale } = this.state;
    return (
      <Card className="mb-2">
        <Card.Body>
          <Card.Title>Add a new student</Card.Title>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col sm={4}>
                <Form.Label>First Name</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  onChange={this.handleChange}
                  name="name"
                  value={name}
                  placeholder="First name"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Form.Label>Last Name</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  onChange={this.handleChange}
                  name="surname"
                  value={surname}
                  placeholder="Last name"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Form.Label>
                  Email{" "}
                  {!emailAvailale && (
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={
                        <Tooltip id={"tooltip-top"}>
                          Email address is not available. Try something
                          different.
                        </Tooltip>
                      }
                    >
                      <FontAwesomeIcon
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Tooltip on top"
                        style={{ color: "red" }}
                        icon={faExclamationCircle}
                      />
                    </OverlayTrigger>
                  )}
                </Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  onChange={this.handleChange}
                  onBlur={this.checkEmailAvailability}
                  name="email"
                  value={email}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Form.Label>Date of birth</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  onChange={this.handleChange}
                  name="dob"
                  value={dob}
                  type="date"
                  required
                />
              </Col>
            </Row>
            <Button variant="primary" type="submit" disabled={!emailAvailale}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
