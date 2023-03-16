import React, { useEffect, useState } from 'react';
import { Row, Col, Dropdown, Button, Table } from "react-bootstrap";
import './MasterRoutine.css'
import AddRoutine from './AddRoutine'
import axios from 'axios'
import { getMasterRoutineData, viewMasterRoutine } from '../../../ApiClient'
import Select from 'react-select'
import PrincipalSidebar from '../PrincipalSidebar';
import mockData from '../../../Mock Data/masterRoutineMockData.json'

const MasterRoutine = () => {

    const [showAddRoutine, setShowAddRoutine] = useState(false)
    const [masterRoutineData, setMasterRoutineData] = useState({})
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

    // const getMasterRoutine = () => {
    //   getMasterRoutineData()
    //   .then((res) => setMasterRoutineData(res.data))
    //   .catch((err) => console.log("error", err))
    // }

    const viewMasterRoutineData = () => {
      const day = "Thursday"
      const grade_id = "1"
      viewMasterRoutine(day, grade_id)
      .then((res) => setMasterRoutineData(res.data))
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

    

    // const sectionA_data = masterRoutineData?.time_table?.grade_1?.section_A

    // const sectionB_data = masterRoutineData?.time_table?.grade_1?.section_B

    // console.log("sectionA_data - ", sectionA_data)
    

    // console.log("sectionB_data - ", sectionB_data)

    console.log("mockData - ", mockData.time_table.grade_1)

    

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
              <Col md={2} style={{ position: "relative", bottom: "22px" }}>
              <span>Grade</span>
            <Select className='reportHeading' placeholder="Select Grade" options={gradeOptions} onChange={e => handleGradeChange(e)} isSearchable={false} />
              </Col>
              <Col md={3} style={{ position: "relative", bottom: "22px" }}>
              <span>Section</span>
            <Select className='reportHeading' placeholder="Select Section" options={SectionOption} onChange={e => handleSectionChange(e)} isSearchable={false} />
              </Col>
              <Col md={2} style={{ position: "relative", bottom: "22px" }}>
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
                  {/* <th style={{color: "#F3FAFF", backgroundColor:"#3F4954"}} >BREAK</th> */}
                  <th>5th</th>
                  <th>6th</th>
                  <th>7th</th>
                  <th>8th</th>
                  
                </tr>
              </thead>
             
                {/* <tbody className='routineTable'>
                <tr>
                  <td className='gradeStyle' style={{color: "#F3FAFF", backgroundColor:"#3F4954"}} rowSpan="4">
                    {`${grade} ${sectionName}`}
                  </td>
                  </tr>
                  <tr>      
                  <td>{sectionA_data?.time_range[0]}</td>
                  <td>{sectionA_data?.time_range[0]}</td>
                  <td>{sectionA_data?.time_range[0]}</td>
                  <td>{sectionA_data?.time_range[0]}</td>
                  <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>
                  <td>{sectionA_data?.time_range[0]}</td>
                  <td>{sectionA_data?.time_range[0]}</td>
                  <td>{sectionA_data?.time_range[0]}</td>
                  <td>{sectionA_data?.time_range[0]}</td>
                  </tr>

                  <tr>      
                  <td>{sectionA_data?.subject[0]}</td>
                  <td>{sectionA_data?.subject[0]}</td>
                  <td>{sectionA_data?.subject[0]}</td>
                  <td>{sectionA_data?.subject[0]}</td>
                  <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>
                  <td>{sectionA_data?.subject[0]}</td>
                  <td>{sectionA_data?.subject[0]}</td>
                  <td>{sectionA_data?.subject[0]}</td>
                  <td>{sectionA_data?.subject[0]}</td>
                  </tr>
                  
                  <tr>      
                  <td>{sectionA_data?.teacher[0]}</td>
                  <td>{sectionA_data?.teacher[0]}</td>
                  <td>{sectionA_data?.teacher[0]}</td>
                  <td>{sectionA_data?.teacher[0]}</td>
                  <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>
                  <td>{sectionA_data?.teacher[0]}</td>
                  <td>{sectionA_data?.teacher[0]}</td>
                  <td>{sectionA_data?.teacher[0]}</td>
                  <td>{sectionA_data?.teacher[0]}</td>
                  </tr>
                
              </tbody> */}

              {mockData?.time_table?.grade_1?.map((mock, indx) => {
                console.log('mock - ', indx, mock)
                return <tbody>
                  <tr>
                  <td className='gradeStyle' style={{color: "#F3FAFF", backgroundColor:"#3F4954"}} rowSpan="4">
                    {`${indx + 1} ${sectionName}`}
                  </td>
                  </tr>
                  <tr>
                    {mock?.section_A?.time_range?.map((time, indx) => {
                     return <td>
                      {time}
                    </td>
                    })}
                  </tr>
                  <tr>
                    {mock?.section_A?.subject?.map((subject, indx) => {
                     return <td>
                      {subject}
                    </td>
                    })}
                  </tr>
                  <tr>
                    {mock?.section_A?.teacher?.map((teacher, indx) => {
                     return <td>
                      {teacher}
                    </td>
                    })}
                  </tr>

                </tbody>
              })}
              
              
            </Table>
          </div>
        </div>
        </Col>
        </Row>
       {showAddRoutine && <AddRoutine show={showAddRoutine} onHide={() => {setShowAddRoutine(false)}} masterRoutineData={masterRoutineData} />}
      </>
    );
}

export default MasterRoutine;