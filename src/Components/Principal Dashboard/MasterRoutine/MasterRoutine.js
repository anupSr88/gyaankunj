import React, { useEffect, useState } from 'react';
import { Row, Col, Dropdown, Button, Table } from "react-bootstrap";
import './MasterRoutine.css'
import AddRoutine from './AddRoutine'
import axios from 'axios'
import { getMasterRoutineData, viewMasterRoutine } from '../../../ApiClient'
import Select from 'react-select'
import PrincipalSidebar from '../PrincipalSidebar';

const MasterRoutine = () => {

    const [showAddRoutine, setShowAddRoutine] = useState(false)
    const [masterRoutineData, setMasterRoutineData] = useState([])
    const [fetchedRoutineData, setFetchedRoutineData] = useState([])
    const [section, setSection] = useState('')
    const [sectionName, setSectionName] = useState('')
    const [grade, setGrade] = useState('')
    const [weekDay, setWeekDay] = useState('')
    const [editingState, setEditingState] = useState(false)

    useEffect(() => {
      // getMasterRoutine();
      viewMasterRoutineData();
    },[])

    const handleShowModal = () => {
       setShowAddRoutine(true)
    }

    const getMasterRoutine = () => {
      getMasterRoutineData()
      .then((res) => setMasterRoutineData(res.data))
      .catch((err) => console.log("error", err))
    }

    const viewMasterRoutineData = () => {
      const day = "Monday"
      viewMasterRoutine(day)
      .then((res) => console.log("Res - ", res))
      .then((err) => console.log("err - ", err))
    }

    const handleGradeChange = (e) => {
      setGrade(e.value)
    }
  
    const handleSectionChange = (e) => {
      setSection(e.value)
      setSectionName(e.label)
    }

    const handleDayChange = (e) => {
      setWeekDay(e.value)
    }

    console.log(grade, sectionName, weekDay)

    const gradeOptions = [
      {value: "1", label: 1},
      {value: "2", label: 2},
      {value: "3", label: 3},
      {value: "4", label: 4},
      {value: "5", label: 5},
      {value: "6", label: 6},
      {value: "7", label: 7},
      {value: "8", label: 8},
      {value: "9", label: 9},
      {value: "10", label: 10},
     ]

    const SectionOption = [
      { label: "A", value: "1" },
      { label: "B", value: "2" },
      { label: "C", value: "3" },
      { label: "D", value: "4" },
    ];

    const DayOption = [
      { label: "Monday", value: "Monday" },
      { label: "Tuesday", value: "Tuesday" },
      { label: "Wednesday", value: "Wednesday" },
      { label: "Thursday", value: "Thursday" },
      { label: "Friday", value: "Friday" },
      { label: "Saturday", value: "Saturday" },
    ]

    const handleEditState = () => {
      setEditingState(!editingState)
    }

    return (
      <>
      <Row>
            <Col md={3} style={{marginTop:"91px", width:"20%"}}>
                <PrincipalSidebar />     
            </Col>
            <Col md={9} style={{width:"80%"}}>
        <div className="routinemain">
          <div className="masterRoutineheader">
            <Row>
              <Col md={5} style={{ textAlign: "left", paddingLeft: "50px" }}>
                <h3>Master Routine</h3>
              </Col>
              <Col md={2}>
              <span>Grade</span>
            <Select className='reportHeading' placeholder="Select Grade" options={gradeOptions} onChange={e => handleGradeChange(e)} isSearchable={false} />
              </Col>
              <Col md={3}>
              <span>Section</span>
            <Select className='reportHeading' placeholder="Select Section" options={SectionOption} onChange={e => handleSectionChange(e)} isSearchable={false} />
              </Col>
              <Col md={2}>
                <Button variant="outline-primary" onClick={handleShowModal} style={{marginTop:"22px"}}>
                  + Add Routine
                </Button>{" "}
              </Col>
            </Row>
          </div>
          <div className="routineSection">
          <Row>
            <Col md={5}></Col>
          <Col md = {2}>
          <Select className='reportHeading' placeholder="Select Day" options={DayOption} onChange={e => handleDayChange(e)} isSearchable={false} />
          </Col>
          <Col md={5}></Col>
        </Row>
            
            
            <Table  bordered hover>
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
                    {`${grade} ${sectionName}`}
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
                {/* <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td><Button onClick={handleEditState}>{editingState ? "Save" : "Edit"}</Button></td> */}
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>

                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                <td><Button onClick={handleEditState}>{editingState ? "Save" : "Edit"}</Button></td>
                </tr>
                <tr>
                {/* <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td style={{width:"0px"}}>{editingState ? <input style={{border:"none", width: "104px"}} type="text" /> : <input disabled style={{border:"none", width: "104px"}} type="text" />}</td>
                  <td><Button onClick={handleEditState}>{editingState ? "Save" : "Edit"}</Button></td> */}
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>

                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                  <td>8:00 - 8:30</td>
                <td><Button onClick={handleEditState}>{editingState ? "Save" : "Edit"}</Button></td>
                </tr>
                
              </tbody>
              
            </Table>
            <Row>
              <Col md={10}></Col>
          <Col md = {2}>
          <Button variant="outline-primary">Create Routine</Button>
          </Col>
        </Row>
          </div>
        </div>
        </Col>
        </Row>
       {showAddRoutine && <AddRoutine show={showAddRoutine} onHide={() => {setShowAddRoutine(false)}} masterRoutineData={masterRoutineData} />}
      </>
    );
}

export default MasterRoutine;