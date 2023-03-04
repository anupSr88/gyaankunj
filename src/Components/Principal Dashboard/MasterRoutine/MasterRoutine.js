import React, { useEffect, useState } from 'react';
import { Row, Col, Dropdown, Button, Table } from "react-bootstrap";
import './MasterRoutine.css'
import AddRoutine from './AddRoutine'
import axios from 'axios'
import { getMasterRoutineData } from '../../../ApiClient'

const MasterRoutine = () => {

    const [showAddRoutine, setShowAddRoutine] = useState(false)
    const [masterRoutineData, setMasterRoutineData] = useState([])

    useEffect(() => {
      getMasterRoutine();
    },[])

    const handleShowModal = () => {
       setShowAddRoutine(true)
    }

    const getMasterRoutine = () => {
      getMasterRoutineData()
      .then((res) => setMasterRoutineData(res.data))
      .catch((err) => console.log("error"))
    }


    return (
      <>
        <div className="routinemain">
          <div className="masterRoutineheader">
            <Row>
              <Col md={8} style={{ textAlign: "left", paddingLeft: "50px" }}>
                <h3>Master Routine</h3>
              </Col>
              <Col md={2}>
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="dropdownHead"
                      id="dropdown-basic"
                    >
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
              <Col md={2}>
                <Button variant="outline-primary" onClick={handleShowModal}>
                  + Add Routine
                </Button>{" "}
              </Col>
            </Row>
          </div>
          <div className="routineSection">
            <div className="dayHeader">
              <h5>Wednesday</h5>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>1st</th>
                  <th>2nd</th>
                  <th>3rd</th>
                  <th>4th</th>
                  <th style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></th>
                  <th>5th</th>
                  <th>6th</th>
                  <th>7th</th>
                  <th>8th</th>
                  <th>Remedial</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='gradeStyle' style={{color: "#F3FAFF", backgroundColor:"#3F4954"}} rowSpan="3">
                    1
                  </td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}} rowSpan="4">B<br></br> R<br></br> E<br></br> A<br></br> K</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                </tr>
                <tr>
                  <td>Hindi</td>
                  <td>Hindi</td>
                  <td>Hindi</td>
                  <td>Hindi</td>
                  
                  <td>Hindi</td>
                  <td>Hindi</td>
                  <td>Hindi</td>
                  <td>Hindi</td>
                  <td>Hindi</td>
                </tr>
                <tr>
                  <td>K.K. Singh</td>
                  <td>K.K. Singh</td>
                  <td>K.K. Singh</td>
                  <td>K.K. Singh</td>
                  
                  <td>K.K. Singh</td>
                  <td>K.K. Singh</td>
                  <td>K.K. Singh</td>
                  <td>K.K. Singh</td>
                  <td>K.K. Singh</td>
                </tr>
                
              </tbody>
              
            </Table>
          </div>
        </div>
       {showAddRoutine && <AddRoutine show={showAddRoutine} onHide={() => {setShowAddRoutine(false)}} masterRoutineData={masterRoutineData} />}
      </>
    );
}

export default MasterRoutine;