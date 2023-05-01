import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import {loadAssignmentData} from '../../../ApiClient'
import './studentAssignment.css'

const AssignmentSheet = (props) => {

    const [fullscreen, setFullscreen] = useState(true);

    useEffect(() => {
      fetchAssignmentData();
    },[])

    const userDetails = JSON.parse(localStorage.getItem('UserData'))

    const fetchAssignmentData = () => {
      const AssignmentId = props.assignmentId
      const userId = userDetails?.user_id
      loadAssignmentData(AssignmentId, userId)
      .then((res) => console.log("AssignmentData - ", res.data))
      .catch((err) => console.log("AssignmentData err - ", err))
    }

  return (
    <>
      <Modal
        className="ModalBody"
        {...props}
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="assignmentHeader">Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="assignmentNameHeader">
            <Row>
                <Col md={12} className="assignmentName">
                    Name of the assignment: Geography
                </Col>
            </Row>
            <Row>
                <Col md={12} className="assignmentName">
                    Duration: 60 minutes
                </Col>
            </Row>
            </div>
            <Row>
                <Col md={12}>
                    <span className="assignmentName">Description:</span> Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, 
                    a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, 
                    added, and removed to make it nonsensical and improper Latin.
                </Col>
            </Row>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary">
            Submit Assignment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AssignmentSheet;
