import React from 'react';
import { Row, Col, ButtonGroup, Dropdown, Card, Button } from "react-bootstrap";
import { useState } from "react";
import AddResources from './AddResources'

const Resources = () => {

  const [showAddResource, setShowAddResource] = useState(false)

  const handleShowModal = () => {
    setShowAddResource(true)
}


    return (
        <>
        <div className='resourcesHeader'>
        <Row
          style={{
            height: "74px",
            boxShadow: "0px 3px 6px #B4B3B329",
            position: "relative",
            left: "12px",
            width: "100%",
          }}
        >
            <Col md={8}>
            <h4>Resources</h4>
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
            <Col md={2} className='teacherRoutingDD'>
                <Button variant="outline-primary"
                onClick={handleShowModal}>
                  + Add Resources
                </Button>{" "}
              </Col>
        </Row>
        <Row>

        </Row>
        <div>
              <Row style={{marginTop:"20px"}}>
                <Col md={2}>
                <h6 style={{ marginLeft: "12px", paddingTop:"5px" ,textAlign: "center", font: "normal normal medium 14px/15px Roboto", letterSpacing: "0px", color: "#821CE8", opacity: "1", background: "#F1E7FC 0% 0% no-repeat padding-box", borderRadius: "0px 8px", width: "120px", height: "35px"}}>Teacher</h6>
                </Col>
                <Col md={3} style={{textAlign: "initial"}}>
                    Julie
                </Col>
              </Row>
              <div className='ResourceSection'>
              <Card className='dashboardRightPanelCard'>
                <Row>
                    <Col md={10} className="resourceText">English- Lorem Ipsum is a dummy text</Col>
                    <Col md={2} style={{paddingTop:"6px"}}><div>
                        <Button className='readBtn'>Read</Button>
                        </div></Col>
                </Row>
              </Card>
              <Card className='dashboardRightPanelCard'>
                <Row>
                    <Col md={10} className="resourceText">English- Lorem Ipsum is a dummy text</Col>
                    <Col md={2} style={{paddingTop:"6px"}}><div>
                        <Button className='readBtn'>Read</Button>
                        </div></Col>
                </Row>
              </Card>
              <Card className='dashboardRightPanelCard'>
                <Row>
                    <Col md={10} className="resourceText">English- Lorem Ipsum is a dummy text</Col>
                    <Col md={2} style={{paddingTop:"6px"}}><div>
                        <Button className='readBtn'>Read</Button>
                        </div></Col>
                </Row>
              </Card>
              <Card className='dashboardRightPanelCard'>
                <Row>
                    <Col md={10} className="resourceText">English- Lorem Ipsum is a dummy text</Col>
                    <Col md={2} style={{paddingTop:"6px"}}><div>
                        <Button className='readBtn'>Read</Button>
                        </div></Col>
                </Row>
              </Card>
              </div>
            </div>
        </div>
        {showAddResource && <AddResources show={showAddResource} onHide={() => {setShowAddResource(false)}} />}
        </>
    )
}

export default Resources;