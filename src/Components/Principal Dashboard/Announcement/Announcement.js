import React, { useState } from 'react'
import { Row, Col, ButtonGroup, Dropdown, Card, Button } from "react-bootstrap";
import AddAnnouncement from './AddAnnouncement';

const Announcements = () => {

    const [showAddAnnouncement, setShowAddAnnouncement] = useState(false)

    const handleShowModal = () => {
        setShowAddAnnouncement(true)
  }


    return(
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
            <Col md={7}>
            <h4>Announcements</h4>
            </Col>
            <Col md={2} className="teacherRoutingDD">
            <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                    Sort By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
            </Col>
            <Col md={3} className='teacherRoutingDD'>
                <Button variant="outline-primary"
                onClick={handleShowModal}>
                  + Add Announcement
                </Button>{" "}
              </Col>
        </Row>
        
        
        </div>
        {showAddAnnouncement && <AddAnnouncement show={showAddAnnouncement} onHide={() => {setShowAddAnnouncement(false)}} />}
        </>
    )
}

export default Announcements;