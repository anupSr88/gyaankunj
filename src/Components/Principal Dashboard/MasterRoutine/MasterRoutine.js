import React, { useEffect, useState } from 'react';
import { Row, Col, Dropdown, Button, Table } from "react-bootstrap";
import './MasterRoutine.css'
import AddRoutine from './AddRoutine'
import axios from 'axios'
import { getMasterRoutineData, viewMasterRoutine } from '../../../ApiClient'
import Select from 'react-select'
import PrincipalSidebar from '../PrincipalSidebar';
import mockData from '../../../Mock Data/masterRoutineMockData.json'
import { FaCheckSquare } from "react-icons/fa";

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
      const day = weekDay
      const grade_id = grade
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

    

    const sectionA_data = masterRoutineData?.time_table?.grade_One?.section_A && masterRoutineData?.time_table?.grade_One?.section_A

    const sectionB_data = masterRoutineData?.time_table?.grade_One?.section_B && masterRoutineData?.time_table?.grade_One?.section_B

    const sectionC_data = masterRoutineData?.time_table?.grade_One?.section_C && masterRoutineData?.time_table?.grade_One?.section_C

    const sectionD_data = masterRoutineData?.time_table?.grade_One?.section_C && masterRoutineData?.time_table?.grade_One?.section_D

    const sectionE_data = masterRoutineData?.time_table?.grade_One?.section_C && masterRoutineData?.time_table?.grade_One?.section_E

    console.log("sectionA_data - ", sectionA_data)
    console.log("sectionB_data - ", sectionB_data)
    console.log("sectionC_data - ", sectionC_data)
    

    // console.log("sectionB_data - ", sectionB_data)

    console.log("mockData - ", mockData.time_table.grade_One)

    

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
              <Col md={3} style={{ textAlign: "left", paddingLeft: "50px" }}>
                <h3>Master Routine</h3>
              </Col>
              <Col md={2} style={{ position: "relative", bottom: "22px" }}>
              <span>Grade</span>
            <Select className='reportHeading' placeholder="Select Grade" options={gradeOptions} onChange={e => handleGradeChange(e)} isSearchable={false} />
              </Col>
              <Col md={3} style={{ position: "relative", bottom: "22px" }}>
              <span>Day</span>
              <Select className='reportHeading' placeholder="Select Day" options={DayOption} onChange={e => handleDayChange(e)} isSearchable={false} />
              </Col>
              <Col md={1}>
              {(grade && weekDay) && <FaCheckSquare onClick={viewMasterRoutineData} style={{height:"40px", width:"40px", color:"blue", cursor:"pointer"}} />} 
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
            <h4>{masterRoutineData.day}</h4>
          </Col>
          <Col md={5}></Col>
        </Row>
            
            
            <Table Stripprd bordered hover>
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>1st</th>
                  <th>2nd</th>
                  <th>3rd</th>
                  <th>4th</th>
                  <th style={{color: "#F3FAFF", backgroundColor:"#3F4954"}} >BREAK</th>
                  <th>5th</th>
                  <th>6th</th>
                  <th>7th</th>
                  <th>8th</th>
                  
                </tr>
              </thead>
             
                <tbody className='routineTable'>
                
                <tr>
                  {sectionA_data && <td className='gradeStyle' style={{color: "#F3FAFF", backgroundColor:"#3F4954"}} rowSpan="4">
                    {masterRoutineData.time_table && `${grade}A`}
                  </td>}
                  </tr>
                  <tr>      
                  {sectionA_data && <td style={{backgroundColor:"cyan"}}>{sectionA_data?.time_range[0]}</td>}
                  {sectionA_data && <td style={{backgroundColor:"cyan"}}>{sectionA_data?.time_range[1]}</td>}
                  {sectionA_data && <td style={{backgroundColor:"cyan"}}>{sectionA_data?.time_range[2]}</td>}
                  {sectionA_data && <td style={{backgroundColor:"cyan"}}>{sectionA_data?.time_range[3]}</td>}
                 {sectionA_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionA_data && <td style={{backgroundColor:"cyan"}}>{sectionA_data?.time_range[4]}</td>}
                  {sectionA_data && <td style={{backgroundColor:"cyan"}}>{sectionA_data?.time_range[5]}</td>}
                  {sectionA_data && <td style={{backgroundColor:"cyan"}}>{sectionA_data?.time_range[6]}</td>}
                  {sectionA_data && <td style={{backgroundColor:"cyan"}}>{sectionA_data?.time_range[7]}</td>}
                  </tr>

                  <tr>      
                  {sectionA_data && <td>{sectionA_data?.subject[0]}</td>}
                  {sectionA_data && <td>{sectionA_data?.subject[1]}</td>}
                  {sectionA_data && <td>{sectionA_data?.subject[2]}</td>}
                  {sectionA_data && <td>{sectionA_data?.subject[3]}</td>}
                  {sectionA_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionA_data && <td>{sectionA_data?.subject[4]}</td>}
                  {sectionA_data && <td>{sectionA_data?.subject[5]}</td>}
                  {sectionA_data && <td>{sectionA_data?.subject[6]}</td>}
                  {sectionA_data && <td>{sectionA_data?.subject[7]}</td>}
                  </tr>
                  
                  <tr style={{borderBottom:"2px solid #3A444E"}}>      
                  {sectionA_data && <td style={{backgroundColor:"lightGray"}}>{sectionA_data?.teacher[0]}</td>}
                  {sectionA_data && <td style={{backgroundColor:"lightGray"}}>{sectionA_data?.teacher[1]}</td>}
                  {sectionA_data && <td style={{backgroundColor:"lightGray"}}>{sectionA_data?.teacher[2]}</td>}
                  {sectionA_data && <td style={{backgroundColor:"lightGray"}}>{sectionA_data?.teacher[3]}</td>}
                  {sectionA_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionA_data && <td style={{backgroundColor:"lightGray"}}>{sectionA_data?.teacher[4]}</td>}
                  {sectionA_data && <td style={{backgroundColor:"lightGray"}}>{sectionA_data?.teacher[5]}</td>}
                  {sectionA_data && <td style={{backgroundColor:"lightGray"}}>{sectionA_data?.teacher[6]}</td>}
                  {sectionA_data && <td style={{backgroundColor:"lightGray"}}>{sectionA_data?.teacher[7]}</td>}
                  </tr>


                  {/* Section B */}

                  <tr>
                  {sectionB_data && <td className='gradeStyle' style={{color: "#F3FAFF", backgroundColor:"#3F4954"}} rowSpan="4">
                    {`${grade}B`}
                  </td>}
                  </tr>
                  {/* <tr>      
                  {sectionB_data && <td style={{backgroundColor:"cyan"}}>{sectionB_data?.time_range[0]}</td>}
                  {sectionB_data && <td style={{backgroundColor:"cyan"}}>{sectionB_data?.time_range[1]}</td>}
                  {sectionB_data && <td style={{backgroundColor:"cyan"}}>{sectionB_data?.time_range[2]}</td>}
                  {sectionB_data && <td style={{backgroundColor:"cyan"}}>{sectionB_data?.time_range[3]}</td>}
                 {sectionB_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionB_data && <td style={{backgroundColor:"cyan"}}>{sectionB_data?.time_range[4]}</td>}
                  {sectionB_data && <td style={{backgroundColor:"cyan"}}>{sectionB_data?.time_range[5]}</td>}
                  {sectionB_data && <td style={{backgroundColor:"cyan"}}>{sectionB_data?.time_range[6]}</td>}
                  {sectionB_data && <td style={{backgroundColor:"cyan"}}>{sectionB_data?.time_range[7]}</td>}
                  </tr> */}

                  <tr>      
                  {sectionB_data && <td>{sectionB_data?.subject[0]}</td>}
                  {sectionB_data && <td>{sectionB_data?.subject[1]}</td>}
                  {sectionB_data && <td>{sectionB_data?.subject[2]}</td>}
                  {sectionB_data && <td>{sectionB_data?.subject[3]}</td>}
                  {sectionB_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionB_data && <td>{sectionB_data?.subject[4]}</td>}
                  {sectionB_data && <td>{sectionB_data?.subject[5]}</td>}
                  {sectionB_data && <td>{sectionB_data?.subject[6]}</td>}
                  {sectionB_data && <td>{sectionB_data?.subject[7]}</td>}
                  </tr>
                  
                  <tr style={{borderBottom:"2px solid #3A444E"}}>      
                  {sectionB_data && <td style={{backgroundColor:"lightGray"}}>{sectionB_data?.teacher[0]}</td>}
                  {sectionB_data && <td style={{backgroundColor:"lightGray"}}>{sectionB_data?.teacher[1]}</td>}
                  {sectionB_data && <td style={{backgroundColor:"lightGray"}}>{sectionB_data?.teacher[2]}</td>}
                  {sectionB_data && <td style={{backgroundColor:"lightGray"}}>{sectionB_data?.teacher[3]}</td>}
                  {sectionB_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionB_data && <td style={{backgroundColor:"lightGray"}}>{sectionB_data?.teacher[4]}</td>}
                  {sectionB_data && <td style={{backgroundColor:"lightGray"}}>{sectionB_data?.teacher[5]}</td>}
                  {sectionB_data && <td style={{backgroundColor:"lightGray"}}>{sectionB_data?.teacher[6]}</td>}
                  {sectionB_data && <td style={{backgroundColor:"lightGray"}}>{sectionB_data?.teacher[7]}</td>}
                  </tr>

                  {/* Sectrion C */}


                  <tr>
                  {sectionC_data && <td className='gradeStyle' style={{color: "#F3FAFF", backgroundColor:"#3F4954"}} rowSpan="4">
                    {`${grade}C`}
                  </td>}
                  </tr>
                  <tr>      
                  {sectionC_data && <td style={{backgroundColor:"cyan"}}>{sectionC_data?.time_range[0]}</td>}
                  {sectionC_data && <td style={{backgroundColor:"cyan"}}>{sectionC_data?.time_range[1]}</td>}
                  {sectionC_data && <td style={{backgroundColor:"cyan"}}>{sectionC_data?.time_range[2]}</td>}
                  {sectionC_data && <td style={{backgroundColor:"cyan"}}>{sectionC_data?.time_range[3]}</td>}
                 {sectionC_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionC_data && <td style={{backgroundColor:"cyan"}}>{sectionC_data?.time_range[4]}</td>}
                  {sectionC_data && <td style={{backgroundColor:"cyan"}}>{sectionC_data?.time_range[5]}</td>}
                  {sectionC_data && <td style={{backgroundColor:"cyan"}}>{sectionC_data?.time_range[6]}</td>}
                  {sectionC_data && <td style={{backgroundColor:"cyan"}}>{sectionC_data?.time_range[7]}</td>}
                  </tr>

                  <tr>      
                  {sectionC_data && <td>{sectionC_data?.subject[0]}</td>}
                  {sectionC_data && <td>{sectionC_data?.subject[1]}</td>}
                  {sectionC_data && <td>{sectionC_data?.subject[2]}</td>}
                  {sectionC_data && <td>{sectionC_data?.subject[3]}</td>}
                  {sectionC_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionC_data && <td>{sectionC_data?.subject[4]}</td>}
                  {sectionC_data && <td>{sectionC_data?.subject[5]}</td>}
                  {sectionC_data && <td>{sectionC_data?.subject[6]}</td>}
                  {sectionC_data && <td>{sectionC_data?.subject[7]}</td>}
                  </tr>
                  
                  <tr style={{borderBottom:"2px solid #3A444E"}}>      
                  {sectionC_data && <td style={{backgroundColor:"lightGray"}}>{sectionC_data?.teacher[0]}</td>}
                  {sectionC_data && <td style={{backgroundColor:"lightGray"}}>{sectionC_data?.teacher[1]}</td>}
                  {sectionC_data && <td style={{backgroundColor:"lightGray"}}>{sectionC_data?.teacher[2]}</td>}
                  {sectionC_data && <td style={{backgroundColor:"lightGray"}}>{sectionC_data?.teacher[3]}</td>}
                  {sectionC_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionC_data && <td style={{backgroundColor:"lightGray"}}>{sectionC_data?.teacher[4]}</td>}
                  {sectionC_data && <td style={{backgroundColor:"lightGray"}}>{sectionC_data?.teacher[5]}</td>}
                  {sectionC_data && <td style={{backgroundColor:"lightGray"}}>{sectionC_data?.teacher[6]}</td>}
                  {sectionC_data && <td style={{backgroundColor:"lightGray"}}>{sectionC_data?.teacher[7]}</td>}
                  </tr>


                  {/* Section D */}

                  <tr>
                  {sectionD_data && <td className='gradeStyle' style={{color: "#F3FAFF", backgroundColor:"#3F4954"}} rowSpan="4">
                    {`${grade}D`}
                  </td>}
                  </tr>
                  <tr>      
                  {sectionD_data && <td style={{backgroundColor:"cyan"}}>{sectionD_data?.time_range[0]}</td>}
                  {sectionD_data && <td style={{backgroundColor:"cyan"}}>{sectionD_data?.time_range[1]}</td>}
                  {sectionD_data && <td style={{backgroundColor:"cyan"}}>{sectionD_data?.time_range[2]}</td>}
                  {sectionD_data && <td style={{backgroundColor:"cyan"}}>{sectionD_data?.time_range[3]}</td>}
                 {sectionD_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionD_data && <td style={{backgroundColor:"cyan"}}>{sectionD_data?.time_range[4]}</td>}
                  {sectionD_data && <td style={{backgroundColor:"cyan"}}>{sectionD_data?.time_range[5]}</td>}
                  {sectionD_data && <td style={{backgroundColor:"cyan"}}>{sectionD_data?.time_range[6]}</td>}
                  {sectionD_data && <td style={{backgroundColor:"cyan"}}>{sectionD_data?.time_range[7]}</td>}
                  </tr>

                  <tr>      
                  {sectionD_data && <td>{sectionD_data?.subject[0]}</td>}
                  {sectionD_data && <td>{sectionD_data?.subject[1]}</td>}
                  {sectionD_data && <td>{sectionD_data?.subject[2]}</td>}
                  {sectionD_data && <td>{sectionD_data?.subject[3]}</td>}
                  {sectionD_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionD_data && <td>{sectionD_data?.subject[4]}</td>}
                  {sectionD_data && <td>{sectionD_data?.subject[5]}</td>}
                  {sectionD_data && <td>{sectionD_data?.subject[6]}</td>}
                  {sectionD_data && <td>{sectionD_data?.subject[7]}</td>}
                  </tr>
                  
                  <tr style={{borderBottom:"2px solid #3A444E"}}>      
                  {sectionD_data && <td style={{backgroundColor:"lightGray"}}>{sectionD_data?.teacher[0]}</td>}
                  {sectionD_data && <td style={{backgroundColor:"lightGray"}}>{sectionD_data?.teacher[1]}</td>}
                  {sectionD_data && <td style={{backgroundColor:"lightGray"}}>{sectionD_data?.teacher[2]}</td>}
                  {sectionD_data && <td style={{backgroundColor:"lightGray"}}>{sectionD_data?.teacher[3]}</td>}
                  {sectionD_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionD_data && <td style={{backgroundColor:"lightGray"}}>{sectionD_data?.teacher[4]}</td>}
                  {sectionD_data && <td style={{backgroundColor:"lightGray"}}>{sectionD_data?.teacher[5]}</td>}
                  {sectionD_data && <td style={{backgroundColor:"lightGray"}}>{sectionD_data?.teacher[6]}</td>}
                  {sectionD_data && <td style={{backgroundColor:"lightGray"}}>{sectionD_data?.teacher[7]}</td>}
                  </tr>

                  {/* Section E */}

                  <tr>
                  {sectionE_data && <td className='gradeStyle' style={{color: "#F3FAFF", backgroundColor:"#3F4954"}} rowSpan="4">
                    {`${grade}E`}
                  </td>}
                  </tr>
                  <tr>      
                  {sectionE_data && <td style={{backgroundColor:"cyan"}}>{sectionE_data?.time_range[0]}</td>}
                  {sectionE_data && <td style={{backgroundColor:"cyan"}}>{sectionE_data?.time_range[1]}</td>}
                  {sectionE_data && <td style={{backgroundColor:"cyan"}}>{sectionE_data?.time_range[2]}</td>}
                  {sectionE_data && <td style={{backgroundColor:"cyan"}}>{sectionE_data?.time_range[3]}</td>}
                 {sectionE_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionE_data && <td style={{backgroundColor:"cyan"}}>{sectionE_data?.time_range[4]}</td>}
                  {sectionE_data && <td style={{backgroundColor:"cyan"}}>{sectionE_data?.time_range[5]}</td>}
                  {sectionE_data && <td style={{backgroundColor:"cyan"}}>{sectionE_data?.time_range[6]}</td>}
                  {sectionE_data && <td style={{backgroundColor:"cyan"}}>{sectionE_data?.time_range[7]}</td>}
                  </tr>

                  <tr>      
                  {sectionE_data && <td>{sectionE_data?.subject[0]}</td>}
                  {sectionE_data && <td>{sectionE_data?.subject[1]}</td>}
                  {sectionE_data && <td>{sectionE_data?.subject[2]}</td>}
                  {sectionE_data && <td>{sectionE_data?.subject[3]}</td>}
                  {sectionE_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionE_data && <td>{sectionE_data?.subject[4]}</td>}
                  {sectionE_data && <td>{sectionE_data?.subject[5]}</td>}
                  {sectionE_data && <td>{sectionE_data?.subject[6]}</td>}
                  {sectionE_data && <td>{sectionE_data?.subject[7]}</td>}
                  </tr>
                  
                  <tr style={{borderBottom:"3px solid #3A444E"}}>      
                  {sectionE_data && <td style={{backgroundColor:"lightGray"}}>{sectionE_data?.teacher[0]}</td>}
                  {sectionE_data && <td style={{backgroundColor:"lightGray"}}>{sectionE_data?.teacher[1]}</td>}
                  {sectionE_data && <td style={{backgroundColor:"lightGray"}}>{sectionE_data?.teacher[2]}</td>}
                  {sectionE_data && <td style={{backgroundColor:"lightGray"}}>{sectionE_data?.teacher[3]}</td>}
                  {sectionE_data && <td style={{color: "#F3FAFF", backgroundColor:"#3F4954"}}></td>}
                  {sectionE_data && <td style={{backgroundColor:"lightGray"}}>{sectionE_data?.teacher[4]}</td>}
                  {sectionE_data && <td style={{backgroundColor:"lightGray"}}>{sectionE_data?.teacher[5]}</td>}
                  {sectionE_data && <td style={{backgroundColor:"lightGray"}}>{sectionE_data?.teacher[6]}</td>}
                  {sectionE_data && <td style={{backgroundColor:"lightGray"}}>{sectionE_data?.teacher[7]}</td>}
                  </tr>
                
              </tbody> 
              
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