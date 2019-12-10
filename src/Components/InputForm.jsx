import React, { Component } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";

export default class InputForm extends Component {
  render() {
    return (
      <Card className="mb-2">
        <Card.Body>
          <Card.Title>Add a new student</Card.Title>
          <Card.Text>
            <Form>
              <Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Email</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="email" placeholder="Enter email" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Date of birth (dd/mmm/yyyy)</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="date" />
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
