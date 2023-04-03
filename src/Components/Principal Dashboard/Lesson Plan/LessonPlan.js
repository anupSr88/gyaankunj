import React, { useEffect, useState } from 'react';
import { Row, Col, Dropdown, Button, Table } from "react-bootstrap";
import './LessonPlan.css'
import LessonPlanPrinciView from './LessonPlanForPrincipal'
import {getLessonPlan, getLessonPlanMetadata, getTeachersData } from '../../../ApiClient'
import PrincipalSidebar from '../PrincipalSidebar';
import { FaCheckSquare } from "react-icons/fa";

const TLessonPlan = () => {

    const [showAddLessonPlan, setShowAddLessonPlan] = useState(false)
    const [lessonPlanData, setLessonPlanData] = useState(false)
    const [teacherData, setTeacherData] = useState([])
    const [teacherName, setTeacherName] = useState('')

    useEffect(() => {
      getAllTeachersData()
    },[])

    const handleShowPlanModal = () => {
        setShowAddLessonPlan(true)
    }

    const getAllTeachersData = () => {
      getTeachersData()
      .then((res) => {
        setTeacherData(res.data)
        // const teacherData = res.data
        // return teacherData;
      })
      // .catch((err) => console.log("Teachers err - ",  err))
    }

    // const viewLessonPlan = () => {
    //   const teacher = "TEACHER_2"
    //   getLessonPlan(teacher)
    //   .then((res) => setLessonPlanData(res.data))
    //   .catch((err) => console.log(err))
    // }

    const handleTeacherChange = (e) => {
      setTeacherName(e.target.value)
    }

    const lessonPlans = () => {
      const teacher_id = teacherName
      getLessonPlan(teacher_id)
      .then((res) => setLessonPlanData(res.data))
      .catch((err) => console.log(err))
    }

    console.log("teacherName - ", teacherName)

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
              <Col md={8} style={{ textAlign: "left", paddingLeft: "50px" }}>
                <h3>Lesson Plan</h3>
              </Col>
              <Col md={3} style={{paddingLeft: "119px"}}>
              <select className="teacherScheduleBlock" name="teacher" id="teacher" onChange = {(e) => handleTeacherChange(e)}>
                <option value="">--Teacher--</option>
                  {teacherData?.teachers?.map((teacher) => {
                    return <option value={teacher.teacher_id}>{teacher.teacher_name}</option>
                  })}
                </select>
              </Col>
              <Col md={1}>
                  {teacherName !== '' && <FaCheckSquare onClick={lessonPlans} style={{height:"40px", width:"40px", color:"blue", cursor:"pointer"}} />}
                  </Col>
            </Row>
          </div>
          <div className="routineSection">
            <div className='lessonPlanDetails'>
              <LessonPlanPrinciView lessonPlanData={lessonPlanData} />
            </div>
          </div>
        </div>
        </Col>
        </Row>
      </>
    );
}

export default TLessonPlan;