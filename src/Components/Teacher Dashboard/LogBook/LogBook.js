import React from 'react';
import { Row, Col, ButtonGroup, ToggleButton, Dropdown, Table, ProgressBar, Button } from "react-bootstrap";
import { useState } from "react";
import AddLogBook from './AddLogbook'

const LogBook = () => {

  const [showAddLogbook, setShowAddLogbook] = useState(false)

  const handleShowLogBook = () => {
    setShowAddLogbook(true)
  }


    return (
        <>
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
            <Col md={6}>
            <h4>Log Book</h4>
            </Col>
            <Col md={2} className="teacherRoutingDD">
            <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                    Select Section
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
            </Col>
            <Col md={2} className="teacherRoutingDD">
            <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                    Select Class
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
            </Col>
            <Col md={2} style={{paddingTop:"17px"}}>
                <Button variant="outline-primary" onClick={handleShowLogBook}>
                  + Add Logbook
                </Button>{" "}
              </Col>
        </Row>
        <div className="routineSection">
            <div>
              <Row>
                <Col md={2}>
                <h6 style={{ marginLeft: "12px", paddingTop:"5px" ,textAlign: "center", font: "normal normal medium 14px/15px Roboto", letterSpacing: "0px", color: "#821CE8", opacity: "1", background: "#F1E7FC 0% 0% no-repeat padding-box", borderRadius: "0px 8px", width: "120px", height: "35px"}}>Teacher</h6>
                </Col>
                <Col md={3} style={{textAlign: "initial"}}>
                    Julie
                </Col>
              </Row>
            </div>
            <Table striped hover>
              <thead>
                <tr style={{background: "#7A9ABF 0% 0% no-repeat padding-box", borderRadius: "4px 4px 0px 0px", opacity: "1"}}>
                  <th>Period</th>
                  <th>Students Present</th>
                  <th>Subject</th>
                  <th>Content Taught</th>
                  <th>Homework</th>
                  <th>Absentees</th>
                  <th>Dress defaulters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>1</td>
                  <td>20</td>
                  <td>Hindi</td>
                  <td>Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text</td>
                  <td>Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text</td>   
                  <td>Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text</td>  
                  <td>Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text</td>                
                </tr>
              </tbody>
            </Table>
          </div>
        
      </div>
        {showAddLogbook && <AddLogBook show={showAddLogbook} onHide={() => setShowAddLogbook(false)} />}
        </>
    )
}

export default LogBook;