import React from 'react';
import { Row, Col, ButtonGroup, ToggleButton, Dropdown, Table, ProgressBar, Button } from "react-bootstrap";
import { useState } from "react";
import AddLogBook from './AddLogbook'
import { viewLogBook } from '../../../ApiClient'
import Select from 'react-select'
import { useEffect } from 'react';

const LogBook = () => {

  const [showAddLogbook, setShowAddLogbook] = useState(false)
  const [section, setSection] = useState('')
  const [classData, setClassData] = useState('')

  // useEffect(() => {
  //   showLogBookData()
  // })

  const handleShowLogBook = () => {
    setShowAddLogbook(true)
  }

  const classOptions = [
    {value: 1, label: 1},
    {value: 2, label: 2},
    {value: 3, label: 3},
    {value: 4, label: 4},
    {value: 5, label: 5},
    {value: 6, label: 6},
    {value: 7, label: 7},
    {value: 8, label: 8},
    {value: 9, label: 9},
    {value: 10, label: 10},
   ]

  const sectionOptions = [
    { value: '1', label: 'A' },
    { value: '2', label: 'B' },
    { value: '3', label: 'C' },
    { value: '4', label: 'D' }
  ]

  const handleSectionChange = (e) => {
    setSection(e.value)
  }

  const handleClassChange = (e) => {
    setClassData(e.value)
  }

  const showLogBookData = () => {
    // const postData = {
    //   "date":'',
    //   "grade_id": classData && classData,
    //   "section_id": section && section
    // }
    viewLogBook('', classData, section)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  console.log("classData - ", classData)
  console.log("section - ", section)


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
            <Col md={5}>
            <h4>Log Book</h4>
            </Col>
            <Col md={2} className="teacherRoutingDD">
            <span>
            <Select placeholder="Select Section" isSearchable={false} options={sectionOptions} onChange={e => handleSectionChange(e)} />
                </span>
            </Col>
            <Col md={2} className="teacherRoutingDD">
            <span>
            <Select placeholder="Select Class" isSearchable={false} options={classOptions} onChange={e => handleClassChange(e)} />
                </span>
            </Col>
            <Col md={1} style={{paddingTop:"17px"}}>
              <Button onClick={showLogBookData}>Search</Button>
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