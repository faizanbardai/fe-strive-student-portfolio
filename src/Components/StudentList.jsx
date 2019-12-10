import React, { Component } from "react";
import { ListGroup, Card } from "react-bootstrap";

export default class StudentList extends Component {
  render() {
    return (
      <>
        <Card className="">
          <Card.Body>
            <Card.Title>Students</Card.Title>
            <Card.Text>
              <ListGroup variant="flush" className="overflow-auto" style={{height: "500px"}}>
                <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
