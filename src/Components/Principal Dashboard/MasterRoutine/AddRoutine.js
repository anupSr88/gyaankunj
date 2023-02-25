import React, { useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";

const AddRoutine = (props) => {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        className="ModalBody"
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Routine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Add Grade</Form.Label>
                  <Form.Control type="email" placeholder="Add Grade" />
                </Form.Group>
              </Col>
              <Col md={2}>
              </Col>
              <Col md={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Add Subject</Form.Label>
                  <Form.Control type="email" placeholder="Add Subject" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Teacher Name</Form.Label>
                  <Form.Control type="email" placeholder="Teacher Name" />
                </Form.Group>
              </Col>
              <Col md={2}>
              </Col>
              <Col md={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Add Period</Form.Label>
                  <Form.Control type="email" placeholder="Add Period" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Add Timings</Form.Label>
                  <Form.Control type="email" placeholder="Add Timings" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" style={{alignItems:"center"}}>Reset</Button>
          <Button variant="outline-primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddRoutine;
