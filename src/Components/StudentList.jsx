import React, { Component } from "react";
import { ListGroup, Card, Badge } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  selectStudentRedux: id =>
    dispatch({
      type: "SELECT_STUDENT_REDUX",
      payload: id
    })
});

class StudentList extends Component {
  render() {
    let { students, selectStudent } = this.props;
    return (
      <Card className="">
        <Card.Body>
          <Card.Title>Students</Card.Title>
          <ListGroup
            variant="flush"
            className="overflow-auto"
            style={{ maxHeight: "500px" }}
          >
            {students &&
              students.length > 0 &&
              students.map(student => (
                <ListGroup.Item
                  key={student._id}
                  data-id={student._id}
                  action
                  onClick={() => {
                    selectStudent(student._id);
                    this.props.selectStudentRedux(student._id);
                  }}
                >
                  <div className="d-flex justify-content-between">
                    {student.name} {student.surname}
                    <Badge pill variant="info">
                      10
                    </Badge>
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
