import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col, Card } from "react-bootstrap";
import Select from "react-select";
import {  saveLessonPlan, getLessonPlanMetadata, getGradeDetails } from "../../../ApiClient";
import './assignment.css'
import AddQuestionSet from "./AddQuestionSet";

const CreateAssignment = (props) => {

    const [fullscreen, setFullscreen] = useState(true);
    const [questionType, setQuestionType] = useState('')
    const [AssignmentDataFromSingleChild, setAssignmentDataFromSingleChild] = useState([])
    const [assignmentFinalQuestionData, setAssignmentFinalQuestionData] = useState([])
    const [questionData, setQuestionData] = useState(false)
    const [questionSetData, setQuestionSetData] = useState([])

    // useEffect(() => {
    //   assignmentDataFinal()
    // },[])

    const questionTypeOptions = [
        { value: "fill_in_the_blanks", label: "Fill in the blanks" },
        { value: "multiple_choice(radio)", label: "Single Select" },
        { value: "multiple_choice(checkbox)", label: "Multiple Choice" },
        { value: "subjective", label: "Subjective" },
        { value: "unjumble", label: "Unjumble the word" },
    ]

    // const dataFromSingleChild = (data) => {
    //   setAssignmentDataFromSingleChild(data)
    // }

    const addQuestionSetData = () => {
      setQuestionData(true)
    }

    const finalDataSetFromChild = (finalData) => {
      setQuestionSetData(finalData)
    }

    const closeAndLoad = () => {
      setQuestionData(false)
      assignmentDataFinal()
    }

    const assignmentDataFinal = () => {
      debugger
      let newMember = [...assignmentFinalQuestionData];
      let newData = [questionSetData]
  
      newMember = [...newMember, newData];
  
      setAssignmentFinalQuestionData(newMember);



    //   let dataFromChild = [...questionSetData]
    //   setAssignmentFinalQuestionData(questionSetData)
    // dataFromChild = [...dataFromChild, assignmentFinalQuestionData]
    // console.log("dataFromChild - ", dataFromChild)
    // setQuestionSetData(dataFromChild)
  }

  console.log("assignmentFinalQuestionData - ", assignmentFinalQuestionData)

    

    // const assignmentDataToSubmit = () => {
    //   const finalDataSet = {
    //     "question_number_1": {
    //       "type": AssignmentDataFromSingleChild?.type,
    //       "question": AssignmentDataFromSingleChild?.question,
    //       "correct_answer": "",
    //       "all_options": AssignmentDataFromSingleChild.all_options,
    //       "marks": "5 marks"
    //   }
    //   }
    //   setAssignmentFinalQuestionData([finalDataSet, ...assignmentFinalQuestionData])
    // }

    // console.log("AssignmentDataFromSingleChild - ", AssignmentDataFromSingleChild)
    
    // console.log("assignmentFinalQuestionData - ", assignmentFinalQuestionData)

    console.log("questionSetData - ", questionSetData)

  return (
    <>
    
      <Modal
        className="ModalBody"
        {...props}
        // size="xl"
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              font: "normal normal bold 22px/34px Roboto",
              alignItems: "center",
            }}
          >
            Create Assignment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={3}>
              
            </Col>
            <Col md={6}>
              {questionSetData?.question?.length > 0 ? <Card className="lessonPlanCardHeader">
                <Card.Body>
                  <Row>
                    <Col md={12} className="lessonHeading">
                      <h6>{questionSetData?.question}</h6>
                    </Col>
                    

                    
                  </Row>
                </Card.Body>
              </Card>
              :
              ""}
              {/* <p>{questionSetData?.type}</p>
              <p>{questionSetData?.question}</p>
              <p>{questionSetData?.marks}</p> */}
              {/* {questionSetData?.all_options?.map((option, indx) => {
               return (<input>{option}</input>)
              })} */}
            </Col>
            <Col md={1}></Col>
            <Col md={2}>
              <Button variant="success" onClick={addQuestionSetData}>
                Add Questions
              </Button>
            </Col>
          </Row>
        </Modal.Body>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Button variant="outline-primary">Create Assignment</Button>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Modal>
      {questionData && (
        <AddQuestionSet
        closeModal={closeAndLoad}
          show={questionData}
          onHide={() => setQuestionData(false)}
          finalDataSetFromChild={finalDataSetFromChild}
        />
      )}
    </>
  );
};

export default CreateAssignment;
