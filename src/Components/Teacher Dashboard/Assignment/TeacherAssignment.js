import React, { useState } from "react";
import TeacherSidebar from "../TeacherSidebar";
import { Row, Col, Button } from "react-bootstrap";
import CreateAssignment from "./CreateAssignment";

const TeacherAssignment = (props) => {
  const [showCreateAssignment, setShowCreateAssignment] = useState(false);

  const createAssignmentData = () => {
    setShowCreateAssignment(true);
  }

  const closeAndLoadAssignment = () => {
    setShowCreateAssignment(false);
  }

  return (
    <>
      <Row>
        <Col md={3} style={{ marginTop: "91px", width: "20%" }}>
          <TeacherSidebar />
        </Col>
        <Col md={9} style={{ width: "80%" }}>
          <div className="reportSection">
            <Row
              style={{
                height: "74px",
                boxShadow: "0px 3px 6px #B4B3B329",
                position: "relative",
                left: "12px",
                width: "100%",
              }}
            >
              <Col md={9}>
                <h4>Assignment</h4>
              </Col>
              <Col
                md={3}
                style={{ paddingTop: "17px" }}
                onClick={
                  createAssignmentData
                }
              >
                <Button variant="outline-primary">Create Assignment</Button>{" "}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      {showCreateAssignment && <CreateAssignment show={showCreateAssignment} onHide={closeAndLoadAssignment} />}
    </>
  );
};

export default TeacherAssignment;
