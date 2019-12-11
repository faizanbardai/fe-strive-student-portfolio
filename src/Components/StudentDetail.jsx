import React, { Component } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";

export default class StudentDetail extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Student detail</Card.Title>
            <Form>
              <Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control plaintext readOnly defaultValue="FayJu" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control plaintext readOnly defaultValue="Bardai" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Email</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue="FayJu@bardai.com"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Date of birth (dd/mmm/yyyy)</Form.Label>
                </Col>
                <Col>
                  <Form.Control plaintext readOnly defaultValue="01/Feb/1989" />
                </Col>
              </Row>
            </Form>
        </Card.Body>
      </Card>
    );
  }
}
